import React from 'react'
import { abilities } from '../constants'

const Featurecard = () => {
  return (
    <div className="w-full padding-x-lg px-5 md:px-20">
      <div className="mx-auto grid grid-cols-1  gap-6 md:grid-cols-2 xl:grid-cols-3">
        {abilities.map(({ imgPath, title, desc }) => (
            <div key={title} className="card-border border border-black-50 bg-black-100 flex flex-col gap-4 rounded-xl p-8">
                <div className="size-14 flex items-center justify-center rounded-full">
                    <img src={imgPath} alt={title} />
                </div>
                <h3 className="text-white text-xl font-semibold">{title}</h3>
                <p className="text-white-50 text-lg">{desc}</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Featurecard
