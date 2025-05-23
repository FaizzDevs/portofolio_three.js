import React, { useState } from 'react'
import { navLinks } from '../constants';
import { useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false); // react hook to manage the scrolled state

    // menjalankan perintah scroll
    useEffect(() => {
        const handScroll = () => {
            // const isScrolled = window.scrollY > 0;
            setScrolled(true);
        }

        window.addEventListener("scroll", handScroll); // mendeteksi bahwa user sedang scroll dan menjalankan handScroll

        return () => window.removeEventListener("scroll", handScroll); // mengembalikan perintah scroll

    }, [])

  return (
    // scrollable navbar
    <header className={`navbar fixed w-full left-1/2 py-5 px-5 -translate-x-1/2 z-[100] transition-all duration-300 ease-in-out md:px-20 ${scrolled ? "top-0 bg-black" : "top-0 bg-transparent md:top-10"}`}>
        <div className="inner mx-auto flex items-center justify-between">
            <a href="#hero" className="logo text-white-50 text-xl font-semibold transition-transform duration-300 hover:scale-105 md:text-2xl">
                Faizz | Fullstack
            </a>

            {/* Navbar from index.js */}
            <nav className="desktop hidden lg:flex items-center">
                <ul className="flex space-x-8">
                    { navLinks.map(({ link, name }) => (
                        <li key={name} className="group text-white-50 relative">
                            <a href={link}>
                                <span className="transition-colors duration-300 hover:text-white">{name}</span>
                                <span className="underline bg-white absolute h-0.5 w-0 group-hover:w-full -bottom-1 left-0 transition-all duration-300" />
                            </a>
                        </li>
                    )) }
                </ul>
            </nav>

            <a className="contact-btn flex group" href="#contact">
                <div className="inner px-5 py-2 rounded-lg bg-white text-black group-hover:bg-black-50 transition-colors duration-300">
                    <span className="group-hover:text-white transition-all duration-300">Contact Me</span>
                </div>
            </a>
        </div>
    </header>
  )
}

export default Navbar;