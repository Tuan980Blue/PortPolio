import React, {useState} from 'react'
import Html from '../assets/Html.png'
import Css from '../assets/CSS.png'
import Javascript from '../assets/JS.png'
import ReactLogo from '../assets/React.png'
import CshapeLogo from '../assets/C-shape.png'
import Tailwind from '../assets/Tailwind Css.png'
import Bootstrap from '../assets/Bootstrap.png'
import JavaLogo from '../assets/JavaLogo.png'
import Mongodb from '../assets/mongodb.svg'
import SqlLogo from '../assets/SqlLogo.png'
import Springboot from '../assets/Springboot.png'
import PostmanLogo from '../assets/PostmanLogo.png'
import FigmaLogo from '../assets/Figma.png'
import DockerLogo from '../assets/DockerLogo.png'
import LogoHuflit from '../assets/Logo-Huflit.png'
import TuanProfile from '../../public/Tuan3.png'
import TuanBienHinh from '../assets/TuanBienHinh.gif'
import { FaUniversity } from "react-icons/fa";
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const About = () => {
    const controls = useAnimation();

    const handleScroll = () => {
        const scrollY = window.scrollY;
        controls.start({
            opacity: scrollY > 100 ? 1 : 0,
            y: scrollY > 100 ? 0 : 50,
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [currentSrc, setCurrentSrc] = useState(TuanBienHinh);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSrc((prevSrc) => (prevSrc === TuanBienHinh ? TuanProfile : TuanBienHinh));
        }, 4300); // 3 giây thay đổi một lần

        return () => clearInterval(interval); // Dọn dẹp interval khi component unmount
    }, []);

    return (
        <div className='relative' id='about'>
            <div className='bg-gray-100 py-12'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <motion.div
                        initial={{opacity: 0, scale: 0.5}}
                        whileInView={{opacity: 1, scale: 1}}
                        transition={{duration: 1.4, delay: 0}}
                    >
                        <h2 className='text-3xl font-bold text-cyan-500 border-b border-cyan-500 w-max pb-2 flex items-center'>
                            About Me
                        </h2>

                        <div className='mt-10'>
                            <div className='grid grid-cols-1 gap-12 lg:grid-cols-2'>
                                <div className="flex flex-col items-center justify-center gap-8 mt-6">
                                    <div className={"flex flex-col-1 sm:flex-col-2 md:gap-6 gap-4 items-center justify-center"}>
                                        <motion.img
                                            src={currentSrc}
                                            alt="Tuan Profile"
                                            className="rounded-full border-4 border-cyan-500 w-40 lg:w-52 shadow-xl hover:scale-105 transition-transform duration-300"
                                            initial={{opacity: 0, scale: 0.5}}
                                            whileInView={{opacity: 1, scale: 1}}
                                            transition={{duration: 1.2}}
                                        />
                                        <div className="text-center md:text-left">
                                            <p className="text-2xl font-extrabold text-gray-900">Nguyen Anh Tuan</p>
                                            <p className="mt-3 text-lg text-gray-600">
                                                A Full-Stack Developer with expertise in web development, WordPress,
                                                SEO, and...
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                    <h3 className='text-2xl font-semibold text-gray-900'>My Journey</h3>
                                        <p className='mt-2 text-lg text-gray-600'>
                                            I started my web development journey with a passion for creating intuitive
                                            and scalable applications.
                                            With fundamental knowledge of MVC, React, PostgreSQL, and Spring Boot, I
                                            have built projects such as
                                            order management systems, yard management platforms, full-stack websites,
                                            and even a Shopee clone.
                                            My projects showcase my ability to integrate powerful backend solutions with
                                            beautiful, user-friendly
                                            interface designs.
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className='border border-cyan-200 rounded-lg md:p-7 py-7  flex flex-col gap-8 items-center justify-center max-h-max shadow-lg shadow-cyan-300'>
                                    <h3 className='text-2xl font-semibold text-cyan-600'>Skills & Expertise</h3>
                                    <div className='flex items-center justify-center flex-wrap gap-3'>
                                        <div
                                            className='border border-cyan-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-cyan-300'>
                                            <img src={Html} alt="" className='w-10'/>
                                            <span className='font-semibold'>HTML</span>
                                        </div>
                                        <div
                                            className='border border-cyan-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                            <img src={Css} alt="" className='w-8'/>
                                            <span className='font-semibold'>CSS</span>
                                        </div>
                                        <div
                                            className='border border-cyan-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                            <img src={Javascript} alt="" className='w-10'/>
                                            <span className='font-semibold'>Javascript</span>
                                        </div>
                                        <div
                                            className='border border-cyan-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                            <img src={ReactLogo} alt="" className='w-8 rounded-full'/>
                                            <span className='font-semibold'>React</span>
                                        </div>
                                        <div
                                            className='border border-cyan-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-cyan-300'>
                                            <img src={CshapeLogo} alt="" className='w-8'/>
                                            <span className='font-semibold'>C #</span>
                                        </div>
                                        <div
                                            className='border border-cyan-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-cyan-300'>
                                            <img src={Tailwind} alt="" className='w-8 rounded-full'/>
                                            <span className='font-semibold'>Tailwind Css</span>
                                        </div>
                                        <div
                                            className='border border-cyan-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-cyan-300'>
                                            <img src={Bootstrap} alt="" className='w-10'/>
                                            <span className='font-semibold'>Bootstrap</span>
                                        </div>
                                        <div
                                            className='border border-cyan-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-cyan-300'>
                                            <img src={JavaLogo} alt="" className='w-10'/>
                                            <span className='font-semibold'>Java</span>
                                        </div>
                                        <div
                                            className='border border-cyan-300 flex items-center  w-max px-2 py-1 rounded-lg shadow-md shadow-cyan-300'>
                                            <img src={Mongodb} alt="" className='w-10'/>
                                            <span className='font-semibold'>Mongodb</span>
                                        </div>
                                        <div
                                            className='border border-cyan-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-cyan-300'>
                                            <img src={SqlLogo} alt="" className='w-10'/>
                                            <span className='font-semibold'>SQL</span>
                                        </div>
                                        <div
                                            className='border border-cyan-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-cyan-300'>
                                            <img src={Springboot} alt="" className='w-9'/>
                                            <span className='font-semibold'>Spring Boot</span>
                                        </div>
                                        <div
                                            className='border border-cyan-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-cyan-300'>
                                            <img src={PostmanLogo} alt="" className='w-9'/>
                                            <span className='font-semibold'>Postman</span>
                                        </div>
                                        <div
                                            className='border border-cyan-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-cyan-300'>
                                            <img src={FigmaLogo} alt="" className='w-9'/>
                                            <span className='font-semibold'>Figma</span>
                                        </div>
                                        <div
                                            className='border border-cyan-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-cyan-300'>
                                            <img src={DockerLogo} alt="" className='w-9'/>
                                            <span className='font-semibold'>Docker</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <div className='mt-12'>
                        <h3 className='text-2xl font-semibold text-gray-900 mb-2'>More About Me</h3>
                        {/* Education Section */}
                        <motion.div
                            initial={{opacity: 0, scale: 0.5}}
                            whileInView={{opacity: 1, scale: 1}}
                            transition={{duration: 1.4, delay: 0}}
                        >
                            <h2 className="text-xl md:text-2xl font-bold text-gray-800 border-b-2 border-blue-300 pb-3 flex items-center gap-3">
                                <FaUniversity className="text-blue-500"/> Học Vấn
                            </h2>
                            <div className="flex items-start gap-8 mt-6">
                                <img
                                    src={LogoHuflit}
                                    alt="University Logo"
                                    className="w-28 object-cover"
                                />
                                <div className={"flex flex-col"}>
                                    <p className="text-xl md:text-2xl font-semibold text-gray-800 mb-1">Trường Đại học Ngoại Ngữ và Tin Học TP.HCM</p>
                                    <p className="text-sm md:text-lg text-gray-600">Công nghệ thông tin (2021 - 2025)</p>
                                    <p className="text-sm md:text-lg text-gray-600">Chuyên ngành: Công nghệ phần mềm</p>
                                    <p className="text-sm md:text-lg text-gray-800 font-bold">GPA: 3.2/4</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About