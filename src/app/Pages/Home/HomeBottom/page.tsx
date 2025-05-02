'use client'
import Navbar from '@/app/components/Navbar'
import React, { useEffect, useRef, useState } from 'react'
import * as motion from "motion/react-client"

function HomeBottom() {


  const [isMobile, setIsMobile] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return (
    <div className='home-bottom h-[100dvh] w-full flex flex-col md:justify-end justify-start items-center relative'>
      {
        isMobile ? <img className='object-cover absolute -z-10  h-full w-full ' src="https://res.cloudinary.com/dggyfyynb/image/upload/v1746183512/minh-pham-OtXADkUh3-I-unsplash_f5rctu.jpg" alt="" /> : <img className='object-cover absolute -z-10  h-full w-full' src="https://res.cloudinary.com/dggyfyynb/image/upload/v1746183512/spacejoy-85pCvDWDMmI-unsplash_vccdkc.jpg" alt="" />
      }

      <div className='flex md:flex-row flex-col justify-between items-end text-center text-black md:h-[30vh] md:pt-0 pt-20 bg-white/10 backdrop-blur-[2px] rounded-b-xl  w-[80%] h-[50vh]'>
        <div className='md:flex-3/4 flex-col items-start justify-start p-10 h-full'>
          <h1 className='md:text-7xl text-4xl font-light items-start md:text-start'>Stay Close to the Craft</h1>
          <p className='md:text-lg text-sm font-extralight items-start md:text-start mt-10'>Join Ferny Circle and get 10% off all full-price furniture. Enjoy exclusive early access to new collections, additional 15% off selected sale items, and free delivery on every other - all year round. Plus, receive styling tips and member-only surprises.</p>
        </div>
        <div className='md:flex-1/4 flex justify-center items-center h-full  w-full'>
          <motion.button 
            ref={buttonRef} 
            className='bg-white text-black px-4 py-2 rounded-sm hover:bg-gray-100'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Found Out More
          </motion.button>
        </div>
      </div>
    </div>
  )
}

export default HomeBottom