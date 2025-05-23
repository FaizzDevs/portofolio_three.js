import React from 'react'
import { useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
    //  menyimpan referensi langsung ke elemen DOM atau komponen React tanpa menyebabkan re-render.
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);   

    // Menggunakan GSAP untuk animasi
    useGSAP(() => {
        gsap.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5 });

        const cards = [
        project1Ref.current,
        project2Ref.current,
        project3Ref.current
        ];
        //  if (projects.some(p => !p)) return;
        cards.forEach((card, index) => {
            gsap.fromTo(
                card, 
                { 
                    y: 50, 
                    opacity: 0 
                }, 
                { 
                    y: 0, 
                    opacity: 1, 
                    duration: 1, 
                    delay: 0.3 * (index + 1), 
                    scrollTrigger: {
                        trigger: card, 
                        start: "top bottom-=100"
                    }, 

        //              y: 0,
        //   opacity: 1,
        //   duration: 1,
        //   delay: 0.3 * (index + 1),
        //   scrollTrigger: {
        //     trigger: card,
        //     start: "top bottom-=100",
        //   },
                }
            );
        });
        }, [])

  return (
    <section ref={sectionRef} id="work" className="app-showcase w-full mt-20 px-5 flex items-center justify-center py-10 md:px-20 md:py-20">
      <div className="w-full">
        <div className="showcaselayout flex flex-col gap-10 justify-between xl:flex-row">
            {/* Kiri */}
            <div ref={project1Ref} className="first-project-wrapper h-full flex flex-col justify-between xl:w-[60%]">
                <div className="image-wrapper h-96 relative md:h-[50vh] xl:h-[70vh]">
                    <img src="/images/project1.png" alt="Project 1" className="w-full h-full object-cover rounded-xl absolute inset-0" />
                </div>
                <div className="text-content space-y-5 mt-5">
                    <h2 className="text-2xl font-bold md:text-3xl xl:flex-col">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum sit at eius, eligendi autem nisi?</h2>
                    <p className="text-white-50 md:text-xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore id molestiae vitae minus ipsam aut.</p>
                </div>
            </div>

            {/* Kanan */}
            <div className="project-list-wrapper flex flex-col gap-10 md:flex-row xl:flex-col xl:w-[40%] overflow-hidden">
                <div ref={project2Ref} className="project">
                    <div className="image-wrapper h-64 relative rounded-xl py-0 md:h-52 lg:h-72 xl:h-[37vh] xl:px-5 2xl:px-12 bg-amber-100">
                        <img className="w-full h-full object-contain rounded-xl" src="/images/project2.png" alt="Project 2" />
                    </div>
                    <h2 className="text-lg font-semibold mt-5 md:text-xl lg:text-2xl">Library Management</h2>
                </div>

                <div ref={project3Ref} className="project">
                    <div className="image-wrapper h-64 relative rounded-xl py-0 md:h-52 lg:h-72 xl:h-[37vh] xl:px-5 2xl:px-12 bg-pink-100">
                        <img className="w-full h-full object-contain rounded-xl" src="/images/project3.png" alt="Project 3" />
                    </div>
                    <h2 className="text-lg font-semibold mt-5 md:text-xl lg:text-2xl">Directory StartUp</h2>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Showcase
