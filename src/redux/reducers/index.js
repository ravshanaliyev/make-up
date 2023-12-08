import { combineReducers } from "redux";
import { cartReducer } from "./cart-reducer";
import { likedReducer } from "./like-reducer";
import { productReducer } from "./product-reducer";

const rootReducers = combineReducers({
  product_data: productReducer,
  cart: cartReducer,
  liked: likedReducer,
});

export default rootReducers;
