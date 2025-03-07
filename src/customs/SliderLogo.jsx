import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { Autoplay, FreeMode } from "swiper/modules";

import Html from '../assets/Html.png';
import Css from '../assets/CSS.png';
import Javascript from '../assets/JS.png';
import ReactLogo from '../assets/React.png';
import Tailwind from '../assets/Tailwind Css.png';
import Bootstrap from '../assets/Bootstrap.png';
import Mongodb from '../assets/mongodb.svg';
import { FaGithub } from "react-icons/fa";

const logos = [
    { src: Html, alt: "HTML Logo" },
    { src: Javascript, alt: "JavaScript Logo" },
    { src: Css, alt: "CSS Logo" },
    { src: ReactLogo, alt: "React Logo" },
    { src: Tailwind, alt: "Tailwind CSS Logo" },
    { src: Bootstrap, alt: "Bootstrap Logo" },
    { src: Mongodb, alt: "MongoDB Logo" },
    {icon: FaGithub, alt: "Github Logo" },
];

// Nhân đôi danh sách để tạo hiệu ứng chạy liên tục hơn
const duplicatedLogos = [...logos, ...logos, ...logos];

const SliderLogo = () => {
    return (
        <div className="h-8 w-full overflow-hidden">
            <Swiper
                modules={[Autoplay, FreeMode]}
                slidesPerView={"auto"}
                spaceBetween={20}
                loop={true}
                loopedSlides={duplicatedLogos.length}
                autoplay={{ delay: 1, disableOnInteraction: false }}
                speed={6000}
                freeMode={true}
            >
                {duplicatedLogos.map((logo, index) => (
                    <SwiperSlide key={index} className="!w-auto">
                        {logo.src ? (
                            <img className="h-8 w-auto bg-white rounded-lg" src={logo.src} alt={logo.alt} />
                        ) : logo.icon ? (
                            <logo.icon className="h-8 w-8 text-white" />
                        ) : null}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SliderLogo;
