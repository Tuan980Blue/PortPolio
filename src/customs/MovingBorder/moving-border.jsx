"use client";
import React from "react";
import {
    motion,
    useAnimationFrame,
    useMotionTemplate,
    useMotionValue,
    useTransform,
} from "motion/react";
import { useRef } from "react";
import { cn } from "../../Tests/lib-ts/utils.ts";

export function Button({
                           borderRadius = "1.6rem",
                           children,
                           as: Component = "button",
                           containerClassName,
                           borderClassName,
                           duration,
                           className,
                           ...otherProps
                       }) {
    return (
        <Component
            className={cn(
                "bg-transparent relative h-12 w-44 p-[2px] overflow-hidden hover:bg-cyan-200",
                containerClassName
            )}
            style={{
                borderRadius: borderRadius,
            }}
            {...otherProps}>
            <div
                className="absolute inset-0"
                style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}>
                <MovingBorder duration={duration} rx="30%" ry="30%">
                    <div
                        className={cn(
                            "h-20 w-20 opacity-[0.8] bg-[radial-gradient(var(--sky-500)_40%,transparent_60%)]",
                            borderClassName
                        )} />
                </MovingBorder>
            </div>
            <div
                className={cn(
                    "relative bg-slate-900/[0.8] border border-slate-800 backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-sm antialiased",
                    className
                )}
                style={{
                    borderRadius: `calc(${borderRadius} * 0.96)`,
                }}>
                {children}
            </div>
        </Component>
    );
}

export const MovingBorder = ({
                                 children,
                                 duration = 2000,
                                 rx,
                                 ry,
                                 ...otherProps
                             }) => {
    const pathRef = useRef();
    const progress = useMotionValue(0);

    useAnimationFrame((time) => {
        const length = pathRef.current?.getTotalLength();
        if (length) {
            const pxPerMillisecond = length / duration;
            progress.set((time * pxPerMillisecond) % length);
        }
    });

    const x = useTransform(progress, (val) => pathRef.current?.getPointAtLength(val).x);
    const y = useTransform(progress, (val) => pathRef.current?.getPointAtLength(val).y);

    const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

    return (<>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="absolute h-full w-full"
            width="100%"
            height="100%"
            {...otherProps}>
            <rect fill="none" width="100%" height="100%" rx={rx} ry={ry} ref={pathRef} />
        </svg>
        <motion.div
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                display: "inline-block",
                transform,
                boxShadow: "0 0 15px rgba(0, 255, 255, 0.5), 0 0 30px rgba(0, 255, 255, 0.5)", // Tạo hiệu ứng glow
                animation: "glowAnimation 1.5s infinite alternate", // Thêm animation cho viền glow
            }}>
            {children}
        </motion.div>
    </>);
};

// Thêm CSS animation vào `@keyframes` cho hiệu ứng glow:
const style = `
@keyframes glowAnimation {
    0% {
        box-shadow: 0 0 15px rgba(0, 255, 255, 0.5), 0 0 30px rgba(0, 255, 255, 0.5);
    }
    100% {
        box-shadow: 0 0 30px rgba(0, 255, 255, 1), 0 0 60px rgba(0, 255, 255, 0.8);
    }
}
`;

const head = document.head || document.getElementsByTagName('head')[0];
const styleTag = document.createElement("style");
styleTag.type = "text/css";
styleTag.innerHTML = style;
head.appendChild(styleTag);
