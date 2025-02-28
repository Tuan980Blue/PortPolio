import { motion } from "framer-motion";
import LogoTuan2 from "../assets/Tuan2.png"

const logos = [
    { src: "https://cdn-icons-png.flaticon.com/512/733/733547.png", alt: "Facebook", link: "https://facebook.com" },
    { src: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png", alt: "Instagram", link: "https://instagram.com" },
    { src: "https://cdn-icons-png.flaticon.com/512/733/733609.png", alt: "GitHub", link: "https://github.com" },
    { src: "https://cdn-icons-png.flaticon.com/512/174/174857.png", alt: "LinkedIn", link: "https://linkedin.com" },
    { src: "https://cdn-icons-png.flaticon.com/512/733/733579.png", alt: "Twitter", link: "https://twitter.com" },
    { src: "https://cdn-icons-png.flaticon.com/512/281/281769.png", alt: "Gmail", link: "https://mail.google.com" }
];

const circleRadius = 100; // Bán kính vòng tròn

const CircularLogoSlider = () => {
    return (
        <div className="relative w-[300px] h-[300px] flex items-center justify-center">
            <img src={LogoTuan2}
                 alt="Logo Tuan2"
                 className="w-40 h-40 transition-all duration-300 ease-in-out hover:w-48 hover:h-48"
            />
            <motion.div
            >
                {logos.map((logo, index) => {
                    const angle = (index / logos.length) * 2 * Math.PI; // Chia đều góc
                    const x = Math.cos(angle) * circleRadius;
                    const y = Math.sin(angle) * circleRadius;
                    return (
                        <motion.a
                            key={index}
                            href={logo.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute"
                            style={{
                                left: `calc(50% + ${x}px)`,
                                top: `calc(50% + ${y}px)`,
                                transform: "translate(-50%, -50%)",
                            }}
                        >
                            <motion.img
                                src={logo.src}
                                alt={logo.alt}
                                className="w-8 h-8"
                                whileHover={{scale: 1.3}}
                                transition={{duration: 0.3}}
                            />
                        </motion.a>
                    );
                })}
            </motion.div>
        </div>
    );
};

export default CircularLogoSlider;
