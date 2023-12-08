// const Card = ({ id, image, title, description, desc, price, product }) => {
//     const dispatch = useDispatch();
//     const like_products = useSelector((state) => state.liked.liked_products);
//     const cart_products = useSelector((state) => state.cart.cart_products);

//     const handleAddToCart = (product) => {
//         product.count = 1;
//         dispatch({ type: ADD_TO_CART, product });
//     };

//     const handleIncrementProductCount = (product) => {
//         console.log(product);
//         dispatch({ type: INCREMENT_COUNT, product });
//     };

//     const handleDecrementProductCount = (product) => {
//         console.log(product);
//         dispatch({ type: DECREMENT_COUNT, product });
//     };

//     function handleLikeProduct(product) {
//         dispatch({ type: LIKE_PRODUCT, product });
//     }

//     function handleDislikeProduct(product) {
//         dispatch({ type: DISLIKE_PRODUCT, product });
//     }

//     return (
//         <div className="card">
//             <ul className="card__top-icons">
//                 {like_products.findIndex((likeproduct) => likeproduct._id === id) !==
//                     -1 ? (
//                     <AiFillHeart
//                         className="icon__heart--fill"
//                         onClick={() => handleDislikeProduct(product)}
//                     />
//                 ) : (
//                     <AiOutlineHeart
//                         className="icon__heart"
//                         onClick={() => handleLikeProduct(product)}
//                     />
//                 )}
//             </ul>
//             <div className="card__image-wrapper">
//                 <img src={image} alt="" />
//             </div>
//             <h2 className="card__title">{title}</h2>
//             <p title={desc} className="card__text">
//                 {truncate(description, 25)}
//             </p>
//             <strong className="card__price">$ {formatmoney(price)}</strong>

//             {cart_products.findIndex((cardproduct) => cardproduct._id === id) !==
//                 -1 ? (
//                 <div className="button_wrapper">
//                     <button
//                         className="btn"
//                         onClick={() => handleDecrementProductCount(product)}
//                     >
//                         -
//                     </button>
//                     <strong>
//                         {cart_products.find((cartproduct) => cartproduct._id === id).count}
//                     </strong>
//                     <button
//                         className="btn"
//                         onClick={() => handleIncrementProductCount(product)}
//                     >
//                         +
//                     </button>
//                 </div>
//             ) : (
//                 <button onClick={() => handleAddToCart(product)} className="btn">
//                     Sotib olish
//                 </button>
//             )}
//         </div>
//     );
// };