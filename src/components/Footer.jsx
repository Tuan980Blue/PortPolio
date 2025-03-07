import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import {FloatingDockFollow} from "../customs/FloatingFollow/FloatingDockFollow.jsx";

const Footer = () => {
    return (
        <footer className="py-10 text-cyan-600 relative bg-white">
            <div className="container max-w-full px-6">
                <div className="flex flex-wrap justify-between items-start mb-8">
                    <div className="w-full md:w-1/2 lg:w-1/4 p-4">
                        <div className="flex items-center mb-4">
                            <img src={"/logoT.png"} alt="Logo" className="w-16 h-16 rounded-full shadow-lg"/>
                            <span className="text-2xl font-bold ml-3">tuananhhuflit.edu.vn</span>
                        </div>
                        <p className="text-gray-700">Công TTHH một thành viên Tuan Anh Junior @tuananh21 quản lý bởi FPT
                            Company.</p>
                    </div>

                    <div className="w-full md:w-1/2 lg:w-1/4 p-4">
                        <h3 className="text-xl font-bold mb-4">Điều khoản</h3>
                        <ul className="space-y-2">
                            {["Thỏa thuận người dùng", "Quyền riêng tư", "Quy định - chính sách"].map((item) => (
                                <li key={item}>
                                    <a href="#"
                                       className="flex items-center text-gray-700 hover:text-cyan-500 transition duration-300">
                                        <IoIosArrowForward size={20}/>
                                        <span className="ml-2">{item}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="w-full md:w-1/2 lg:w-1/4 p-4">
                        <h3 className="text-xl font-bold mb-4">Hotline</h3>
                        <p className="text-gray-700">Email: tuanmeo980provip@gmail.com</p>
                        <p className="text-gray-700">Điện thoại: +84 123 456 789</p>
                        <p className="text-gray-700">Địa chỉ: Số 99 Đường NAT, Quận 13, TP HCM</p>
                    </div>

                    <div className="w-full md:w-1/2 lg:w-1/4 p-4">
                        <h3 className="text-xl font-bold mb-4">Giới thiệu</h3>
                        <ul className="space-y-2">
                            {["Về chúng tôi", "Tin tức", "Liên hệ"].map((item) => (
                                <li key={item}>
                                    <a href="#"
                                       className="flex items-center text-gray-700 hover:text-cyan-500 transition duration-300">
                                        <IoIosArrowForward size={20}/>
                                        <span className="ml-2">{item}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-2 md:mt-4 text-center">
                    <h3 className="text-xl font-bold mb-2">Follow Me</h3>
                    <div className="flex md:mt-4 mt-2 justify-center">
                        <FloatingDockFollow/>
                    </div>
                </div>

                <div className="text-center">
                    <p className="text-gray-600 text-sm">
                        Bản quyền © 2024-2035 tuananhhuflit.edu.id.vn. Hệ thống trực tuyến bảo vệ người dùng hàng đầu
                        Việt Nam.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;