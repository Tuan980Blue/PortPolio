import React from 'react'
import Github from '../assets/Github.png'
import LinkPreview from "../Tests/LinkPreview/link-preview.jsx";

const Cards = ({item}) => {
    return (
        <div className='border border-cyan-500 rounded-lg w-[350px] lg:w-[400px] bg-cyan-50 flex flex-col h-full'>
            <div className="w-full h-44 lg:h-56">
                <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover rounded-t-lg"
                />
            </div>
            <div className="p-4 flex flex-col flex-grow">
                <h1 className='font-semibold text-xl mb-2'>{item.title}</h1>
                <p>{item.desc}</p>
                <div className='flex flex-wrap gap-3 mt-4'>
                    <LinkPreview
                        url={item.live}
                        target='_blank'
                        className='inline-flex items-center justify-center bg-cyan-500 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-cyan-600 transition-colors'
                    >
                        Live Preview
                    </LinkPreview>
                    <LinkPreview
                        url={item.github}
                        target='_blank'
                        className='inline-flex items-center justify-center bg-black px-3 py-2 rounded-md text-sm font-medium text-white gap-1 hover:bg-gray-900 transition-colors'
                    >
                        <img src={Github} alt="GitHub" className='w-5 h-5'/>
                        Github Link
                    </LinkPreview>
                </div>
            </div>
        </div>
    )
}

export default Cards

