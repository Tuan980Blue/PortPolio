import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ParticleBackground from './components/Particle';
import About from './components/About';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SliderSlogan from './customs/SliderSlogan';
import { ThreeDCards } from './Tests/3D/ThreeDCards';
import { BackgroundBeamsWithCollisionDemo } from './Tests/BackgroundBeamsWithCollision/BackgroundBeamsWithCollisionDemo';
import { FloatingDockDemo } from './Tests/FloatingDock/FloatingDockDemo';
import { LinkPreviewDemo } from './Tests/LinkPreview/LinkPreviewDemo';

const App = () => {
    return (
        <Router>
            <>
                <ParticleBackground />
                <Navbar />
                <SliderSlogan />
                <Hero />
                <About />
                <Projects />
                <Testimonials />
                <Contact />
                <Footer />
                <ThreeDCards />
                <BackgroundBeamsWithCollisionDemo />
                <FloatingDockDemo />
                <LinkPreviewDemo />
            </>
        </Router>
    );
};

export default App;