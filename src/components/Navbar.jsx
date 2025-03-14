import React, { useState } from 'react'
import Logo from '../assets/Logo.png'
import { Menu, X } from 'lucide-react'
import {FaChevronRight} from "react-icons/fa";
import ButtonDark from "../customs/Button/ButtonDark.jsx";

const Navbar = ({ darkMode, toggleDarkMode }) => {
    const [mobileMenuOpen, setmMobileMenuOpen] = useState(false)
  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 lg:px-0'>
      <div className=' max-w-7xl mx-auto flex h-14 lg:h-16 items-center'>
        <div className='md:mr-4 flex justify-between w-full'>
            <a href="#" className='mr-6 flex items-center space-x-2'>
                <img src={Logo} alt="" className='h-36' />
            </a>
            <nav className='md:flex hidden items-center space-x-6 text-lg font-medium'>
                <a href="#about" className='transition-colors hover:text-foreground/80 text-foreground/60 text-cyan-500 hover:text-cyan-400'>About</a>
                <a href="#projects" className='transition-colors hover:text-foreground/80 text-foreground/60 text-cyan-500 hover:text-cyan-400'>Projects</a>
                <a href="#testimonials" className='transition-colors hover:text-foreground/80 text-foreground/60 text-cyan-500 hover:text-cyan-400'>Testimonials</a>
                <a href="#contact">
                    <button
                        className="px-3 py-1 cursor-pointer rounded-md bg-cyan-500 text-white hover:text-cyan-500 flex items-center gap-1 shadow-[0_0_5px_#22d3ee,inset_0_0_2px_#e0f2fe,0_0_10px_#06b6d4,0_0_20px_#06b6d4] border-2 border-cyan-400 transition-all hover:bg-white"
                    >
                        Contact <FaChevronRight/>
                    </button>
                </a>
                <ButtonDark darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </nav>
        </div>
          <button className='inline-flex items-center justify-center rounded-md md:hidden'
                  onClick={() => setmMobileMenuOpen(!mobileMenuOpen)}>
              <span className='sr-only'>Open main menu</span>
              {mobileMenuOpen ? (
                  <X className='h-6 w-6' aria-hidden="true"/>
           ):(
            <Menu className='h-6 w-6' aria-hidden="true"/>
           )}
        </button>
      </div>
      {mobileMenuOpen && (
        <div className='md:hidden'>
            <div className='space-y-1 px-2 pb-3 pt-2'>
                <a href="#about"
                   className='block rounded-md px-3 py-2 text-base font-medium text-cyan-500 hover:bg-cyan-500 hover:text-cyan-700'>About</a>
                <a href="#projects"
                   className='block rounded-md px-3 py-2 text-base font-medium text-cyan-500 hover:bg-cyan-500 hover:text-cyan-700'>Project</a>
                <a href="#testimonials"
                   className='block rounded-md px-3 py-2 text-base font-medium text-cyan-500 hover:bg-cyan-500 hover:text-cyan-700'>Testimonials</a>
                <a href="#contact"
                   className='block rounded-md px-3 py-2 text-base font-medium text-cyan-500 hover:bg-cyan-500 hover:text-cyan-700'>Contact</a>
                <div className="mt-3">
                    <ButtonDark darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
                </div>
            </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
