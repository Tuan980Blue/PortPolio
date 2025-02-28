import Marquee from "react-fast-marquee";
import { FaStar } from "react-icons/fa";
import LogoHuflit from "../assets/Logo-Huflit.png";

const SliderSlogan = () => {
    return (
        <div className="h-8 md:h-12 w-full bg-gray-800 flex items-center justify-center">
            <Marquee className="flex items-center" pauseOnHover={true} autoFill={true}>
                <div className="flex items-center space-x-8">
                    <span className="ml-96 flex items-center text-lg text-blue-500 animate-bounce">
                        <FaStar className="mr-2" /> 🏆 "Nguyen Anh Tuan"
                    </span>
                    <span className="flex items-center text-lg text-blue-500 animate-bounce">
                        <img src={LogoHuflit} alt="logoHuflit" className="h-6 w-auto mr-2" />
                        <FaStar className="mr-2" /> HUFLIT
                    </span>
                </div>
            </Marquee>
        </div>
    );
};

export default SliderSlogan;
