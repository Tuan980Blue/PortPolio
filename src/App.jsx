import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ParticleBackground from './components/Particle'
import About from './components/About'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from "./customs/CustomCursor.jsx";
import SliderSlogan from "./customs/SliderSlogan.jsx";

const App = () => {
    return (
        <>
            {/*<CustomCursor />*/}
            <ParticleBackground/>
            <Navbar/>
            <SliderSlogan/>
            <Hero/>
            <About/>
            <Projects/>
            <Testimonials/>
            <Contact/>
            <Footer/>
        </>
    )
}

export default App
