import { combineReducers } from 'redux';
import productReducer from './products/productReducer';

const rootReducer = combineReducers({
    productState: productReducer

})

export default rootReducer;