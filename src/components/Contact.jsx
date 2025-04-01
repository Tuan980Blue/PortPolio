import React from 'react'
import Lottie from 'lottie-react'
import contact from '../assets/Contact.json'
import {FaFacebook, FaInstagramSquare, FaLinkedin} from "react-icons/fa";
import {Button} from "../customs/MovingBorder/moving-border.jsx";

const Contact = ({darkMode}) => {
    return (
        <section id='contact' className={`z-50 relative py-10 px-5 md:px-0 ${darkMode ? 'bg-gray-800' : 'bg-gray-900'}`}>
                <div className='mb-16 max-w-7xl mx-auto'>
                    <div className='flex flex-col md:flex-row justify-between items-center'>
                        <div className='md:w-1/2 mb-8 ml-2 md:mb-0'>
                            <h2 className='text-3xl font-bold mb-3 text-cyan-500'>Get in Touch</h2>
                            <p className={`mb-4 ${darkMode ? 'text-white/85' : 'text-white'}`}>I'm always open to new
                                opportunities and collaboration.
                                Feel
                                free to reach out!</p>
                            <div className='flex space-x-4'>
                                <a href="#" className='text-foreground/60 hover:text-foreground/80'>
                                    <FaFacebook size={40} alt="Facebook"
                                                className='w-12 text-blue-500 cursor-pointer transition-transform transform hover:scale-110'/>
                                </a>
                                <a href="#" className='text-foreground/60 hover:text-foreground/80'>
                                    <FaInstagramSquare size={40} alt="Instagram"
                                                       className='w-12 text-red-500 cursor-pointer transition-transform transform hover:scale-110'/>
                                </a>
                                <a href="#" className='text-foreground/60 hover:text-foreground/80'>
                                    <FaLinkedin size={40} alt="LinkedIn"
                                                className='w-12 text-blue-400 cursor-pointer transition-transform transform hover:scale-110'/>
                                </a>
                            </div>
                            <Lottie animationData={contact} className='w-[350px] mx-auto lg:w-[500px]'/>
                        </div>
                        <form
                            className='w-full md:w-1/2 bg-gray-100 rounded-lg border border-cyan-300 shadow-lg shadow-cyan-500 p-10'>
                            <h1 className='text-gray-900 text-4xl font-bold mb-7'>Contact Me</h1>
                            <div className='mb-4'>
                                <label htmlFor="name" className='block text-sm font-medium text-gray-700'>Your
                                    Name</label>
                                <input type="text" id='name' placeholder='Full Name'
                                       className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'/>
                            </div>
                            <div className='mb-4'>
                                <label htmlFor="email" className='block text-sm font-medium text-gray-700'>Your
                                    Email</label>
                                <input type="email" id='email' placeholder='Email'
                                       className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'/>
                            </div>
                            <div className='mb-4'>
                                <label htmlFor="message" className='block text-sm font-medium text-gray-700'>Message
                                    Content</label>
                                <textarea id='message' placeholder='Enter Your Message'
                                          className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'/>
                            </div>
                            <Button
                                borderRadius="1.75rem"
                                className="bg-cyan-100 hover:bg-cyan-200 text-cyan-500 dark:bg-slate-900 border-neutral-200 dark:border-slate-800"
                                onClick={(e) => {
                                    e.preventDefault();
                                    const name = document.getElementById('name').value;
                                    const email = document.getElementById('email').value;
                                    const message = document.getElementById('message').value;
                                    window.location.href = `mailto:tuanmeo980provip@gmail.com?subject=New Message from ${name}&body=${message} (Email: ${email})`;
                                }}
                            >
                                <div className={" font-medium text-lg"}>
                                    Send Message
                                </div>
                            </Button>
                        </form>
                    </div>
                </div>
        </section>
    )
}

export default Contact
