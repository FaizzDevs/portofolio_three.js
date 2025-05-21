import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useMediaQuery } from 'react-responsive'

const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (

    //  canvas untuk rendering 3D model
    // sumbu [x, y, z] untuk posisi kamera
    // fov = seberapa lebar sudut pandang kamera
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}> 
      {/* pencahayaan */}
      <ambientLight intensity={0.2} color="1a1a40" />
      {/* pencahayaan semacam matahari */}
      <directionalLight position={[5, 5, 5]} intensity={5} />

      {/* orbit control untuk menggerakan kamera */}
      <OrbitControls 
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5} // kamera tidak bisa melihat ke bawah
        maxPolarAngle={Math.PI / 2} //kamera hanya dibatasi sampe 90 derajat
      />

      {/* bentuk objek 3D, bentuk kubus [width, height, depth]  */}
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="teal"/>
      </mesh>
    </Canvas>
  )
}

export default HeroExperience
