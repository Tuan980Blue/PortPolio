import React from "react";
import {BackgroundBeamsWithCollision} from "./BackgroundBeamsWithCollision.jsx";
import {AnimatedTestimonialsDemo} from "../Animated/AnimatedTestimonialsDemo.jsx";
import LinkPreviewDemo from "../LinkPreview/LinkPreviewDemo.jsx";

export function BackgroundBeamsWithCollisionDemo() {
    return (
        (<BackgroundBeamsWithCollision>
            <div>
                <AnimatedTestimonialsDemo/>
                <LinkPreviewDemo/>
            </div>
        </BackgroundBeamsWithCollision>)
    );
}
