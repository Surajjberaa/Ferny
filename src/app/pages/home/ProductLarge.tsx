import React from 'react'

function ProductLargeShowcase() {
    return (
        <div className='flex md:flex-row flex-col justify-between items-center h-[100vh] w-full'>
            <div className='flex-1/2 flex-col h-[100vh] overflow-hidden md:w-[50%] w-[100%] items-center justify-center flex relative'>
                <img className='object-cover absolute -z-10 opacity-75 h-full w-full' src="https://res.cloudinary.com/dggyfyynb/image/upload/v1746179778/sanju-pandita-CsVNXRgXi3A-unsplash_cwizwd.jpg" alt="" />
                <div className=' text-gray-800 flex flex-col items-center justify-start'>
                    <h1 className='md:text-6xl text-2xl leading-tighter whitespace-nowrap text-center'>Mirrors made for every space</h1>
                    <h2 className='md:text-xl text-sm text-center px-10 pt-5'>Add light, depth, and style to every corner of your home with our thoughtfully crafted mirrors.</h2>
                </div>
            </div>
            <div className='flex-1/2 flex-col h-[100vh] overflow-hidden md:w-[50%] w-[100%] justify-center items-center flex relative'>
                <img className='object-cover absolute -z-10 opacity-75 h-full w-full' src='https://res.cloudinary.com/dggyfyynb/image/upload/v1746179779/minh-pham-7pCFUybP_P8-unsplash_rb2zbi.jpg' />
                <div className=' text-gray-800 flex flex-col items-center justify-start'>
                    <h1 className='md:text-6xl text-2xl leading-tighter whitespace-nowrap text-center'>New In: Bedroom Mirrors</h1>
                    <h2 className='md:text-xl text-sm text-center px-10 pt-5'>Bring elegance and luxury to your bedroom with furniture crafted with natural materaials and simplicity.</h2>
                </div>
            </div>
        </div>
    )
}

export default ProductLargeShowcase