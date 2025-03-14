import React, {useState} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ParticleBackground from './components/Particle';
import About from './components/About';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SliderRunNavBar from './customs/SliderRunNavBar.jsx';
import { BackgroundBeamsWithCollisionDemo } from './Tests/BackgroundBeamsWithCollision/BackgroundBeamsWithCollisionDemo';

const App = () => {
    const [darkMode, setDarkMode] = useState(true);

    const toggleDarkMode = () => setDarkMode(!darkMode);
    return (
        <Router>
            <>
                <ParticleBackground darkMode={darkMode}/>
                <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                <SliderRunNavBar />
                <Hero darkMode={darkMode}/>
                <About />
                <Projects />
                <Testimonials />
                <Contact darkMode={darkMode}/>
                <Footer />
                <BackgroundBeamsWithCollisionDemo />
            </>
        </Router>
    );
};

export default App;