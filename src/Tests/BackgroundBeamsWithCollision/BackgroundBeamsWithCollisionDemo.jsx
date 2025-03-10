import React from "react";
import {BackgroundBeamsWithCollision} from "./BackgroundBeamsWithCollision.jsx";
import {AnimatedTestimonialsDemo} from "../Animated/AnimatedTestimonialsDemo.jsx";
import {ThreeDCards} from "../3D/ThreeDCards.jsx";
import {FloatingDockDemo} from "../FloatingDock/FloatingDockDemo.jsx";

export function BackgroundBeamsWithCollisionDemo() {
    return (
        (<BackgroundBeamsWithCollision>
            <div className={"bg-white"}>
                <AnimatedTestimonialsDemo/>
                <ThreeDCards />
                <FloatingDockDemo />
            </div>
        </BackgroundBeamsWithCollision>)
    );
}
