import React from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

//components
import Cart from './Cart';

//styles
import styles from './shopCart.module.css';


const ShopCart = () => {

    const state = useSelector(state => state.cartState)
    const dispatch = useDispatch()

    return (
        <div className={styles.container}>
            <div className={styles.cartContainer}>
            {
                state.selectedItems.map(item => <Cart
                    key={item.id}
                    itemData={item}
                    />)
            }
            </div>
            {
                    state.itemsCounter > 0 && <div className={styles.payment}>
                    <p><span>Total Items:</span>{state.counterItem}</p>
                    <p><span>Total payment:</span>{state.total}</p>
                    <div className={styles.buttonContainer}>
                        <button className={styles.checkout} onClick={() => dispatch({type: "CHECKOUT"})}>Check Out</button>
                        <button className={styles.clear} onClick={() => dispatch({type: "CLEAR"})}>Clear</button>
                        </div>
                  </div>
            }

              {
                state.checkout && <div className={styles.complete}>
                    <h3>checkout successfully</h3>
                    <Link to='/products'>Products</Link>
                    </div> 
            }

            {
                 !state.checkout &&  state.counterItem === 0 && <div className={styles.complete}>
                     <h3>Want to buy?</h3>
                     <Link to='/products'>Products</Link>
                    </div>
            }
        </div>
    );
};

export default ShopCart;