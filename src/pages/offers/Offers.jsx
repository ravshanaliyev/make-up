import React, { useEffect } from 'react'
import Offer from '../../assets/images/offers.webp'
import { connect, useSelector } from 'react-redux';
import { loadProducts } from '../../redux/actions/product-actions';
import { Card } from '../../utils/Utils';
const Offers = () => {
  const data = useSelector(state => state.product_data.products);
  useEffect(() => {
    loadProducts(`products.json?product_category=palette`)
  }, [loadProducts])
  return (
    <div>
      <div className="offer-img">
        <img style={{width: '100%'}} src={Offer} alt="" />
      </div>
      <div className="cards__wrapper">
        {
          data.map((product) => {
            return (
              <>
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
              </>
              
            );
          })
        }
      </div>
    </div>
  )
}

export default connect(null, { loadProducts }) (Offers)