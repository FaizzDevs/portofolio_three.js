import React from 'react'

const Showcase = () => {
  return (
    <div id="work" className="app-showcase w-full mt-20 px-5 flex items-center justify-center py-10 md:px-20 md:py-20">
      <div className="w-full">
        <div className="showcaselayout flex flex-col gap-10 justify-between xl:flex-row">
            {/* Kiri */}
            <div className="first-project-wrapper h-full flex flex-col justify-between xl:w-[60%]">
                <div className="image-wrapper h-96 relative md:h-[50vh] xl:h-[70vh]">
                    <img src="/images/project1.png" alt="Project 1" className="w-full h-full object-cover rounded-xl absolute inset-0" />
                </div>
                <div className="text-content space-y-5 mt-5">
                    <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum sit at eius, eligendi autem nisi?</h2>
                    <p className="text-white-50 md:text-xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore id molestiae vitae minus ipsam aut.</p>
                </div>
            </div>

            {/* Kanan */}
        </div>
      </div>
    </div>
  )
}

export default Showcase
