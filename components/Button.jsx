import React from 'react'
import Link from 'next/link'


const Button = () => (
    <Link href='#waitlist'>
        <button id='services' className={`rounded-[10px] py-3 px-6 bg-[#A4CB7B] font-medium text-black text-[18px] hover:text-white w-[180px] md:w-[240px] h-[48px] hover:bg-green-800`}>
            Get Started
        </button>
    </Link>
)

export default Button