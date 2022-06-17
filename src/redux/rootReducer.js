import { combineReducers } from 'redux';
import cartReducer from './cart/cartReducer';
import productReducer from './products/productReducer';

const rootReducer = combineReducers({
    productState: productReducer,
    cartState: cartReducer
})

export default rootReducer;