import React from 'react'
import Titleheader from '../components/Titleheader'
import { techStackIcons } from '../constants'
import Techicon from '../components/Models/Techlogos/Techicon'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Techstack = () => {
    useGSAP(() => {
        gsap.fromTo(".tech-card", { y: 50, opacity: 0 }, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.inOut",
            stagger: 0.2,
            scrollTrigger: {
                trigger: "#skills",
                start: "top center",
            }
        })
    })

  return (
    <div id="skills" className="flex-center flex justify-center items-center section-padding px-5 mt-20 md:px-10 md:mt-40">
        <div className="w-full h-full px-5 md:px-10">
            <Titleheader 
                title = "My Preferred Tech Stack"
                sub = "The skills I bring to the table"
            />

            <div className="tech-grid grid grid-cols-1 gap-5 mt-16 md:grid-cols-3 md:gap-10 xl:grid-cols-5 xl:gap-16">
                {techStackIcons.map((icon) => (
                    <div key={icon.name} className="card-border border border-black-50 bg-black-100 tech-card overflow-hidden group xl:rounded-full rounded-lg">
                        <div className="tech-card-animated-bg bg-[#2D3240] absolute h-full w-full left-0 bottom-[-100%] group-hover:bottom-0 transition-all duration-700" />
                        <div className="tech-card-content flex flex-col items-center overflow-hidden relative z-10 group-hover:cursor-grab md:justify-center xl:gap-5 xl:h-[50vh]">
                            <div className="tech-icon-wrapper flex justify-center items-center w-52 h-60 relative">
                                <Techicon model={icon} />
                            </div>

                            <div className="padding-x px-5 md:px-20 w-full">
                                <p className="text-lg pb-5 font-semibold text-white text-center 2xl:text-2xl xl:pb-0">{icon.name}</p>
                            </div>
                        </div>  
                    </div>
                ))}

                {/* {techStackImgs.map((icon) => (
                    <div key={icon.name} className="card-border border border-black-50 bg-black-100 tech-card overflow-hidden group xl:rounded-full rounded-lg">
                        <div className="tech-card-animated-bg bg-[#2D3240] absolute h-full w-full left-0 bottom-[-100%] group-hover:bottom-0 transition-all duration-700" />
                        <div className="tech-card-content flex flex-col items-center overflow-hidden relative z-10 group-hover:cursor-grab md:justify-center xl:gap-5 xl:h-[50vh]">
                            <div className="tech-icon-wrapper">
                                <img src={icon.imgPath} alt="" />
                            </div>

                            <div className="padding-x px-5 md:px-10 w-full">
                                <p className="text-lg pb-5 font-semibold text-white text-center 2xl:text-2xl xl:pb-0">{icon.name}</p>
                            </div>
                        </div>
                    </div>
                ))} */}
            </div>
        </div>
    </div>
  )
}

export default Techstack
