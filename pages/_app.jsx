import React from 'react'
import '../styles/globals.css'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import styles from '@/styles/style'
import Link from 'next/link'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <main className='font-SPD'>
        <div className={`bg-white shadow-lg sticky top-0 z-10`}>
          <div className={`px-6 lg:px-[120px]`}>
            <Navbar />
          </div>
        </div>
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  )
}

export default MyApp
