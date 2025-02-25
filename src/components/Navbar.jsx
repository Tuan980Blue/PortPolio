import React, { useState } from 'react'
import Logo from '../assets/Logo.png'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
    const [mobileMenuOpen, setmMobileMenuOpen] = useState(false)
  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 lg:px-0'>
      <div className=' max-w-7xl mx-auto flex h-14 items-center'>
        <div className='md:mr-4 flex justify-between w-full'>
            <a href="#" className='mr-6 flex items-center space-x-2'>
                <img src={Logo} alt="" className='w-36' />
            </a>
            <nav className='md:flex hidden items-center space-x-6 text-lg font-medium'>
                <a href="#about" className='transition-colors hover:text-foreground/80 text-foreground/60'>About</a>
                <a href="#projects" className='transition-colors hover:text-foreground/80 text-foreground/60'>Projects</a>
                <a href="#testimonials" className='transition-colors hover:text-foreground/80 text-foreground/60'>Testimonials</a>
                <a href="#contact" className='transition-colors hover:text-foreground/80 text-foreground/60'>Contact</a>
            </nav>
        </div>
        <button className='inline-flex items-center justify-center rounded-md md:hidden' onClick={()=>setmMobileMenuOpen(!mobileMenuOpen)}>
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
                <a href="#about" className='block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900'>About</a>
                <a href="#projects" className='block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900'>Project</a>
                <a href="#testimonials" className='block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900'>Testimonials</a>
                <a href="#contact" className='block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900'>Contact</a>
            </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
