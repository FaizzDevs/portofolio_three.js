import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import * as THREE from "three"

const Techicon = ({ model }) => {
    const scene = useGLTF(model.modelPath); // hook untuk memuat object 3D
    // hasil useGLTF (scene, nodes, materials)

    useEffect(() => { // hook jika scene sudah siap
        if(model.name === "Interactive Developer") {
            scene.scene.traverse((child) => { // menelusuri node GLTF scene
                if(child.isMesh && child.name === "Object_5") { // isMesh memastikan object nya mesh/material
                    child.material = new THREE.MeshStandardMaterial({ color: "white" }) // mengganti material dengan warna putih
                }
            })
        }
    }, [scene]);

  return (
    <Canvas>
        {/* pencahayaan */}
      <ambientLight intensity={1}/> 
      <directionalLight position={[5, 5, 5]} intensity={1} />
      {/* menambahkan environment map */}
      <Environment preset="city" />
      {/* memutar object */}
      <OrbitControls enableZoom={false} />

        {/* membuat objek melayang (float) */}
      <Float speed={6} rotationIntensity={1} floatIntensity={1}>
        <group scale={model.scale} rotation={model.rotation}>
            <primitive object={scene.scene} />
        </group>
      </Float>
    </Canvas>
  )
}

export default Techicon;