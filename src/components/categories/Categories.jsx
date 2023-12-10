import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import './Categories.scss'
import { loadProducts } from '../../redux/actions/product-actions'
import { connect } from 'react-redux'
import { Card } from '../../utils/Utils'
import instance from '../../services/api'
const Categories = () => {
  const [products, setProducts] = useState([])
  const { category } = useParams()
  useEffect(() => {
    instance.get(`products.json?product_type=${category}`).then(res => {
      setProducts(res.data);
    })
  }, [])
  return (
    <div>
        <h2 style={{textAlign: 'center', margin: '30px 0', color: "#222", textTransform: 'uppercase'}}>{category} Products</h2>
      <div className="cards__wrapper">
        
        { Array.isArray(products) &&
          products.splice(20, 40).map((product) => {
            return (
                <Card
                  key={product.id}
                  id={product.id}
                  image={product.image_link}
                  title={product.name}
                  description={product.description.length > 30 ? product.description.slice(0, 30) + "..." : product.description}
                  desc={product.description}
                  price={product.price}
                  product={product}
                />
            );
          })
}
      </div>
    </div>
  )
}

export default connect(null, { loadProducts })(Categories)