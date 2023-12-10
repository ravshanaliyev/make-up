import React from 'react'
import HomeTop from '../../components/home-top/HomeTop'
import Product from '../../components/product/Product'
import Science from '../../components/science/Science'
import Details from '../../components/details/Details'
import LatestProducts from '../../components/latest/LatestProducts'
const Home = () => {
  return (
    <>
        <HomeTop />
        <Product />
        <Science />
        <LatestProducts />
        <Details />
    </>
  )
}

export default Home