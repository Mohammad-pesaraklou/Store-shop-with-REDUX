import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector , useDispatch } from 'react-redux';

//functions
import { shorten , isInCart, quantityCount } from '../Helper/function';

//styles
import styles from './Product.module.css';

//icon
import trashIcon from '../assets/trash.svg';

//Actions
import { addItem , increase , removeItem , decrease } from '../redux/cart/cartAction';


const Product = ({productData}) => {

    const state = useSelector(state => state.cartState)
    const dispatch = useDispatch();
    return (
        <div className={styles.container}>
            <img src={productData.image} className={styles.cardImage}/>
                <h3>{shorten(productData.title)}</h3>
                <p>{productData.price} $</p>
            <div className={styles.linkContainer}>
                <Link to={`/products/${productData.id}`}>DetailsPage</Link>
            </div>
            <div className={styles.buttonContainer}>
            {quantityCount(state , productData.id) === 1 && 
            <button className={styles.smallButton} onClick={() => dispatch(removeItem(productData))}><img src={trashIcon} alt="trash"/></button>
            }
            {
                quantityCount(state , productData.id) > 1 && <button className={styles.smallButton} onClick={() => dispatch(decrease(productData))}>-</button>
            }
            {
                quantityCount(state , productData.id) > 0 && 
                <span  className={styles.counter}>{quantityCount(state ,productData.id)}</span>
            }
            

              {
                    isInCart(state , productData.id) ? 
                    <button className={styles.smallButton} onClick={() => dispatch(increase(productData))}>+</button> :
                    <button onClick={() => dispatch(addItem(productData))}>ADD_ITEM</button>
             }  
            </div>
        </div>
    );
};

export default Product;