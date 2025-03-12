import React from 'react'
import Github from '../assets/Github.png'
import LinkPreview from "../Tests/LinkPreview/link-preview.jsx";

const Cards = ({item}) => {
    return (
        <div className='border border-cyan-500 rounded-lg w-[350px] lg:w-[400px] bg-cyan-50 flex flex-col h-full'>
            <div className="w-full h-44 lg:h-56">
                <img
                    src={item.image}
                    alt=""
                    className="w-full h-full object-cover rounded-t-lg"
                />
            </div>
            <div className="p-4 flex flex-col flex-grow">
                <h1 className='font-semibold text-xl mb-2'>{item.title}</h1>
                <p>{item.desc}</p>
                <div className='flex gap-3 mt-4'>
                    <button className='bg-cyan-500 text-white px-3 py-2 rounded-md'>
                        <LinkPreview url={item.live} target='_blank'
                                     className='bg-cyan-500 text-white px-3 py-2 rounded-md'>
                            Live Preview
                        </LinkPreview>
                    </button>
                    <button className='bg-black px-3 py-2 rounded-md'>
                        <LinkPreview url={item.github} target={'_blank'} className={'flex gap-1 text-white'}>
                            <img src={Github} alt="" className='w-6'/>
                            Github Link
                        </LinkPreview>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Cards

