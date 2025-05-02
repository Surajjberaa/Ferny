import React from 'react'

const ProductData = [
    {
        id: 1,
        url: 'https://res.cloudinary.com/dggyfyynb/image/upload/v1746181479/spacejoy-XpbtQfr9Skg-unsplash_agxylv.jpg',
        alt: 'product 1',
        className: '',
        title: ''
    },
    {
        id: 2,
        url: 'https://res.cloudinary.com/dggyfyynb/image/upload/v1746181479/spacejoy-YqFz7UMm8qE-unsplash_mmq8wj.jpg',
        alt: 'product 2',
        title: ''
    },
    {
        id: 3,
        url: 'https://res.cloudinary.com/dggyfyynb/image/upload/v1746181479/spacejoy-YI2YkyaREHk-unsplash_emkuba.jpg',
        alt: 'product 3',
        title: ''
    },
    {
        id: 4,
        url: 'https://res.cloudinary.com/dggyfyynb/image/upload/v1746181479/spacejoy-RUvW1KGD9a4-unsplash_ncyybh.jpg',
        alt: 'product 3',
        title: ''
    },
]

function Interiors() {
  return (
    <div className='product-page flex flex-col text-black h-full'>
        <div className='product-page-upper flex flex-col md:h-[100vh] h-full w-screen'>
            <div className='header-text w-full mt-20'>
                <h1 className='text-7xl font-light text-center' >Interiors by Ferny</h1>
                <h2 className='text-xl pt-10 font-light text-center opacity-75'>Give Your Whole Interior a New Makeover With Us</h2>
            </div>
            <div className='products-cards mt-20'>
                <div className='products-cards-inner flex flex-col md:flex-row justify-center items-center gap-10'>
                    {
                        ProductData.map((product) => (
                            <div key={product.id} className='flex justify-center items-center'>
                                {imageCard(product)}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

function imageCard({url, alt, title}: {url: string, alt: string,  title: string | undefined}) {
  return (
    <div className='image-card w-full h-full p-10'>
        <img className={`object-cover h-[500px] w-[400px] rounded-tl-[50px] rounded-tr-[50px]`} src={url} alt={alt} />
        <h1 className='text-center text-xl font-extralight opacity-60 mt-4'>{title}</h1>
    </div>
  )
}

export default Interiors