import React, { useEffect, useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { loadProducts } from '../../redux/actions/product-actions';
import { Container } from '../../utils/Utils';
import { BsFillQuestionOctagonFill } from "react-icons/bs";
import {
  ADD_TO_CART,
  INCREMENT_COUNT,
  DECREMENT_COUNT,
  LIKE_PRODUCT,
  DISLIKE_PRODUCT,
  REMOVE_FROM_CART,
} from "../../redux/actions/action-types";

import './Single.scss'
import { AiFillAlert, AiOutlineHeart } from 'react-icons/ai';
const Single = ({loadProducts}) => {
  const {id} = useParams()
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const data = useSelector(state => state.product_data.products);
  const dispatch = useDispatch();
  const like_products = useSelector((state) => state.liked.liked_products);
  const cart_products = useSelector((state) => state.cart.cart_products);
  useEffect(() => {
    loadProducts(`products/${id}`)
  }, [loadProducts, id])

  const handleAddToCart = (product) => {
    product.count = 1;
    dispatch({ type: ADD_TO_CART, product });
  };

  const handleRemoveProduct = (product) => {
    console.log(product);
    dispatch({ type: REMOVE_FROM_CART, product });
  };

  function handleLikeProduct(product) {
    dispatch({ type: LIKE_PRODUCT, product });
  }

  function handleDislikeProduct(product) {
    dispatch({ type: DISLIKE_PRODUCT, product });
  }
  
  return (
    <div>
      <Container>
        <div className="single-wrapper" key={data.id}>
          <div className="single-img">
            <img src={data.image_link} alt="" />
          </div>
          <div className="single-info">
            <h1>{data.name}</h1>
            <p className='single-desc'>{data.description}</p>
            <ul className='single-info__list'>
              <li>Price: ${data.price}</li>
              <li>Type: {data.product_type}</li>
              <li>Currency: {data.currency }</li>
            </ul>
            <div className="free-delivery">
              <p>Free delivery available</p>
              <BsFillQuestionOctagonFill />
            </div>
            <div className="btns">
              {cart_products.findIndex((cardproduct) => cardproduct.id === id) !==
                -1 ? (
                <div className="button_wrapper">
                  <button
                    className="button"
                    onClick={() => handleRemoveProduct(data)}
                  >
                    REMOVE FROM CART
                  </button>
                </div>
              ) : (
                <button onClick={() => handleAddToCart(data)} className="btn" style={{width: '100%'}}>
                  ADD TO CART
                </button>
              )}
              <button className='heart-btn'>
                {like_products.findIndex((likeproduct) => likeproduct.id === id) !==
                  -1 ? (
                  <AiFillAlert
                    className="icon__heart--fill"
                    onClick={() => handleDislikeProduct(data)}
                  />
                ) : (
                  <AiOutlineHeart
                    className="icon__heart"
                    onClick={() => handleLikeProduct(data)}
                  />
                )}
              </button>
            </div>
              <p style={{marginTop: '10px', fontSize: '18px'}}>Pick Color:</p>
            <div className="color-types">
              {
                Array.isArray(data.product_colors) &&
                data.product_colors.map((color, index) => {
                  return (
                    <div key={index} onClick={() => setCurrentColorIndex(index)} className="color-type" style={{ backgroundColor: color.hex_value, border: currentColorIndex === index ? '2px solid #937ab6' : null}}>
                      
                    </div>
                    
                  )
                } 
                )
              }
              <div className="color-type-result"  style={ { backgroundColor: Array.isArray(data?.product_colors) && data?.product_colors[currentColorIndex]?.hex_value, }}>

              </div>

            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default connect(null, { loadProducts }) (Single)