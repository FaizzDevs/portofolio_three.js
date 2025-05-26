import React from 'react'
import Titleheader from '../components/Titleheader'
import { testimonials } from '../constants'
import Glowcards from '../components/Glowcards'

const Testimonials = () => {
  return (
    <section id="testimonials" className="flex-center flex justify-center items-center section padding px-5 mt-20 md:px-10 md:mt-40">
        <div className="w-full h-full md:px-10 px-5">
            <Titleheader 
                title="What people say about me?"
                sub="Client Feedback Highlight"
            />

            <div className="columns-1 md:columns-2 lg:columns-3 mt-16">
                <div>
                    {testimonials.map(({ imgPath, name, mentions, review }) => (
                        <Glowcards card={{ review }}>
                            <div className='flex items-center gap-3'>
                                <div>
                                    <img src={imgPath} alt={name} />
                                </div>

                                <div>
                                    <p className="font-bold">{name}</p>
                                    <p className="text-white-50">{ mentions }</p>
                                </div>
                            </div>
                        </Glowcards>

                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonials
