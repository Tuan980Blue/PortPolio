import Marquee from "react-fast-marquee";
import { FaRocket, FaStar, FaRegThumbsUp } from "react-icons/fa";

const SliderSlogan = () => {
    return (
        <div className="h-8 md:h-12 w-full bg-gray-800 flex items-center justify-center">
            <Marquee className="flex items-center" pauseOnHover={true} autoFill={true}>
                <div className="flex items-center space-x-8">

                    <span className="ml-96 flex items-center text-lg text-blue-500 animate-bounce">
                        <FaStar className="mr-2" /> 🏆 "404 – Limits Not Found"
                    </span>

                </div>
            </Marquee>
        </div>
    );
}

export default SliderSlogan;