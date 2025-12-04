import {useState} from 'react'
import Portfolio from '../assets/Project01.png'
import Project02 from '../assets/Project02-1.png'
import Project03 from '../assets/Project03.png'
import Project04 from '../assets/Project04-2.png'
import Project05 from '../assets/Project05-1.png'
import Project06 from '../assets/Project06.png'
import Project07 from '../assets/Project07.png'
import Project08 from '../assets/Project08.png'
import Project09 from '../assets/Project09.png'
import Coder from '../assets/coder.gif'
import Cards from './Cards'

const Projects = () => {
    const [showAll, setShowAll] = useState(false);

    const projectJson = [
        {
            title: 'Cinema Movie Booking',
            desc: 'Trang web bán vé xem phim.',
            image: Project09,
            live: "https://touchcinema-ta.vercel.app/",
            github: "https://github.com/Tuan980Blue/PortPolio"
        },
        {
            title: 'Profile',
            desc: 'Trang web cá nhân giới thiệu về tôi và các dự án đã thực hiện.',
            image: Portfolio,
            live: "https://tuananhhuflit.id.vn/",
            github: "https://github.com/Tuan980Blue/PortPolio"
        },
        {
            title: 'Trung Tâm Thể Dục Thể Thao',
            desc: 'Website quản lý trung tâm thể thao, cung cấp thông tin về các lớp học và huấn luyện viên.',
            image: Project05,
            live: "https://booking-soccer-field.vercel.app/",
            github: "https://github.com/htilssu/TrungTamTheDucTheThao"
        }
        ,
        {
            title: 'Mạng xã hội FriendZone-Web',
            desc: 'Website mạng xã hội FriendZone-Web, nơi người dùng có thể kết nối,nhắn tin, chia sẻ bài viết và tương tác với bạn bè.',
            image: Project06,
            live: "https://anhtuandev.id.vn/",
            github: "https://github.com/Tuan980Blue/Web-Socket-FriendZone"
        }
        ,
        {
            title: 'Mạng xã hội FriendZone-App',
            desc: 'Ứng dụng di động FriendZone-App, cho phép người dùng kết nối, nhắn tin, chia sẻ bài viết và tương tác với bạn bè trên nền tảng di động.',
            image: Project07,
            live: "https://anhtuandev.id.vn/",
            github: "https://github.com/Tuan980Blue/FriendZone-App"
        }
        ,
        {
            title: 'Vehicle-Detector-Web',
            desc: 'Website phát hiện xe (Vehicle-Detector) giúp phân tích và nhận diện các loại xe từ hình ảnh hoặc video. Sử dụng YOLOv8.',
            image: Project08,
            live: "https://vehicle-detector-web.vercel.app/",
            github: "https://github.com/Tuan980Blue/Vehicle-Detector-Web"
        }
        ,
        {
            title: 'Game Battle Ship',
            desc: 'Trò chơi hải chiến cổ điển, nơi người chơi có thể đấu trí với máy hoặc bạn bè.',
            image: Project02,
            live: "https://profiletuanhanhhuflit.vercel.app/",
            github: "https://github.com/htilssu/BattleShip"
        },
        {
            title: 'Shoppe Clone',
            desc: 'Bản sao của Shopee với các tính năng cơ bản như tìm kiếm, đặt hàng, và thanh toán.',
            image: Project03,
            live: "https://profiletuanhanhhuflit.vercel.app/",
            github: "https://github.com/htilssu/ShoppingWEB"
        },
        {
            title: 'E-Wallet',
            desc: 'Ứng dụng ví điện tử giúp người dùng quản lý tài chính cá nhân một cách hiệu quả.',
            image: Project04,
            live: "https://profiletuanhanhhuflit.vercel.app/",
            github: "https://github.com/Tuan980Blue/PortPolio"
        }
    ];

    // Chỉ hiển thị 4 project nếu không nhấn "xem thêm"
    const displayedProjects = showAll ? projectJson : projectJson.slice(0, 6);

    return (
        <section id='projects' className='relative bg-gray-900 py-6 px-4'>
            <div className='mb-10 max-w-7xl mx-auto'>
                <h2 className='text-3xl font-bold mb-8 text-white border-b border-cyan-500 w-max pb-4 flex items-center'>
                    My Project
                    <img src={Coder} alt="Coder Icon" className="h-20 md:h-28 w-auto ml-2"/>
                </h2>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center gap-10'>
                    {displayedProjects.map((items) => {
                        return <Cards item={items}/>
                    })}
                </div>
                {projectJson.length > 6 && (
                    <div
                        className="mt-6 px-4 py-2 cursor-pointer text-cyan-600 font-semibold text-lg text-center border-2 border-cyan-600 rounded-full hover:bg-cyan-400 hover:text-white transition-colors duration-300"
                        onClick={() => setShowAll(!showAll)}
                    >
                        {showAll ? 'Ẩn bớt' : 'Xem tất cả'}
                    </div>
                )}
            </div>
        </section>
    )
}

export default Projects
