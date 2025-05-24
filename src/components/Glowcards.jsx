import React from 'react'

const Glowcards = ({ card, children }) => {
  return (
    <div className="card relative z-40 overflowHidden transition-colors duration-1000 ease-in-out card-border border border-black-50 bg-black-100 timeline-card rounded-xl p-10">
      <div className="glow pointer-none: absolute w-full h-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform blur-lg saturate-200" />
        <div>
            {Array.from({ length: 5 }, (_, i) => (
                <img src="/images/star.png" key={i} alt="Star" />
            ))}
            
      </div>
    </div>
  )
}

export default Glowcards
