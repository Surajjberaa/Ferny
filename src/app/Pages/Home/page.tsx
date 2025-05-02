import React from 'react'
import Landing from './Lanfing/page'
import ProductPage from './Products/page'
import ProductLargeShowcase from './ProductLarge/page'
import Interiors from './Interiors/page'
import HomeBottom from './HomeBottom/page'

function Home() {
  return (
    <div className=''>
        <Landing />
        <ProductPage />
        <ProductLargeShowcase />
        <Interiors />
        <HomeBottom />
    </div>
  )
}

export default Home