import React from 'react'

const Particles = ({ count = 200 }) => {

    const mesh = useRef();

    const particles= useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            temp.push({
                position: [
                    (Math.random() - 0.5) * 10,
                    Math.random() * 10 + 5,
                ]
            })
        }
    })

  return (
    <div>
        
    </div>
  )
}

export default Particles
