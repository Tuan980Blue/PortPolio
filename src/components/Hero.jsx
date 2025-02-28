import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagramSquare, FaGithub, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import reactLogo from '../assets/React.png';
import reduxLogo from '../assets/Redux.png';
import tailwindLogo from '../assets/Tailwind Css.png';
import tuanGif from '../assets/Tuan.gif';
import tuanStatic from '../assets/Tuan3.png';

const Hero = () => {
    const [currentImage, setCurrentImage] = useState(tuanGif);

    useEffect(() => {
        const timer = setTimeout(() => setCurrentImage(tuanStatic), 3400);
        return () => clearTimeout(timer);
    }, []);

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.1, duration: 0.4 }
        })
    };

    const socialLinks = [
        { Icon: FaFacebook, color: 'text-blue-600' },
        { Icon: FaInstagramSquare, color: 'text-pink-600' },
        { Icon: FaTwitterSquare, color: 'text-blue-400' },
        { Icon: FaLinkedin, color: 'text-blue-900' },
        { Icon: FaGithub, color: 'text-gray-600' }
    ];

    return (
        <section className='relative'>
            <div className='max-w-7xl mx-auto'>
                <div className='flex flex-col md:flex-row items-center lg:h-[90vh] justify-between'>
                    {/* Left Content */}
                    <div className='md:w-1/2 mb-8 md:mb-0 flex flex-col px-6 lg:px-0'>
                        <motion.div className="space-y-1 md:space-y-4">
                            <h1 className='text-2xl lg:text-7xl font-bold leading-snug'>
                                Hi Everyone, <br/>
                            </h1>
                            <h1 className='text-3xl lg:text-7xl font-bold text-red-500 leading-snug'>
                                {"I'm Tuan Anh Jr".split('').map((char, i) => (
                                    <motion.span key={i} variants={textVariants} initial='hidden' animate='visible'
                                                 custom={i}>
                                        {char}
                                    </motion.span>
                                ))}
                            </h1>
                            <motion.p className='text-2xl md:text-3xl' initial={{opacity: 0}} animate={{opacity: 1}}
                                      transition={{delay: 0.5}}>
                                Web Developer & Designer
                            </motion.p>
                            <motion.p initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 1}}>
                                Passionate about modern web technologies, I specialize in React and crafting engaging
                                digital experiences.
                            </motion.p>
                            <motion.a
                                href="https://drive.google.com/file/d/1bo5Uwg6AotcgGIzhyZEEaww_a70ZPwz_/view?usp=drive_link"
                                target='_blank'
                                rel='noopener noreferrer'
                                className='bg-cyan-400 text-white px-3 py-2 md:px-5 md:py-3 rounded-lg font-semibold inline-block hover:bg-cyan-500 transition-all'
                                initial={{scale: 0}}
                                animate={{scale: 1}}
                                transition={{duration: 0.5, delay: 1.5}}
                            >
                                Download CV
                            </motion.a>
                        </motion.div>
                    </div>

                    {/* Right Image */}
                    <div className='md:w-1/2 flex justify-center relative'>
                        <motion.img
                            src={currentImage}
                            alt='Tuan'
                            className='lg:h-[90vh] h-80 transition-opacity duration-1000 ease-in-out'
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 1.5}}
                        />
                        <img src={reactLogo} alt='React'
                             className='absolute w-10 top-36 left-0 rounded-full md:hidden'/>
                        <img src={reduxLogo} alt='Redux' className='absolute w-10 top-0 right-5 md:hidden'/>
                        <img src={tailwindLogo} alt='Tailwind'
                             className='absolute w-10 rounded-full right-0 bottom-36 md:hidden'/>
                    </div>
                </div>

                {/* Social Links */}
                <motion.div
                    className='absolute top-40 right-10 hidden bg-gray-200 p-4 md:flex flex-col gap-6 rounded-full shadow-lg'
                    initial={{opacity: 0, x: 50}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 1.5, delay: 3}}
                >
                    {socialLinks.map(({Icon, color}, index) => (
                        <motion.a
                            key={index}
                            href='#'
                            target='_blank'
                            rel='noopener noreferrer'
                            initial={{opacity: 0, scale: 0.5}}
                            animate={{opacity: 1, scale: 1}}
                            transition={{duration: 0.5, delay: 3.2 + index * 0.2}}
                            className={`${color} transition-transform transform hover:scale-110`}
                        >
                            <Icon size={40} className='cursor-pointer'/>
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </section>
);
};

export default Hero;