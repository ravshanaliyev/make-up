import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { Card, Container } from '../../utils/Utils'
import { useSelector } from 'react-redux'
import 'react-loading-skeleton/dist/skeleton.css'
import './Liked.scss'
const Liked = () => {
  const liked_products = useSelector(state => state.liked.liked_products)

  return (
    <Container>
    <h2>Liked Products</h2>
      <div className="liked__wrapper">
        {
          liked_products.map(product => {
            return (!true ?
              <Skeleton amount={product} />
              :
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
            )
          })
        }
      </div>
    </Container>
  )
}

export default Liked