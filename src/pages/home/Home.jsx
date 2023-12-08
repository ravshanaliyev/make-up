import React, { useEffect } from 'react'
import HomeTop from '../../components/home-top/HomeTop'
import { connect, useSelector } from 'react-redux'
import { loadProducts } from '../../redux/actions/product-actions'
const Home = ({loadProducts}) => {
    const data = useSelector(state => state.product_data)
    console.log(data);
    useEffect(() => {
        loadProducts("?product_category=lip_gloss&product_type=lipstick")
    }, [loadProducts])
  return (
    <>
        <HomeTop />
    </>
  )
}

export default connect(null, ({loadProducts})) (Home)