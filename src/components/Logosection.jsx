import React from 'react'
import { logoIconsList } from '../constants'
// import "./index.css"

const LogoIcon = ({ icon }) => {
    return (
        <div className="flex-none flex-center flex justify-center items-center marquee-item float-left w-32 md:w-40">
            <img src={icon.imgPath} alt={icon.name} />
        </div>
    )
}

const Logosection = () => {
  return (
    <div className="my-10 relative md:my-20">
      <div className="gradient-edge w-36 h-full absolute bottom-0 z-20" />
      <div className="gradient-edge w-36 h-full absolute bottom-0 z-20" />

      <div className="marquee w-[100dvw] overflow-hidden relative h-52">
        <div className="marquee-box flex items-center w-[200%] h-full absolute overflow-hidden animate-marquee gap-5 md:gap-12">
            {logoIconsList.map((icon) => (
                <LogoIcon key={icon.imgPath} icon={icon} />
            ))}

            {logoIconsList.map((icon) => (
                <LogoIcon key={icon.imgPath} icon={icon} />
            ))}
        </div>
      </div>
    </div>
  )
};

export default Logosection
