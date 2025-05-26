import React from 'react'
import Titleheader from '../components/Titleheader'

const Contact = () => {
  return (
    <section id="contact" className="flex-center flex justify-center items-center section-padding px-5 mt-20 md:px-10 md:mt-40">
        <div className="w-full h-full md:px-10 px-5">
            <Titleheader 
                title="Let's Contact"
                sub="Have questions or ideas? Let's talk"
            />

            <div className="grid-12-cols grid grid-cols-1 gap-10 xl:grid-cols-12 mt-16">

            </div>
        </div>
    </section>
  )
}

export default Contact
