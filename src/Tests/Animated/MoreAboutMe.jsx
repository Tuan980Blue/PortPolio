import { AnimatedTestimonials } from "./animated-testimonials.jsx";

export function MoreAboutMe() {
    const testimonials = [
        {
            name: "Đam mê đá bóng",
            quote: "Bóng đá không chỉ là một môn thể thao, mà còn là cách mình kết nối với bạn bè và rèn luyện tinh thần đồng đội.",
            description:
                "Mình là một người cực kỳ yêu thích bóng đá! Đây không chỉ là một môn thể thao mà còn là niềm đam mê lớn của mình. Mỗi tuần, mình đều dành thời gian để ra sân cùng bạn bè, rèn luyện sức khỏe và tận hưởng những khoảnh khắc tuyệt vời trên sân cỏ.",
            src: "https://images.unsplash.com/photo-1601972599722-22d6bbd2f83b?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            name: "Yêu thích công nghệ",
            quote: "Công nghệ là chìa khóa để thay đổi thế giới, và mình muốn là một phần của sự thay đổi đó.",
            description:
                "Mình luôn tò mò về những công nghệ mới và cách chúng có thể thay đổi thế giới. Từ lập trình phần mềm đến trí tuệ nhân tạo, mình thích nghiên cứu, học hỏi và áp dụng công nghệ vào cuộc sống hàng ngày.",
            src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            name: "Thích đọc sách",
            quote: "Mỗi cuốn sách là một thế giới mới, giúp mình mở rộng tầm nhìn và nuôi dưỡng tư duy sáng tạo.",
            description:
                "Đọc sách là cách tuyệt vời để mở mang kiến thức và khám phá những góc nhìn mới. Mình đặc biệt yêu thích các thể loại sách về tâm lý học, phát triển bản thân và khoa học viễn tưởng.",
            src: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            name: "Đam mê du lịch",
            quote: "Mỗi chuyến đi là một hành trình khám phá bản thân, văn hóa và những điều mới mẻ.",
            description:
                "Mình thích khám phá những vùng đất mới, tìm hiểu về các nền văn hóa khác nhau và thưởng thức những món ăn đặc trưng của từng nơi. Mỗi chuyến đi là một trải nghiệm đáng nhớ!",
            src: "https://images.unsplash.com/photo-1521337581100-5cf0c1c87d43?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            name: "Học tập và phát triển bản thân",
            quote: "Học tập không có điểm dừng, và mình luôn nỗ lực mỗi ngày để trở thành phiên bản tốt hơn của chính mình.",
            description:
                "Mình luôn tin rằng việc học không bao giờ có điểm dừng. Dù là học kỹ năng mới hay trau dồi kiến thức chuyên môn, mình luôn tìm cách cải thiện bản thân mỗi ngày để trở thành phiên bản tốt hơn của chính mình.",
            src: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            name: "Học vấn và thành tích",
            quote: "Giáo dục là chìa khóa mở ra tương lai, và mình luôn trân trọng hành trình học tập của bản thân.",
            description:
                "Mình tốt nghiệp từ Đại học Ngoại Ngữ Và Tin Học TP HCM với GPA 3.2/4.0. Trong suốt những năm học, mình luôn yêu thích môi trường học tập năng động, nơi khuyến khích tư duy sáng tạo và hợp tác. Những năm đại học đã giúp mình phát triển không chỉ về kiến thức chuyên môn mà còn cả các kỹ năng mềm quan trọng như làm việc nhóm và quản lý thời gian.",
            src: "https://images.unsplash.com/photo-1590402494682-3ca0b01961c2?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }
    ];
    return <AnimatedTestimonials testimonials={testimonials} />;
}
