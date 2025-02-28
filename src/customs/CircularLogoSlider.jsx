import { motion } from "framer-motion";

const logos = [
    { src: "/logoT.jpg", alt: "Logo 1" },
    { src: "/vite.svg", alt: "Logo 2" },
    { src: "/logoT.jpg", alt: "Logo 3" },
    { src: "/vite.svg", alt: "Logo 4" },
];

const circleRadius = 100; // Bán kính vòng tròn

const CircularLogoSlider = () => {
    return (
        <div className="relative w-[300px] h-[300px] flex items-center justify-center">
            <motion.div
                className="absolute w-full h-full"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            >
                {logos.map((logo, index) => {
                    const angle = (index / logos.length) * 2 * Math.PI; // Chia đều góc
                    const x = Math.cos(angle) * circleRadius;
                    const y = Math.sin(angle) * circleRadius;
                    return (
                        <motion.img
                            key={index}
                            src={logo.src}
                            alt={logo.alt}
                            className="absolute w-12 h-12"
                            style={{
                                left: `calc(50% + ${x}px)`,
                                top: `calc(50% + ${y}px)`,
                                transform: "translate(-50%, -50%)",
                            }}
                        />
                    );
                })}
            </motion.div>
        </div>
    );
};

export default CircularLogoSlider;
