import React, { useState, useEffect } from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import { encode } from "qss";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import { Img } from 'react-image';
import {cn} from "../lib-js/utils.js";

const LinkPreview = ({
                         children,
                         url,
                         className,
                         width = 200,
                         height = 125,
                         quality = 50,
                         layout = "fixed",
                         isStatic = false,
                         imageSrc = ""
                     }) => {
    const src = isStatic ? imageSrc : `https://api.microlink.io/?${encode({
        url,
        screenshot: true,
        meta: false,
        embed: "screenshot.url",
        colorScheme: "dark",
        "viewport.isMobile": true,
        "viewport.deviceScaleFactor": 1,
        "viewport.width": width * 3,
        "viewport.height": height * 3,
    })}`;

    const [isOpen, setOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const springConfig = { stiffness: 100, damping: 15 };
    const x = useMotionValue(0);
    const translateX = useSpring(x, springConfig);

    const handleMouseMove = (event) => {
        const targetRect = event.target.getBoundingClientRect();
        const eventOffsetX = event.clientX - targetRect.left;
        const offsetFromCenter = (eventOffsetX - targetRect.width / 2) / 2; // Reduce the effect to make it subtle
        x.set(offsetFromCenter);
    };

    return (
        <>
            {isMounted && (
                <div className="hidden">
                    <Img
                        src={src}
                        width={width}
                        height={height}
                        quality={quality}
                        layout={layout}
                        alt="hidden image"
                    />
                </div>
            )}
            <HoverCardPrimitive.Root
                openDelay={50}
                closeDelay={100}
                onOpenChange={setOpen}
            >
                <HoverCardPrimitive.Trigger
                    onMouseMove={handleMouseMove}
                    className={cn("text-black dark:text-white", className)}
                    href={url}
                >
                    {children}
                </HoverCardPrimitive.Trigger>

                <HoverCardPrimitive.Content
                    className="[transform-origin:var(--radix-hover-card-content-transform-origin)]"
                    side="top"
                    align="center"
                    sideOffset={10}
                >
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                    transition: {
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20,
                                    },
                                }}
                                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                                className="shadow-xl rounded-xl"
                                style={{ x: translateX }}
                            >
                                <Link
                                    to={url}
                                    className="block p-1 bg-white border-2 border-transparent shadow rounded-xl hover:border-neutral-200 dark:hover:border-neutral-800"
                                    style={{ fontSize: 0 }}
                                >
                                    <Img
                                        src={src}
                                        width={width}
                                        height={height}
                                        quality={quality}
                                        layout={layout}
                                        className="rounded-lg"
                                        alt="preview image"
                                    />
                                </Link>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </HoverCardPrimitive.Content>
            </HoverCardPrimitive.Root>
        </>
    );
};

export default LinkPreview;