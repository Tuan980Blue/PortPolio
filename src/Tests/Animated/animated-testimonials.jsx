"use client";
import {IconArrowLeft, IconArrowRight} from "@tabler/icons-react";
import {motion, AnimatePresence} from "framer-motion";
import React, {useEffect, useState} from "react";
import {BackgroundBeamsWithCollision} from "../BackgroundBeamsWithCollision/BackgroundBeamsWithCollision.jsx";

export const AnimatedTestimonials = ({
                                         testimonials,
                                         autoplay = false
                                     }) => {
    const [active, setActive] = useState(0);

    const handleNext = () => {
        setActive((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const isActive = (index) => {
        return index === active;
    };

    useEffect(() => {
        if (autoplay) {
            const interval = setInterval(handleNext, 5000);
            return () => clearInterval(interval);
        }
    }, [autoplay]);

    const randomRotateY = () => {
        return Math.floor(Math.random() * 21) - 10;
    };
    return (
        <div className={"relative bg-white "}>
            <BackgroundBeamsWithCollision>
            <div className={"lg:h-[90vh] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10"}>
                <h2 className='text-xl lg:text-3xl font-bold text-cyan-500 border-b border-cyan-500 w-max lg:pb-2 pb-0 flex items-center'>
                    More About Me
                </h2>
                <div
                    className="antialiased font-sans px-4 md:px-8 lg:px-12 lg:py-20 py-6">
                    <div className="relative grid grid-cols-1 md:grid-cols-2  gap-6 lg:gap-20">
                        <div>
                            <div className="relative lg:h-80 h-52 w-full">
                                <AnimatePresence>
                                    {testimonials.map((testimonial, index) => (
                                        <motion.div
                                            key={testimonial.src}
                                            initial={{
                                                opacity: 0,
                                                scale: 0.9,
                                                z: -100,
                                                rotate: randomRotateY(),
                                            }}
                                            animate={{
                                                opacity: isActive(index) ? 1 : 0.7,
                                                scale: isActive(index) ? 1 : 0.95,
                                                z: isActive(index) ? 0 : -100,
                                                rotate: isActive(index) ? 0 : randomRotateY(),
                                                zIndex: isActive(index)
                                                    ? 999
                                                    : testimonials.length + 2 - index,
                                                y: isActive(index) ? [0, -80, 0] : 0,
                                            }}
                                            exit={{
                                                opacity: 0,
                                                scale: 0.9,
                                                z: 100,
                                                rotate: randomRotateY(),
                                            }}
                                            transition={{
                                                duration: 0.4,
                                                ease: "easeInOut",
                                            }}
                                            className="absolute inset-0 origin-bottom">
                                            <img
                                                src={testimonial.src}
                                                alt={testimonial.name}
                                                width={500}
                                                height={500}
                                                draggable={false}
                                                className="h-full w-full rounded-3xl object-cover object-center"/>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>
                        </div>
                        <div className="flex justify-between flex-col lg:py-4 py-1">
                            <motion.div
                                key={active}
                                initial={{
                                y: 20,
                                opacity: 0,
                            }}
                                animate={{
                                y: 0,
                                opacity: 1,
                            }}
                                exit={{
                                y: -20,
                                opacity: 0,
                            }}
                                transition={{
                                duration: 0.2,
                                ease: "easeInOut",
                            }}>
                                <h3 className="lg:text-2xl text-xl font-bold dark:text-white text-black">
                                    {testimonials[active].name}
                                </h3>
                                <p className="lg:text-sm text-xs text-gray-500 dark:text-neutral-500">
                                    {testimonials[active].description}
                                </p>
                                <motion.p className="lg:text-lg text-sm text-gray-500 lg:mt-8 mt-5 dark:text-neutral-300">
                                    {testimonials[active].quote.split(" ").map((word, index) => (
                                        <motion.span
                                            key={index}
                                            initial={{
                                                filter: "blur(10px)",
                                                opacity: 0,
                                                y: 5,
                                            }}
                                            animate={{
                                                filter: "blur(0px)",
                                                opacity: 1,
                                                y: 0,
                                            }}
                                            transition={{
                                                duration: 0.2,
                                                ease: "easeInOut",
                                                delay: 0.02 * index,
                                            }}
                                            className="inline-block">
                                            {word}&nbsp;
                                        </motion.span>
                                    ))}
                                </motion.p>
                            </motion.div>
                            <div className="flex gap-4 lg:pt-12 pt-4">
                                <button
                                    onClick={handlePrev}
                                    className="h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button">
                                    <IconArrowLeft
                                        className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:rotate-12 transition-transform duration-300"/>
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button">
                                    <IconArrowRight
                                        className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:-rotate-12 transition-transform duration-300"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </BackgroundBeamsWithCollision>
        </div>
    );
};
