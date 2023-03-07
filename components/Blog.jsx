import React from 'react'
import Link from 'next/link'
import styles from '@/styles/style'
import { Blogs } from '@/constants'
import BlogCard from './BlogCard'
import { delay, motion } from 'framer-motion'
import Slider from 'react-slick'


const Blog = () => {

    const autoPlaySettings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        pauseOnHover: false
        // cssEase: "linear"
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
        swipeToSlide: false,
    };

    const titleEffect = {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1.2,
            delay: 0.2
        },
    };

    const vertical = {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.2,
            delay: 0.2
        }
    }


    return (
        <motion.section
            whileInView={titleEffect}
            initial={{ y: "-80px", opacity: 0 }}
            id='blog' className={`px-6 lg:px-[120px] py-[40px] md:py-[70px] bg-pink`}>
            <div
                className='text-center'>
                <h1 className='font-extrabold font-MTS text-offBlack text-[45px] pb-[25px] md:pb-[60px]'>Blog</h1>
            </div>

            {/* <div
                className={`hidden md:flex flex-wrap justify-center`}>
                {Blogs.map((blog, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: '-100px' }}
                        whileInView={vertical}
                        className={`${index === Blogs.length - 2 ? ' mx-10 sm:mx-14 lg:mx-10  md:mx-[84px]' : 'mx-10 sm:mx-14 lg:mx-10'} ${index === Blogs.length ? 'mb-0' : null} mx-2`}>
                        <BlogCard key={blog.id} {...blog} />

                    </motion.div>
                    
                ))}
            </div> */}

            <div className='hidden md:block'>
                <Slider {...autoPlaySettings}>
                    {Blogs.map((blog) => (
                        <div className=' mx-0' key={blog.id}>
                            <BlogCard  {...blog} />
                        </div>
                    ))}
                </Slider>
            </div>

            <motion.div
                whileInView={titleEffect}
                initial={{ y: "80px", opacity: 0 }}
                className='md:hidden'>
                <Slider {...settings}>
                    {Blogs.map((blog) => (
                        <div className=' mx-0' key={blog.id}>
                            <BlogCard  {...blog} />
                        </div>
                    ))}
                </Slider>
            </motion.div>


        </motion.section>
    )
}

export default Blog