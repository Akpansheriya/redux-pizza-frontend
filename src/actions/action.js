import { ActionTypes } from "../action-types/action-types";


export const setCartItem = (item) => {
  return {
    type:ActionTypes.SET_CART_ITEM,
    payload:item
  }
}

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const setQuantity = (quantity) => {
  return {
    type: ActionTypes.SET_QUANTITY,
    payload:quantity,
  };
};

export const setCart = (cart) => {
  return {
    type: ActionTypes.SET_CART,
    payload:cart,
  };
};