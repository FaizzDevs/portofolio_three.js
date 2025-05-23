import React from 'react'

const Titleheader = ({ title, sub }) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="hero-badge bg-black-200 py-2 px-4 rounded-full w-fit text-sm text-nowrap md:text-base">
        <p>{sub}</p>
      </div>
      
      <div className="font-semibold text-3xl text-center md:text-5xl">
        {title}
      </div>

    </div>
  )
}

export default Titleheader;