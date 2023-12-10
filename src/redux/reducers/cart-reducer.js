import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from "../actions/action-types";

const initialState = {
  cart_products: [],
};  


const cartReducer = (state = initialState, action) => {
  let p_i;
  switch (action.type) {
    case ADD_TO_CART:
      p_i = state.cart_products.findIndex(
        (product) => product.id === action.product.id
      );
      let newcart = state.cart_products;
      if (p_i === -1) {
        newcart = [...state.cart_products, action.product];
      }
      return {
        cart_products: newcart,
      };
    case REMOVE_FROM_CART:
      p_i = state.cart_products.findIndex(
        (product) => product.id === action.product.id
      );
      let removeditem = state.cart_products.filter(
        (_, index) => index !== p_i
      );
      return {
        cart_products: removeditem,
      };
    default:
      return state;
  }
};

export { cartReducer };
