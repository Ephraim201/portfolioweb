
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

const Box = (props) => {
  const meshRef = useRef()
  
  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.2
    meshRef.current.rotation.y += delta * 0.1
  })

  return (
    <mesh {...props} ref={meshRef} castShadow>
      <boxGeometry args={[2, 2, 2]} />
      <meshPhongMaterial
        color="#FF2A6D"
        emissive="#FF2A6D"
        emissiveIntensity={0.5}
        specular="#ff9999"
        shininess={50}
        transparent
        opacity={0.9}
      />
      <lineSegments>
        <edgesGeometry args={[new THREE.BoxGeometry(2, 2, 2)]} />
        <lineBasicMaterial color="#ffffff" linewidth={2} />
      </lineSegments>
    </mesh>
  )
}

const NeonCube = () => {
  return (
    <div className="my-12">
      <h3 className="text-2xl font-bold text-center mb-6 text-[#FF2A6D]">
        Cubo rojo
      </h3>
      <div className="w-full h-64 md:h-96 mx-auto">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 50 }}
          gl={{ 
            antialias: true,
            alpha: true,
          }}
          style={{ background: 'transparent' }}
        >
          <ambientLight intensity={0.3} />
          <directionalLight
            position={[3, 5, 2]}
            intensity={1.2}
            color="#67E099"
          />
          <Box position={[0, 0, 0]} />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            rotateSpeed={0.8}
          />
        </Canvas>
      </div>
      <p className="text-center mt-4 text-gray-400">
        Porque no?
      </p>
    </div>
  )
}

export default NeonCube