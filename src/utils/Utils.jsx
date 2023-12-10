import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { truncate } from "../helpers/modifiers/modifiers";
import {
    ADD_TO_CART,
    DECREMENT_COUNT,
    LIKE_PRODUCT,
    DISLIKE_PRODUCT,
    REMOVE_FROM_CART,
} from "../redux/actions/action-types";

import "./Utils.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";




const Container = ({ children }) => {
    return <div className="container">{children}</div>;
};
const Card = ({ id, image, title, description, desc, price, product }) => {
    const {t} = useTranslation()
    const dispatch = useDispatch();
    const like_products = useSelector((state) => state.liked.liked_products);
    const cart_products = useSelector((state) => state.cart.cart_products);

    const handleAddToCart = (product) => {
        product.count = 1;
        dispatch({ type: ADD_TO_CART, product });
    };

    const handleRemoveProduct = (product) => {
        dispatch({ type: REMOVE_FROM_CART, product });
    };
    function handleLikeProduct(product) {
        dispatch({ type: LIKE_PRODUCT, product });
    }

    function handleDislikeProduct(product) {
        dispatch({ type: DISLIKE_PRODUCT, product });
    }

    return (
        <div className="card">
            
            <Link to={`/product/${id}`}>
                <div className="card__image-wrapper">
                    <img src={image ? image : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png"} alt="" />
                </div>
            </Link>
            <h2 className="card__title">{truncate(title, 23)}</h2>
            <p title={desc} className="card__text">
                {truncate(description, 40)}
            </p>
            <p className="card__price">{t("price.currency") === "$" ? `$${price}` : `${(price * 12322).toFixed(2)} som`}</p>

            <div className="btns">
                {cart_products.findIndex((cardproduct) => cardproduct.id === id) !==
                    -1 ? (
                    <div className="button_wrapper">
                        <button
                            className="button" onClick={() => handleRemoveProduct(product)}
                        >REMOVE FROM CART</button>
                    </div>
                ) : (
                    <button onClick={() => handleAddToCart(product)} className="btn">
                        ADD TO CART
                    </button>
                )}
                <ul className="card__top-icons">
                    {like_products.findIndex((likeproduct) => likeproduct.id === id) !==
                        -1 ? (
                        <AiFillHeart
                            className="icon__heart--fill"
                            onClick={() => handleDislikeProduct(product)}
                        />
                    ) : (
                        <AiOutlineHeart
                            className="icon__heart"
                            onClick={() => handleLikeProduct(product)}
                        />
                    )}
                </ul>
            </div>
        </div>
    );
};
const Button = ({ text, action, disabled, icon, click, type }) => {
    return (
        <button data-action={action}  disabled={disabled} type={type ? type : "button"} onClick={click} className={"button"}>
            {<>{icon} {text}</>}
        </button>
    );
};

export  {Card, Container, Button};