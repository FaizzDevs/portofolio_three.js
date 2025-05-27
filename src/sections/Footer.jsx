import React from 'react'
import { socialImgs } from '../constants'

const Footer = () => {
  return (
    <footer className="footer my-10 mt-10 text-white-50 px-5 flex items-center justify-center md:mt-20 md:px-20 xl:px-20">
        <div className="footer-container grid grid-cols-1 gap-5 w-full md:grid-cols-3 md:gap-0">
            <div className="flex flex-col justify-center items-center md:items-start">
                <a href="/">Visit a blog</a>
            </div>

            <div className="socials flex items-center justify-center gap-5">
                {socialImgs.map((img) => (
                    <a className="icon border border-black-50 bg-black-100 flex justify-center items-center rounded-xl size-10 cursor-pointer transition-all duration-500 hover:bg-black-50 md:size-12" target="_blank" href={img.url} key={img.url}>
                        <img src={img.imgPath} alt="" />
                    </a>
                ))}
            </div>

            <div className="flex flex-col justify-center">
                <p className="text-center md:text-end">
                    {new Date().getFullYear()} Faizz
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
