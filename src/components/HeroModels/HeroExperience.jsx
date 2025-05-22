import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useMediaQuery } from 'react-responsive'
import { Room } from './Room';
import HeroLights from './HeroLights';
import Particles from './Particles';

const HeroExperience = () => {
  // menggunakan react-responsive untuk mendeteksi ukuran layar
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (

    //  canvas untuk rendering 3D model
    // sumbu [x, y, z] untuk posisi kamera
    // fov = seberapa lebar sudut pandang kamera
    <Canvas camera={{ position: [25, 0, 15], fov: 45 }}> 

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
      {/* <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="teal"/>
      </mesh> */}

      {/* pencahayaan */}
      <HeroLights />

      <Particles count={1000} />
      <group
        scale={isMobile? 0.7 : 1}
        position={[0, -3.5, 0]} // [x, y, z]
        rotation={[0, Math.PI / 4, 0]} 
      >
          
          <Room />
      </group>

      
    </Canvas>
  )
}

export default HeroExperience
