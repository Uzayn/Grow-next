import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ReactTyped from 'react-typed'
import { delay, motion } from 'framer-motion'
import styles from '@/styles/style'
import { layout } from '@/styles/style'
import { HeroImg } from '../assets'
import { charLine } from '../assets'
import Button from './Button'

const Hero = () => {

    const fade = {
        opacity: 1,
        transition: {
            duration: 1.4,
            delay: 0.2
        }
    }

    return (

        <motion.section
            whileInView={fade}
            initial={{ opacity: 0 }}
            id='home' className=' flex flex-col-reverse justify-between'>
            <div className={layout.sectionReverse}>
                <div className={`flex-1 flex justify-center items-start flex-col`}>
                    <h1 className='font-extrabold font-MTS text-offBlack text-[23px] md:text-[40px] leading-[40px] md:leading-[50px]'> <span className='text-greenGrow text-[30px] md:text-[57px] leading-[40px] md:leading-[64.86px]'>Grow,</span> designed <br /> by farmers, for farmers to</h1>
                    <div className='flex'>
                        <h1 className='font-bold font-MTS text-greenGrow text-[30px] md:text-[57px] leading-[40px] md:leading-[64.86px]'>
                            <ReactTyped
                                strings={[
                                    "learn,",
                                    "plan,",
                                    "manage operations,"
                                ]}
                                typeSpeed={150}
                                backSpeed={100}
                                loop
                                cursorChar=''
                            />

                        </h1>
                        <span><Image src={charLine} alt="" className='h-[40px] md:h-[65px]' /></span>
                    </div>
                    <h1 className='font-bold font-MTS text-offBlack text-[23px] md:text-[40px] leading-[40px] md:leading-[50px] pr-0 '>the data-driven way<span className='text-greenGrow'>.</span></h1>
                    <p className={`md:w-[688px] font-medium text-grey text-[20px] sm:text-[28px] leading-[36px] mb-[35px] md:mb-[24px] mt-[16px]`}>Building digital tools for operations management and support for every food grower</p>
                    <Button />
                </div>
                {/* <div className={layout.sectionImg}>
                    <img src={HeroImg} alt="HeroImg" className='w-[611.33px]' />
                </div> */}
            </div>
        </motion.section>
    )
}

export default Hero