import React from 'react'
import Link from 'next/link'
import styles from '@/styles/style'
import { layout } from '@/styles/style'
import { motion } from 'framer-motion'

const Contact = () => {

  const verticalLeft = {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      delay: 0.2
    }
  }

  return (
    <section id='contact' className={`px-6 lg:px-[120px] py-[40px] md:py-[70px] bg-greenGrow`}>
      <div className={`${layout.section}`}>
        <motion.div
          initial={{ opacity: 0, y: '-100px' }}
          whileInView={verticalLeft}
          className={`flex-1 flex justify-center items-start flex-col`}>
          <h1 className='font-extrabold font-MTS text-white text-[35px] md:text-[45px] leading-[61.46px]'>Get in Touch</h1>
          <p className='font-normal text-white text-[22px] md:text-[29px] w-auto md:max-w-[501px] leading-[40px]'>We want to know how we can do more for you</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: '100px' }}
          whileInView={verticalLeft}
          className={`flex-1 flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10  sm:w-[645px] sm:justify-end`}>
          <div className='w-[588px] text-white'>
            <h3 className='font-medium text-white text-[15px] md:text-[20px] text-center mb-[31.5px]'>Contact Us</h3>
            <input type="text" className='w-full h-[44px] p-[10px] rounded-[8px] bg-white text-offBlack' placeholder='Full name' />
            <input type="email" className='w-full h-[44px] p-[10px] rounded-[8px] bg-white text-offBlack my-[12px]' placeholder='Email Address' />
            <textarea name="" className='w-full h-[115px] p-[10px] rounded-[8px] bg-white text-offBlack' id="" placeholder='Type here' cols="0" rows="10"></textarea>
            <div className='flex justify-end'>
              <button className='justify-items-end font-medium text-white text-[16px] padding- py-[8px] px-[30px] mt-[10px] border border-white rounded-[8px] hover:bg-white hover:text-greenGrow'>Submit</button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact