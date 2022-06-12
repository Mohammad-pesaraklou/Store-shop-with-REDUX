import React from 'react';
import { Link } from 'react-router-dom';

//functions
import { shorten } from '../Helper/function';

//styles
import styles from './Product.module.css';

const Product = ({productData}) => {

    return (
        <div className={styles.container}>
            <img src={productData.image} className={styles.cardImage}/>
                <h3>{shorten(productData.title)}</h3>
                <p>{productData.price} $</p>
            <div className={styles.linkContainer}>
                <Link to={`/products/${productData.id}`}>DetailsPage</Link>
            </div>
        </div>
    );
};

export default Product;