import Marquee from "react-fast-marquee";
import { FaStar } from "react-icons/fa";
import LogoHuflit from "../assets/Logo-Huflit.png";
import RunGif from "../assets/back-to-school-14869.gif";

const SliderSlogan = () => {
    return (
        <div className="h-8 md:h-12 w-full flex items-center justify-center">
            <Marquee pauseOnHover className="flex items-center">
                <div className="flex items-center">
                    <img src={RunGif} alt="Running Animation" className="h-20 w-auto" />
                </div>
            </Marquee>
        </div>
    );
};

export default SliderSlogan;
