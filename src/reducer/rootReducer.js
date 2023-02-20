
import { combineReducers } from "redux";
import { cartItemReducer, cartReducer, productsReducer, quantityReducer} from "./reducer";
const rootReducer = combineReducers({
    allProducts: productsReducer,
    allCart:cartReducer,
    cartItems:cartItemReducer,
    quantityItem:quantityReducer
})

export default rootReducer