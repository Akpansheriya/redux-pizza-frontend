import { ActionTypes } from "../action-types/action-types";
import axios from "axios"

export const setCartItem = (item) => {
  return {
    type:ActionTypes.SET_CART_ITEM,
    payload:item
  }
}

export const setProducts = () => {

  return async(dispatch) => {
    const response = await axios
    .get("http://localhost:4000/api/getAllPizza")
    .catch((err) => {
      console.log("Err: ", err);
    });
    dispatch( {
      type: ActionTypes.SET_PRODUCTS,
      payload: response.data,
    })
  }
 
 
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