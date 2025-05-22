const Button = ({ text, className, id }) => {
  return (

    // ALL CSS in index.css
    <a 
      onClick={(e) => {
          e.prevenDeafult();

          const target = document.getElementById("counter");

          if(target && id) {
              const offset = window.innerHeight * 0.15;

              const top = target.getBoundingClientRect().top + window.scrollY - offset;
              window.scrollTo({ top, behavior: "smooth" })
          }
      }}
      className={`${className ?? ""} cta-wrapper relative z-20 cursor-pointer`}>
        <div className="cta-button px-4 py-4 bg-black-200 rounded-lg flex justify-center items-center relative cursor-pointer overflow-hidden group">
            <div className="bg-circle absolute -right-10 origin-center top-1/2 bg-white-50 -translate-y-1/2 rounded-full transition-all duration-500 group-hover:right-10 group-hover:size-10 w-[120%] h-[120%]" />
            <p className="text uppercase text-black transition-all duration-500 -translate-x-5 group-hover:text-white-50 group-hover:-translate-x-5 xl:translate-x-0">{text}</p>
            <div className="arrow-wrapper size-10 rounded-full absolute right-10 top-1/2 -translate-y-1/2 flex justify-center items-center overflow-hidden group-hover:bg-white-50">
                <img src="/images/arrow-down.svg" alt="arrow" className="size-5 translate-y-0 animate-bounce transition-all duration-500 xl:translate-y-32 group-hover:translate-y-0" />
            </div>
        </div>
    </a>
  )
}

export default Button
