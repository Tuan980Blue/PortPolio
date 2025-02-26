import React, {useState, useEffect} from 'react';
import reactLogo from '../assets/React.png';
import reduxLogo from '../assets/Redux.png';
import tailwind from '../assets/Tailwind Css.png';
import tuan1 from '../assets/Tuan.gif';
import tuan3 from '../assets/Tuan3.png';
import {FaFacebook} from "react-icons/fa";
import {FaInstagramSquare} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import {FaTwitterSquare} from "react-icons/fa";

const Hero = () => {
    const [currentImage, setCurrentImage] = useState(tuan1); // Ban đầu là ảnh GIF

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentImage(tuan3); // Sau 3 giây chuyển sang ảnh tĩnh
        }, 3400);

        return () => clearTimeout(timer); // Xóa timer khi component unmount
    }, []);

    return (<section className='relative'>
            <div className='max-w-7xl mx-auto'>
                <div className='flex flex-col md:flex-row items-center lg:h-[90vh] justify-between'>
                    <div className='md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10'>
                        <h1 className='lg:text-7xl text-4xl font-bold lg:leading-snug'>
                            Hi Everyone, <br/>I'm <span className='text-red-500'>Tuan Anh Jr</span>
                        </h1>
                        <p className='md:text-2xl text-xl mb-4'>Web Developer & Designer</p>
                        <p className='mb-4'>
                            I'm a passionate web developer with expertise in React and modern web technologies. I love
                            creating beautiful and functional website that solve real world problems.
                        </p>
                        <button className='bg-cyan-400 text-white px-3 py-2 w-max rounded-md'>
                            <a href="https://drive.google.com/file/d/1bo5Uwg6AotcgGIzhyZEEaww_a70ZPwz_/view?usp=drive_link"
                               download target='_blank'>Download CV</a>
                        </button>
                    </div>
                    <div className='md:w-1/2 relative flex justify-center items-end'>
                        <img src={currentImage} alt="Tuan"
                             className='lg:h-[80vh] h-80 transition-opacity duration-1000 ease-in-out'/>
                        <img src={reactLogo} alt="" className='absolute w-10 top-36 left-0 rounded-full md:hidden'/>
                        <img src={reduxLogo} alt="" className='absolute w-10 top-0 right-5 md:hidden'/>
                        <img src={tailwind} alt="" className='absolute w-10 rounded-full right-0 bottom-36 md:hidden'/>
                    </div>
                </div>
            </div>
            <div className='absolute top-40 right-10 hidden bg-gray-200 p-4 md:flex flex-col gap-6 rounded-full'>
                <a href="https://www.facebook.com/tuananhhuflit" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={40} alt="Facebook"
                            className='w-12 text-blue-600 cursor-pointer transition-transform transform hover:scale-110'/>
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagramSquare size={40} alt="Instagram"
                                       className='w-12 text-pink-600 cursor-pointer transition-transform transform hover:scale-110'/>
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitterSquare size={40} alt="Twitter"
                                     className='w-12 text-blue-400 cursor-pointer transition-transform transform hover:scale-110'/>
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={40} alt="LinkedIn"
                                className='w-12 text-blue-900 cursor-pointer transition-transform transform hover:scale-110'/>
                </a>
                <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={40} alt="GitHub"
                              className='w-12 text-gray-600 cursor-pointer transition-transform transform hover:scale-110'/>
                </a>
            </div>

        </section>);
};

export default Hero;
