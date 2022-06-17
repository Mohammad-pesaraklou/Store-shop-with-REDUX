import React from 'react';
import { useSelector , useDispatch } from 'react-redux';

import Cart from './Cart';

const ShopCart = () => {

    const state = useSelector(state => state.cartState)
    const dispatch = useDispatch()

    return (
        <div>
            {
                state.selectedItems.map(item => <Cart
                    key={item.id}
                    itemData={item}
                    />)
            }
        </div>
    );
};

export default ShopCart;