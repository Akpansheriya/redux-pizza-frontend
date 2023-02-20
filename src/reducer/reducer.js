import { ActionTypes } from "../action-types/action-types";
const intialState = {
  products: [],
};

export const productsReducer = (state = intialState, { type, payload }) => {
  
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products:payload };
    default:
      return state;
  }
};

const quantityState = {
  quantity:[],
};

 
  export const quantityReducer = (state = quantityState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_QUANTITY:
      return { ...state, quantity:payload };
    default:
      return state;
  }
};

const cartItemState = {
  item:[],
};

export const cartItemReducer = (state = cartItemState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_CART_ITEM:
      return { ...state, item:payload };
    default:
      return state;
  }
};

const cartState = {
  cart:[]
}

export const cartReducer = (state = cartState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_CART:
      return { ...state, cart:payload };
    default:
      return state;
  }
};

