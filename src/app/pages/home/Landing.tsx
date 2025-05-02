'use client'
import React, { useEffect, useRef, useState } from 'react'
import * as motion from "motion/react-client"

function Landing() {


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
    <div className='landing h-[100dvh] w-full flex flex-col md:justify-end justify-start  items-center relative '>
      {
        isMobile ? <img className='object-cover absolute -z-10  h-full w-full' src="https://res.cloudinary.com/dggyfyynb/image/upload/v1746097484/spacejoy-IH7wPsjwomc-unsplash_sey9xy.jpg" alt="" /> : <img className='object-cover absolute -z-10  h-full w-full' src="https://res.cloudinary.com/dggyfyynb/image/upload/v1746022899/spacejoy-trG8989WjFA-unsplash_ppdfww.jpg" alt="" />
      }

      <div className='flex md:flex-row flex-col justify-between items-end text-center h-[30vh] md:pt-0 pt-20  w-full mb-5'>
        <div className='md:flex-3/4 flex-col items-start justify-start p-10 h-full'>
          <h1 className='md:text-7xl text-4xl font-light items-start md:text-start whitespace-nowrap'>Where Craft Meets Class</h1>
          <p className='md:text-lg text-sm font-extralight items-start md:text-start mt-10'>Ferny offers furniture made with precision, passion, and natural beauty. Each piece is a statement <br />for those who value design as much as durability</p>
        </div>
        <div className='md:flex-1/4 flex justify-center items-center h-full  w-full mb-20'>
          <motion.button 
            ref={buttonRef} 
            className='bg-white text-black px-4 py-2 rounded-sm hover:bg-gray-100 '
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Shop Now
          </motion.button>
        </div>
      </div>
    </div>
  )
}

export default Landing