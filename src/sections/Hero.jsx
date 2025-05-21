import { words } from "../constants"
import Button from "../components/Button"

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden">
        <div className="absolute top-0 left-0 z-10">
            <img src="/images/bg.png" alt="background" />
        </div>

        {/* hero-layout */}
        <div className="relative z-10 mt-32 h-[80vh] flex items-start justify-center xl:mt-20 xl:items-center md:h-dvh">
            <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
              <div className="flex flex-col gap-7">
                {/* hero-text */}
                <div className="flex flex-col justify-center text-[30px] font-semibold relative z-10 pointer-events-none md:text-[60px]">
                  <h1>
                    Shaping
                    {/* slide */}
                    <span className="absolute pt-0 px-2 py-[30px] h-[48px] translate-y-0 overflow-hidden md:px-5 md:translate-y-1 xl:mt-6">
                      <span className="wrapper">
                        {words.map((word) => (
                          <span key={word.text} className="flex items-center md:gap-3 gap-1 pb-2">
                            <img 
                              src={word.imgPath}
                              alt={word.text}
                              className="size-7 p-1 rounded-full bg-white-50 xl:size-12 md:size-10 md:p-2"
                            />
                            <span>{word.text}</span>
                          </span>
                        ))}
                      </span>
                    </span>
                  </h1>
                  
                  <h1>Into Real Project</h1>
                  <h1>That Deliver Results</h1>
                </div>
                <p className="text-white-50 relative z-10 pointer-events-none md:text-xl">
                    Hi Namaku Faizz, aku seorang dveloper asal Indonesia dengan passion di bidang pemrograman web.
                </p>
                <Button
                    className="w-60 h-12 md:w-80 md:h-60"
                    id="button"
                    text="See my work"
                />
              </div>
            </header>
        </div>
    </section>
  )
}

export default Hero
