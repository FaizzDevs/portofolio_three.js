import * as THREE from 'three';

const HeroLights = () => {
  return (
    <>
        {/* pencahayaan */}
        {/* <ambientLight intensity={0.2} color="1a1a40" /> */}
        {/* pencahayaan semacam matahari */}
        {/* <directionalLight position={[5, 5, 5]} intensity={2} /> */}

        {/* pencahayaan dari atas */}
        <spotLight
            position={[0, 15, 0]}
            angle={0.15}
            penumbra={2}
            intensity={100}
            color="white"
        />

        <spotLight
            position={[10, 8, -2]}
            angle={0.3}
            penumbra={0.5}
            intensity={100}
            color="#4cc9f0"
        />

        <spotLight
            position={[0, 8, 2]}
            angle={0.4}
            penumbra={1}
            intensity={60}
            color="#9d4edd"
        />

        <primitive 
            object={new THREE.RectAreaLight("#A259FF", 5, 2, 2)} // (intensity, width, height)
            position={[0, 1, 0]}
            intensity={10}
            rotation={[-Math.PI / 4, Math.PI / 4, 0]} // -45 derajat (default Math.PI 180 derajat)
        />

        {/* sumber cahaya yang menyebar */}
        <pointLight 
            position={[1, 2,-2]}
            intensity={10}
            color="#0d00a4"
        />
    </>
  )
}

export default HeroLights
