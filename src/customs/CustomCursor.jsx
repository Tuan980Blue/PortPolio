import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        const moveCursor = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    }, []);

    useEffect(() => {
        const handleMouseEnter = () => setHovered(true);
        const handleMouseLeave = () => setHovered(false);

        document.querySelectorAll("button, a").forEach((el) => {
            el.addEventListener("mouseenter", handleMouseEnter);
            el.addEventListener("mouseleave", handleMouseLeave);
        });

        return () => {
            document.querySelectorAll("button, a").forEach((el) => {
                el.removeEventListener("mouseenter", handleMouseEnter);
                el.removeEventListener("mouseleave", handleMouseLeave);
            });
        };
    }, []);

    return (
        <motion.div
            animate={{
                x: position.x -10,
                y: position.y - 5,
                width: hovered ? 40 : 20,
                height: hovered ? 40 : 20,
                backgroundColor: hovered ? "rgba(255, 0, 0, 0.7)" : "rgba(0, 0, 255, 0.7)",
            }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="custom-cursor"
        />
    );
};

export default CustomCursor;
