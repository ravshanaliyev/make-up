import { combineReducers } from "redux";
import { cartReducer } from "./cart-reducer";
import { likedReducer } from "./like-reducer";
import { productReducer } from "./product-reducer";
import languageReducer from "./language-reducer";

const rootReducers = combineReducers({
  product_data: productReducer,
  cart: cartReducer,
  liked: likedReducer,
  language: languageReducer,
});

export default rootReducers;
