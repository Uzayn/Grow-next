import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const BlogCard = ({ img, title, content, link, header }) => (
    <a href={link} target="_blank" className='flex justify-center'>
        <div className='w-[310px]'>
            <div>
                <img src={img} alt="" className='w-full h-[248px]' />
            </div>
            <div className='bg-white p-4 w-full h-fit'>
                <h3 className='font-medium text-greenGrow text-[20px] leading-[28.64px] w-fit'>{header}</h3>
                <h3 className='font-medium text-greenGrow leading-[28.64px] w-fit py-2'>{title}</h3>
                <p className='text-grey text-[14.5px] leading-6 w-fit'>{content}</p>
            </div>
        </div>
    </a>
)


export default BlogCard