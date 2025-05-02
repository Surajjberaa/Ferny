import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 ">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-[#515230]">
              Ferny
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4 text-[#515230]">
              <Link href="/furniture" className=" px-3 py-2 rounded-md">
                Furniture
              </Link>
              <Link href="/bathroom" className=" px-3 py-2 rounded-md">
                Bathroom
              </Link>
              <Link href="/rugandtextiles" className=" px-3 py-2 rounded-md">
                Rug & Textiles
              </Link>
              <Link href="/outdoor" className=" px-3 py-2 rounded-md">
                Outdoor
              </Link>
              <Link href="/lighting" className=" px-3 py-2 rounded-md">
                Lighting
              </Link>
              <Link href="/dining" className=" px-3 py-2 rounded-md">
                Dining
              </Link>
            </div>
          </div>

          <div className="md:flex items-center space-x-4 hidden text-[#515230]">
            <div>
              <Link href="/cart" className=" px-3 py-2 rounded-md">
                Cart
              </Link>
            </div>
            <div>
              <Link href="/login" className=" px-3 py-2 rounded-md">
                Login
              </Link>
            </div>
          </div>
          <div className='md:hidden flex items-center'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 md:hidden"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
