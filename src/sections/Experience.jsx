import React from 'react'
import Titleheader from '../components/Titleheader'
import { expCards } from '../constants'
import Glowcards from '../components/Glowcards'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  // hook gsap
  useGSAP(() => {
    gsap.utils.toArray(".timeline-card").forEach((card) => { // mengambil semua elemen dan mengubah ke array
      gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: "left left",
        duration: 1,
        ease: "power2.inOut", // lambat diawal dan akhir
        scrollTrigger: {
            trigger: card, // animasi dimulai ketika card muncul
            start: "top 80%"
        }
      })

      gsap.to(".timeline", {
        transformOrigin: "bottom bottom",
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".timeline",
          start: "top center",
          end: "70% center",
          onUpdate: (self) => { // callback saat scroll
            gsap.to(".timeline", {
              scaleY: 1 - self.progress // progress 0, scaleY 1 - progress 1, scaleY 0
            })
          }
        }
      })
    })

    gsap.utils.toArray(".expText").forEach((text) => { // mengambil semua elemen dan mengubah ke array
      gsap.from(text, {
        xPercent: 0,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut", // lambat diawal dan akhir
        scrollTrigger: {
            trigger: text, // animasi dimulai ketika card muncul
            start: "top 60%"
        }
      })
    })
    
  }, []) // hanya dijalankan sekali []

  return (
    <section id="experience" className="w-full mt-20 section-padding px-5 md:px-10 md:mt-40 xl:px-0">
      <div className="w-full h-full px-5 md:px-20">
            <Titleheader 
                title="Work Professional" 
                sub="🚀 My Career Overview" />

        <div className="mt-32 relative">
          <div className="relative z-50 space-y-10 xl:space-y-32">
              {expCards.map((card, index) => (
                <div key={card.title} className="exp-card-wrapper flex flex-col-reverse gap-10 justify-between xl:flex-row xl:gap-20 ">
                    <div className="xl:w-2/6">
                        <Glowcards card={card} index={index}>
                          <div>
                              <img className="w-32 h-auto" src={card.imgPath} alt={card.title} />
                          </div>
                        </Glowcards>
                    </div>

                    <div className="xl:w-4/6">
                        <div className="flex items-start">
                            <div className="timeline-wrapper ">
                                <div className="timeline" />
                                <div className="gradient-line w-1 h-full" />
                            </div>

                            <div className="expText flex gap-5 relative z-20 md:gap-10 xl:gap-20">
                                <div className="timeline-logo size-10 md:size-20 rounded-full overflow-hidden flex justify-center items-center border border-black-50 bg-white">
                                    <img className="w-12 h-12 object-contain" src={card.logoPath} alt="" />
                                </div>

                                <div >
                                    <h1 className="font-semibold text-2xl">{card.title}</h1>
                                    <p className="my-5 text-white-50">📅{card.date}</p>
                                    <p className="italic text-white-50">Responsibilities</p>
                                    <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                                        {card.responsibilities.map((responsibility) => (
                                          <li key={responsibility} className="text-lg">
                                              {responsibility}
                                          </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
