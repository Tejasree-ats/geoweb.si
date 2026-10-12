import { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { sceneColors } from '@/data/scene-colors'

interface SceneProps {
  reducedMotion: boolean
}

function Orrery({ reducedMotion }: SceneProps) {
  const { gl, invalidate } = useThree()
  const assembly = useRef<THREE.Group>(null)
  const orbitOne = useRef<THREE.Group>(null)
  const orbitTwo = useRef<THREE.Group>(null)
  const planet = useRef<THREE.Mesh>(null)
  const desiredRotation = useRef({ x: 0.26, y: -0.24 })

  useEffect(() => {
    const canvas = gl.domElement
    let pointerId: number | null = null
    let previousX = 0
    let previousY = 0

    const handlePointerDown = (event: PointerEvent) => {
      if (event.button !== 0) return
      pointerId = event.pointerId
      previousX = event.clientX
      previousY = event.clientY
      canvas.setPointerCapture(event.pointerId)
    }

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerId !== pointerId) return
      desiredRotation.current.y += (event.clientX - previousX) * 0.005
      desiredRotation.current.x = THREE.MathUtils.clamp(
        desiredRotation.current.x + (event.clientY - previousY) * 0.004,
        -0.55,
        0.8,
      )
      previousX = event.clientX
      previousY = event.clientY
      invalidate()
    }

    const handlePointerUp = (event: PointerEvent) => {
      if (event.pointerId !== pointerId) return
      pointerId = null
    }

    canvas.addEventListener('pointerdown', handlePointerDown)
    canvas.addEventListener('pointermove', handlePointerMove)
    canvas.addEventListener('pointerup', handlePointerUp)
    canvas.addEventListener('pointercancel', handlePointerUp)

    return () => {
      canvas.removeEventListener('pointerdown', handlePointerDown)
      canvas.removeEventListener('pointermove', handlePointerMove)
      canvas.removeEventListener('pointerup', handlePointerUp)
      canvas.removeEventListener('pointercancel', handlePointerUp)
    }
  }, [gl, invalidate])

  useFrame((state, delta) => {
    if (!assembly.current) return
    if (reducedMotion) {
      assembly.current.rotation.x = desiredRotation.current.x
      assembly.current.rotation.y = desiredRotation.current.y
      return
    }

    if (desiredRotation.current.y > Math.PI * 4) desiredRotation.current.y -= Math.PI * 2
    if (desiredRotation.current.y < -Math.PI * 4) desiredRotation.current.y += Math.PI * 2
    if (!reducedMotion) desiredRotation.current.y += delta * 0.075

    assembly.current.rotation.x = THREE.MathUtils.damp(assembly.current.rotation.x, desiredRotation.current.x, 2.5, delta)
    assembly.current.rotation.y = THREE.MathUtils.damp(assembly.current.rotation.y, desiredRotation.current.y, 2.5, delta)
    if (!reducedMotion) {
      assembly.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.16) * 0.035
      if (orbitOne.current) orbitOne.current.rotation.z += delta * 0.12
      if (orbitTwo.current) orbitTwo.current.rotation.y -= delta * 0.09
      if (planet.current) planet.current.rotation.y += delta * 0.22
    }
  })

  return (
    <group ref={assembly} rotation={[0.26, -0.24, -0.16]}>
      <mesh castShadow>
        <sphereGeometry args={[0.72, 48, 48]} />
        <meshPhysicalMaterial color={sceneColors.bronze} metalness={0.79} roughness={0.24} clearcoat={0.7} clearcoatRoughness={0.15} />
      </mesh>
      <mesh scale={0.78}>
        <sphereGeometry args={[0.72, 32, 32]} />
        <meshBasicMaterial color={sceneColors.gold} transparent opacity={0.07} />
      </mesh>
      <group ref={orbitOne} rotation={[1.04, 0.25, 0.34]}>
        <mesh>
          <torusGeometry args={[1.3, 0.017, 10, 128]} />
          <meshStandardMaterial color={sceneColors.brass} metalness={0.9} roughness={0.28} />
        </mesh>
        <mesh position={[1.3, 0, 0]} ref={planet}>
          <sphereGeometry args={[0.105, 24, 24]} />
          <meshStandardMaterial color={sceneColors.teal} metalness={0.56} roughness={0.28} emissive={sceneColors.teal} emissiveIntensity={0.34} />
        </mesh>
      </group>
      <group ref={orbitTwo} rotation={[0.19, 1.11, -0.15]}>
        <mesh>
          <torusGeometry args={[1.67, 0.013, 10, 128]} />
          <meshStandardMaterial color={sceneColors.brassShadow} metalness={0.86} roughness={0.34} />
        </mesh>
        <mesh position={[-1.67, 0, 0]}>
          <sphereGeometry args={[0.075, 22, 22]} />
          <meshStandardMaterial color="#f9dc5c" metalness={0.78} roughness={0.19} emissive="#f9dc5c" emissiveIntensity={0.45} />
        </mesh>
      </group>
      <group rotation={[0.63, -0.84, 0.53]}>
        <mesh>
          <torusGeometry args={[1.93, 0.008, 8, 144]} />
          <meshStandardMaterial color="#9b8959" metalness={0.84} roughness={0.43} />
        </mesh>
        <mesh position={[1.93, 0, 0]}>
          <sphereGeometry args={[0.045, 18, 18]} />
          <meshStandardMaterial color="#e5f993" metalness={0.42} roughness={0.31} emissive="#e5f993" emissiveIntensity={0.35} />
        </mesh>
      </group>
      <mesh position={[0, -2.15, -1.5]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[2.55, 48]} />
        <meshBasicMaterial color="#070f23" transparent opacity={0.28} />
      </mesh>
    </group>
  )
}

export function OrreryScene({ reducedMotion }: SceneProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const updateVisibility = () => setIsVisible(!document.hidden)
    updateVisibility()
    document.addEventListener('visibilitychange', updateVisibility)
    return () => document.removeEventListener('visibilitychange', updateVisibility)
  }, [])

  return (
    <div className="orrery-canvas" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 6.3], fov: 34 }}
        frameloop={!isVisible ? 'never' : reducedMotion ? 'demand' : 'always'}
        dpr={[1, 1.35]}
        gl={{ alpha: true, antialias: true, powerPreference: 'low-power' }}
        fallback={<div className="orrery-fallback" />}
      >
        <ambientLight intensity={1.12} />
        <directionalLight position={[3, 4, 4]} intensity={2.2} color="#fff0c2" />
        <pointLight position={[-2.6, 0.5, -0.5]} intensity={18} distance={8} color="#f9dc5c" />
        <pointLight position={[2.8, -1, 1.4]} intensity={8} distance={6} color="#69a197" />
        <Orrery reducedMotion={reducedMotion} />
      </Canvas>
    </div>
  )
}
