import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import {FloatingDockCustom} from "./floating-dock.jsx";

export function FloatingDockFollow() {
    const links = [
        {
            title: "Facebook",
            icon: <FaFacebook className="h-full w-full text-[#1877F2]" />, // Màu xanh Facebook
            href: "#",
        },
        {
            title: "GitHub",
            icon: <FaGithub className="h-full w-full text-[#333]" />, // Màu tối GitHub
            href: "#",
        },
        {
            title: "Instagram",
            icon: <FaInstagram className="h-full w-full text-[#E4405F]" />, // Màu hồng Instagram
            href: "#",
        },
        {
            title: "LinkedIn",
            icon: <FaLinkedin className="h-full w-full text-[#0A66C2]" />, // Màu xanh LinkedIn
            href: "#",
        },
        {
            title: "Twitter",
            icon: <FaTwitter className="h-full w-full text-[#1DA1F2]" />, // Màu xanh Twitter
            href: "#",
        },
    ];

    return (
        <div className="flex items-center justify-center">
            <FloatingDockCustom
                items={links}
            />
        </div>
    );
}
