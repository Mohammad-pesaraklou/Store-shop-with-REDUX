import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

//redux action

//component
import Product from "./Product";

//styles
import styles from "./Store.module.css";
import { fetchProducts } from "../redux/features/productSlice";

const Store = () => {
  const [search, setSearch] = useState();
  const dispatch = useDispatch();
  const productsState = useSelector((state) => state.productState);
  useEffect(() => {
    if (!productsState.products.length) dispatch(fetchProducts());
  }, []);

  return (
    <div className={styles.container}>
      {productsState.loading ? (
        <h2>Loading...</h2>
      ) : productsState.error ? (
        <h4>{productsState.error}</h4>
      ) : (
        productsState.products.map((product) => (
          <Product key={product.id} productData={product} />
        ))
      )}
    </div>
  );
};

export default Store;
