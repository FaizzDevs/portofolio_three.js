const HeroLights = () => {
  return (
    <>
        {/* pencahayaan */}
        {/* <ambientLight intensity={0.2} color="1a1a40" /> */}
        {/* pencahayaan semacam matahari */}
        {/* <directionalLight position={[5, 5, 5]} intensity={2} /> */}

        {/* pencahayaan dari atas */}
        <spotLight
            position={[5, 8, -1]}
            angle={0.15}
            penumbra={0.2}
            intensity={100}
            color="white"
        />

        <spotLight
            position={[10, 8, -2]}
            angle={0.3}
            penumbra={0.5}
            intensity={40}
            color="4cc9f0"
        />

        <spotLight
            position={[10, 8, -2]}
            angle={0.4}
            penumbra={1}
            intensity={60}
            color="gd4edd"
        />
    </>
  )
}

export default HeroLights
