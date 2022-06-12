import React, { useEffect } from 'react';
import { useSelector , useDispatch} from 'react-redux';

//redux action
import { fetchProduct } from '../redux/products/productAction';

//component
import Product from './Product';

const Store = () => {

    const dispatch = useDispatch();
    const productsState = useSelector(state => state.productState);

    useEffect(() => {
        dispatch(fetchProduct())
    }, [])

    return (

        <div>
            {
                productsState.loading ?
                <h2>Loading...</h2> :
                productsState.error ? 
                <h4>{productsState.error}</h4> :
                productsState.products.map(product => <Product  
                key={product.id}
                productData={product}
                />)
            }
        </div>
    );
};

export default Store;