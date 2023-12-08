import { combineReducers } from "redux";
import { cartReducer } from "./cart-reducer";
import { likedReducer } from "./like-reducer";

const rootReducers = combineReducers({
  cart: cartReducer,
  liked: likedReducer,
});

export default rootReducers;
