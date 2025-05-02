import React from 'react'

const ProductData = [
    {
        id: 1,
        url: 'https://res.cloudinary.com/dggyfyynb/image/upload/v1746176801/sufyan-hmcbkhpuTag-unsplash_silnfs.jpg',
        alt: 'product 1',
        className: '',
        title: 'Comfort Sofa Cum Chair'
    },
    {
        id: 2,
        url: 'https://res.cloudinary.com/dggyfyynb/image/upload/v1746176801/ansuman-mishra-5kza-6yGHnk-unsplash_emb0us.jpg',
        alt: 'product 2',
        title: 'Elegant Sofa'
    },
    {
        id: 3,
        url: 'https://res.cloudinary.com/dggyfyynb/image/upload/v1746176801/jejo-jose-V6xxBY_6pFM-unsplash_yb1d2d.jpg',
        alt: 'product 3',
        title: 'Comfort Chair'
    },
    {
        id: 4,
        url: 'https://res.cloudinary.com/dggyfyynb/image/upload/v1746176801/daniil-silantev-1P6AnKDw6S8-unsplash_bzxena.jpg',
        alt: 'product 3',
        title: 'Royal Sofa Chair'
    },
]

function ProductPage() {
  return (
    <div className='product-page flex flex-col text-black'>
        <div className='product-page-upper flex flex-col h-full w-screen'>
            <div className='header-text w-full mt-20'>
                <h1 className='text-7xl font-light text-center' >Explore The Collection</h1>
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
        <div className='product-page-lower md:flex h-[100vh] w-screen hidden'>
            <div className='lower-left flex-1/2 w-[50%] items-center justify-center flex'>   
                <h1 className='text-4xl font-light w-[80%] text-center'>At Ferny, we believe furniture should do more than just fill a space it should tell a story. Born from a deep appreciation for craftsmanship and a commitment to sustainability, our pieces are designed to be both functional and beautiful. Each item is a testament to our dedication to quality, ensuring that your home is not just furnished, but curated. We invite you to explore our collection and discover the perfect piece that resonates with your style and values.</h1>
            </div>
            <div className='lower-right flex-1/2 w-[50%] justify-center items-center flex'>
               <img src="https://res.cloudinary.com/dggyfyynb/image/upload/v1746176801/kam-idris-WxqrvWtbg2o-unsplash_bhp7hp.jpg" alt="" className='h-[800px] w-[800px] rounded-bl-[50px] rounded-tr-[50px]' />
            </div>
        </div>
    </div>
  )
}

function imageCard({url, alt, title}: {url: string, alt: string,  title: string | undefined}) {
  return (
    <div className='image-card w-full h-full p-10'>
        <img className={`object-cover h-[500px] w-[400px] rounded-tl-[50px] rounded-br-[50px]`} src={url} alt={alt} />
        <h1 className='text-center text-xl font-extralight opacity-60 mt-4'>{title}</h1>
    </div>
  )
}

export default ProductPage