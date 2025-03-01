import React from 'react';
import { useNavigate } from "react-router-dom";
import { FaHome, FaQuestionCircle } from 'react-icons/fa';
import { IoMdRocket } from 'react-icons/io';
import Err from '../assets/404.png'

export function PageNotFound() {
  const navigate = useNavigate();

  const handleReturnHome = () => {
    navigate("/");
  };

  return (
      <div className="h-screen w-full flex flex-col justify-center items-center text-center p-4">
        <div className="flex flex-col items-center bg-white rounded-lg p-8 space-y-6">
          <img
              src={Err}
              className="w-2/3 md:w-1/2 animate-pulse mb-4"
              alt="404 Illustration"
          />
          <IoMdRocket className="text-6xl text-blue-500 animate-bounce mb-2" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Oops! Trang không tồn tại</h1>
          <p className="text-sm md:text-lg text-gray-600 max-w-xl">
            Trang bạn đang tìm kiếm có thể đã bị xóa hoặc không tồn tại. Nhưng đừng lo, chúng tôi có thể đưa bạn về nơi bắt đầu!
          </p>

          <div className="flex space-x-4 mt-4">
            <button
                onClick={handleReturnHome}
                className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-md transition-transform duration-300 transform hover:scale-105"
            >
              <FaHome className="mr-2" /> Quay về trang chủ
            </button>
            <button
                onClick={() => alert('Bạn cần hỗ trợ? Vui lòng liên hệ chúng tôi!')}
                className="flex items-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full shadow-md transition-transform duration-300 transform hover:scale-105"
            >
              <FaQuestionCircle className="mr-2" /> Hỗ trợ
            </button>
          </div>
        </div>

        <footer className="absolute bottom-4 text-sm md:text-base text-gray-500">
          <p>© {new Date().getFullYear()} - Tạo bởi Tuan Anh Junior. <span className="text-green-600">Cảm ơn bạn đã ghé thăm!</span></p>
        </footer>
      </div>
  );
}