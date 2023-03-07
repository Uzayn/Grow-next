import Head from "next/head";
import Link from "next/link";
import Hero from "@/components/Hero";
import Discover from "@/components/Discover";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import styles from "@/styles/style";

import React from 'react'

const index = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </Head>

      <div>
        <div className={`flex  items-start px-6 lg:px-[120px] py-[40px] md:py-[70px] overflow-hidden`}>
          <div className='xl:max-w-[1280px] w-full'>
            <Hero />
          </div>
        </div>

        <div className='overflow-hidden'>
          <div>
            <Discover />
            <Contact />
            <Blog />
          </div>
        </div>
      </div>
    </>

  )
}

export default index