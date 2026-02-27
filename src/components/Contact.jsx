import React, { useState } from 'react'
import Lottie from 'lottie-react'
import contact from '../assets/Contact.json'
import {FaFacebook, FaInstagramSquare, FaLinkedin} from "react-icons/fa";
import {Button} from "../customs/MovingBorder/moving-border.jsx";
import Section from "./layout/Section.jsx";

const Contact = ({darkMode}) => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        const { id, value } = e.target;
        setForm((prev) => ({ ...prev, [id]: value }));
    };

    const validate = () => {
        const newErrors = {};
        if (!form.name.trim()) {
            newErrors.name = "Please enter your name.";
        }
        if (!form.email.trim()) {
            newErrors.email = "Please enter your email.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            newErrors.email = "Please enter a valid email address.";
        }
        if (!form.message.trim()) {
            newErrors.message = "Please enter a message.";
        }
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length) {
            setErrors(newErrors);
            setStatus("");
            return;
        }
        setErrors({});
        const { name, email, message } = form;
        setStatus("Opening your email app to send the message...");
        window.location.href = `mailto:tuanmeo980provip@gmail.com?subject=New Message from ${encodeURIComponent(
            name
        )}&body=${encodeURIComponent(message)}%0A%0AFrom: ${encodeURIComponent(email)}`;
    };

    return (
        <Section
            id='contact'
            className={`z-50 relative ${darkMode ? 'bg-gray-800' : 'bg-gray-900'}`}
        >
                <div className='mb-16'>
                    <div className='flex flex-col md:flex-row justify-between items-center'>
                        <div className='md:w-1/2 mb-8 ml-2 md:mb-0'>
                            <h2 className='text-3xl font-bold mb-3 text-cyan-500'>Get in Touch</h2>
                            <p className={`mb-4 ${darkMode ? 'text-white/85' : 'text-white'}`}>I'm always open to new
                                opportunities and collaboration.
                                Feel
                                free to reach out!</p>
                            <div className='flex space-x-4'>
                                <a
                                    href="#"
                                    aria-label="Visit my Facebook profile"
                                    className='text-foreground/60 hover:text-foreground/80'
                                >
                                    <FaFacebook size={40} alt="Facebook"
                                                className='w-12 text-blue-500 cursor-pointer transition-transform transform hover:scale-110'/>
                                </a>
                                <a
                                    href="#"
                                    aria-label="Visit my Instagram profile"
                                    className='text-foreground/60 hover:text-foreground/80'
                                >
                                    <FaInstagramSquare size={40} alt="Instagram"
                                                       className='w-12 text-red-500 cursor-pointer transition-transform transform hover:scale-110'/>
                                </a>
                                <a
                                    href="#"
                                    aria-label="Visit my LinkedIn profile"
                                    className='text-foreground/60 hover:text-foreground/80'
                                >
                                    <FaLinkedin size={40} alt="LinkedIn"
                                                className='w-12 text-blue-400 cursor-pointer transition-transform transform hover:scale-110'/>
                                </a>
                            </div>
                            <Lottie animationData={contact} className='w-[350px] mx-auto lg:w-[500px]'/>
                        </div>
                        <form
                            onSubmit={handleSubmit}
                            className='w-full md:w-1/2 bg-gray-100 rounded-lg border border-cyan-300 shadow-lg shadow-cyan-500 p-10'>
                            <h1 className='text-gray-900 text-4xl font-bold mb-7'>Contact Me</h1>
                            <div className='mb-4'>
                                <label htmlFor="name" className='block text-sm font-medium text-gray-700'>
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id='name'
                                    placeholder='Full Name'
                                    value={form.name}
                                    onChange={handleChange}
                                    aria-invalid={!!errors.name}
                                    aria-describedby={errors.name ? 'name-error' : undefined}
                                    className='mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-cyan-400 focus:ring focus:ring-cyan-200 focus:ring-opacity-50'
                                />
                                {errors.name && (
                                    <p id="name-error" className="mt-1 text-sm text-red-500">
                                        {errors.name}
                                    </p>
                                )}
                            </div>
                            <div className='mb-4'>
                                <label htmlFor="email" className='block text-sm font-medium text-gray-700'>
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id='email'
                                    placeholder='Email'
                                    value={form.email}
                                    onChange={handleChange}
                                    aria-invalid={!!errors.email}
                                    aria-describedby={errors.email ? 'email-error' : undefined}
                                    className='mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-cyan-400 focus:ring focus:ring-cyan-200 focus:ring-opacity-50'
                                />
                                {errors.email && (
                                    <p id="email-error" className="mt-1 text-sm text-red-500">
                                        {errors.email}
                                    </p>
                                )}
                            </div>
                            <div className='mb-4'>
                                <label htmlFor="message" className='block text-sm font-medium text-gray-700'>
                                    Message Content
                                </label>
                                <textarea
                                    id='message'
                                    placeholder='Enter Your Message'
                                    value={form.message}
                                    onChange={handleChange}
                                    aria-invalid={!!errors.message}
                                    aria-describedby={errors.message ? 'message-error' : undefined}
                                    className='mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-cyan-400 focus:ring focus:ring-cyan-200 focus:ring-opacity-50'
                                />
                                {errors.message && (
                                    <p id="message-error" className="mt-1 text-sm text-red-500">
                                        {errors.message}
                                    </p>
                                )}
                            </div>
                            <div className="mt-6 flex flex-col gap-2">
                                <Button
                                    type="submit"
                                    borderRadius="1.75rem"
                                    className="bg-cyan-100 hover:bg-cyan-200 text-cyan-500 dark:bg-slate-900 border-neutral-200 dark:border-slate-800"
                                >
                                    <div className="font-medium text-lg">
                                        Send Message
                                    </div>
                                </Button>
                                {status && (
                                    <p className="text-sm text-gray-600">
                                        {status}
                                    </p>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
        </Section>
    )
}

export default Contact
