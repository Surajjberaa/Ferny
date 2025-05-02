import React from 'react'
import Landing from './Landing'
import ProductPage from './Products'
import ProductLargeShowcase from './ProductLarge'
import Interiors from './Interiors'
import HomeBottom from './HomeBottom'

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