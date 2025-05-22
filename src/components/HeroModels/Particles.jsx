import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";

const Particles = ({ count = 200 }) => {

    const mesh = useRef();

    // useMemo untuk menghitung posisi dan kecepatan partikel
    // membuat partikel dengan posisi acak di dalam ruang 3D
    const particles= useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            temp.push({
                position: [
                    (Math.random() - 0.5) * 10, // posisi x acak dari -5 ke 5
                    Math.random() * 10 + 5, // posisi y acak dari 5 ke 15
                    (Math.random() - 0.5) * 10, // posisi z acak dari -5 ke 5
                ],
                speed: 0.005 + Math.random() * 0.001, // kecepatan acak dari 0.005 ke 0.006
            });
        }

        return temp;
    }, [count]);

    // membuat animasi tiap frame
    // menggerakan partikel ke bawah dengan kecepatan acak
    // jika partikel sudah keluar dari layar, setel ulang posisi y ke acak antara 5 dan 15
    useFrame(() => {
        const positions = mesh.current.geometry.attributes.position.array;

        for (let i = 0; i < count; i++) {
            let y = positions[i * 3 + 1]; // ambil posisi y partikel
            y -= particles[i].speed; // kurangi posisi y dengan kecepatan partikel

            if (y < -2) y = Math.random() * 10 + 5; // jika y < -2, setel ulang posisi y ke acak antara 5 dan 15
            positions[i * 3 + 1] = y;
        }

        mesh.current.geometry.attributes.position.needsUpdate = true; // memberi tahu Three.js bahwa posisi partikel telah diperbarui
    });

    const positions = new Float32Array(count * 3);
    particles.forEach((p, i) => {
        positions[i * 3] = p.position[0];
        positions[i * 3 + 1] = p.position[1];
        positions[i * 3 + 2] = p.position[2];
    });

  return (
    // membuat partikel dengan posisi acak
    <points ref={mesh} > 
        <bufferGeometry>
            <bufferAttribute 
                attach="attributes-position"
                count={count}
                array={positions}
                itemSize={3}
            />
        </bufferGeometry>

        {/* tampilan material */}
        <pointsMaterial 
            color="#ffffff"
            size={0.05}
            transparent
            opacity={0.9}
            depthWrite={false} // agar partikel tidak menutupi satu sama lain
        />
    </points>
  )
}

export default Particles
