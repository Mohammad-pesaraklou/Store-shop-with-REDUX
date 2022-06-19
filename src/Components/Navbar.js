import React, { useState } from 'react';
import { useSelector  } from 'react-redux'
import { Link } from 'react-router-dom';

//image
import shopSvg from '../assets/shop.svg'

//styles 
import styles from './Navbar.module.css'
import Search from './Search';

const Navbar = () => {

    const state = useSelector(state => state.cartState)
    

   


    return (
        <div className={styles.mainContainer}>
            
        <div className={styles.container}>
            <Link className={styles.productLink} to='/products'>Products</Link>
            <div className={styles.iconContainer}>
            <Link to='/cart'><img src={shopSvg} alt='shop'/> </Link>
            <span className={styles.counter}>{state.itemsCounter}</span>
            </div>
        </div>
         
        </div>
    );
};

export default Navbar;