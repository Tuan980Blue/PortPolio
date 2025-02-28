import Marquee from "react-fast-marquee";

const SliderLogo = () => {
    return(
        <div className="h-8 w-full">
            <Marquee className="h-8 w-full flex items-center" pauseOnHover={true} autoFill={true}>
                <img
                    className="h-8 w-auto mr-5"
                    src="/logoT.jpg"
                    alt="logo1"
                />
                <img
                    className="h-8 w-auto mr-5"
                    src="/vite.svg"
                    alt="logo2"
                />
            </Marquee>
        </div>
    )
}

export default SliderLogo;