import React from 'react'
import Portfolio from '../assets/Portfolio.png'
import SpicyBites from '../assets/SpicyBites.png'
import Youtube from '../assets/Youtube.png'
import Webelite from '../assets/Webelite.png'
import Supercar from '../assets/Supercar.png'
import Coder from '../assets/coder.gif'
import Cards from './Cards'


const Projects = () => {

    const projectJson = [
        {
            title: 'Portfolio',
            desc: 'Webelite Builders did an amazing job on our website. Their professionalism and dedication to our project were outstanding.',
            image: Portfolio,
            live: "https://profiletuanhanhhuflit.vercel.app/",
            github: "https://github.com/Tuan980Blue/PortPolio"
        },
        {
            title: 'Spicy Bites',
            desc: 'The team at Webelite Builders exceeded our expectations with their digital marketing expertise. Highly recommend!',
            image: SpicyBites,
            live: "https://profiletuanhanhhuflit.vercel.app/",
            github: "https://github.com/Tuan980Blue/PortPolio"
        },
        {
            title: 'YouTube Clone',
            desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
            image: Youtube,
            live: "https://profiletuanhanhhuflit.vercel.app/",
            github: "https://github.com/Tuan980Blue/PortPolio"
        },
        {
            title: 'Webelite builder',
            desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
            image: Webelite,
            live: "https://profiletuanhanhhuflit.vercel.app/",
            github: "https://github.com/Tuan980Blue/PortPolio"
        },
        {
            title: 'Super Car',
            desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
            image: Supercar,
            live: "https://profiletuanhanhhuflit.vercel.app/",
            github: "https://github.com/Tuan980Blue/PortPolio"
        },
    ];

    return (
        <section id='projects' className='relative bg-gray-700 py-6 px-4'>
            <div className='mb-16 max-w-7xl mx-auto'>
                <h2 className='text-3xl font-bold mb-8 text-white border-b border-cyan-500 w-max pb-4 flex items-center'>
                    My Project
                    <img src={Coder} alt="Coder Icon" className="h-20 md:h-28 w-auto ml-2"/>
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10'>
                    {projectJson.map((items) => {
                        return <Cards item={items}/>
                    })}
                </div>
            </div>
        </section>
    )
}

export default Projects
