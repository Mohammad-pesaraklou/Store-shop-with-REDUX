import React, { useRef } from "react";
import { useDispatch } from "react-redux";

//Function
import { shorten } from "../Helper/function";
//svg
import trashIcon from "../assets/trash.svg";

import { removeItem, increase, decrease } from "../redux/features/cartSlice";
//styles
import styles from "./Cart.module.css";

const Cart = (props) => {
  const { image, title, price, quantity } = props.itemData;
  const dispatch = useDispatch();
  const mesal = useRef();
  console.log(mesal);
  return (
    <div className={styles.container}>
      <img className={styles.productImage} src={image} />
      <div className={styles.data}>
        <h3>{shorten(title)}</h3>
        <p>{price} $</p>
      </div>
      <div>
        <span className={styles.quantity}>{quantity}</span>
      </div>
      <div className={styles.buttonContainer}>
        {quantity > 1 ? (
          <button onClick={() => dispatch(decrease(props.itemData))}>-</button>
        ) : (
          <button onClick={() => dispatch(removeItem(props.itemData))}>
            <img src={trashIcon} alt="trashIcon" />
          </button>
        )}
        {<button onClick={() => dispatch(increase(props.itemData))}>+</button>}
      </div>
    </div>
  );
};

export default Cart;
