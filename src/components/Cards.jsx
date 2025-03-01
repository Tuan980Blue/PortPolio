import React from 'react'
import Github from '../assets/Github.png'

const Cards = ({ item }) => {
    return (
        <div className='border border-cyan-500 rounded-lg w-[350px] lg:w-[400px] bg-cyan-50'>
            <img src={item.image} alt="" className='rounded-lg lg:h-56 h-44 w-full items-center justify-center' />
            <div className='p-4'>
                <h1 className='font-semibold text-xl mb-2'>{item.title}</h1>
                <p>{item.desc}</p>
                <div className='flex gap-3 mt-4'>
                    <button className='bg-cyan-500 text-white px-3 py-2 rounded-md'><a href={item.live} target='_blank'>Live Preview</a></button>
                    <button className='bg-black text-white px-3 py-2 rounded-md'>
                        <a href={item.github} target='_blank' className='flex gap-1'>
                            <img src={Github} alt="" className='w-6'/>
                            Github Link
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Cards

