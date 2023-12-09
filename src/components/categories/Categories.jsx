import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
// import './Categories.scss'
import { loadProducts } from '../../redux/actions/product-actions'
import { connect, useSelector } from 'react-redux'
import { Card } from '../../utils/Utils'
const Categories = () => {
  const { category } = useParams()
  const data = useSelector(state => state.product_data.products);
  useEffect(() => {
    loadProducts(`?product_category=${category}`)
  }, [loadProducts, data, category])
  return (
    <div>
        <h2 style={{textAlign: 'center', margin: '30px 0', color: "#222", textTransform: 'uppercase'}}>{category} Products</h2>
      <div className="cards__wrapper">
        {
          data.map((product) => {
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