import React from 'react'
import { counterItems } from '../constants/index.js'
import CountUp from 'react-countup'

const AnimatedCounter = () => {
  return (
    <div id="counter" className="padding-x-lg px-5 mt-32 md:px-20 xl:mt-0">
        <div className="mx-auto grid-4-cols grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-4">
            {counterItems.map((item) => (
              <div className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center">
                  <div key={counterItems.label} className="counter-number text-white text-5xl font-bold mb-2">
                    <CountUp suffix={item.suffix} end={item.value} />
                    
                  </div>
                  <div className="text-white-50 text-lg">{item.label}</div>
              </div>
                
            ))}
        </div>
    </div>
  )
}

export default AnimatedCounter
