import React from 'react'
import Titleheader from '../components/Titleheader'
import { expCards } from '../constants'
import Glowcards from '../components/Glowcards'

const Experience = () => {
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
                              <img src={card.imgPath} alt={card.title} />
                          </div>
                        </Glowcards>
                    </div>

                    <div className="xl:w-4/6">
                        <div className="flex items-start">
                            <div className="timeline-wrapper">
                                <div className="timeline" />
                                <div className="gradient-line w-1 h-full" />
                            </div>

                            <div className="expText flex gap-5 relative z-20 md:gap-10 xl:gap-20">
                                <div>
                                  
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
