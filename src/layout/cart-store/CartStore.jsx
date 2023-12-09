import React from 'react'
import { useSelector } from 'react-redux'
import { Card, Container } from '../../utils/Utils';
import './CartStore.scss'

const CartStore = () => {
  const data = useSelector(state => state.cart.cart_products)

  console.log(data);
  return (
    <div>
      <Container>
        {
          !data[0] &&
          <div className="cart__wrapper">
            <h3>Your cart is empty</h3>
          </div>
        }
        <div className="addtocart-wrapper">
          <div className='cards'>
            {
              data.map(product => {
                return <Card
                  key={product.id}
                  id={product.id}
                  image={product.image_link}
                  title={product.name}
                  description={product.description.length > 30 ? product.description.slice(0, 30) + "..." : product.description}
                  desc={product.description}
                  price={product.price}
                  product={product}
                />
              })
            }
          </div>

          

        </div>

        
      </Container>
    </div>
  )
}

export default CartStore