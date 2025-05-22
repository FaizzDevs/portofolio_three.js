import React from 'react'
import { counterItems } from '../constants/index.js'

const AnimatedCounter = () => {
  return (
    <div id="counter" className="padding-x-lg px-5 mt-32 md:px-20 xl:mt-0">
        <div className="mx-auto grid-4-cols grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-4">
            {counterItems.map((item) => (
                <div key={counterItems.label} className="counter-number text-white text-5xl font-bold mb-2">
                    {item.value}
                    {item.suffix}
                    {item.label}
                </div>
            ))}
        </div>
    </div>
  )
}

export default AnimatedCounter
