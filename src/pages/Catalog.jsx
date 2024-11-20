import axios from "axios";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartData, sendCartData } from "../store/cartSlice";

import CatalogItem from "../components/CatalogItem";
import styles from "../App/styles/Catalog.module.css"

export default function Catalog() {
  const [products, setProducts] = useState([])
  const cart = useSelector((state) => state.cart);
  const dispatchAction = useDispatch();

  useEffect(() => {
    dispatchAction(sendCartData(cart))
  }, [cart])

  useEffect(() => {
    dispatchAction(getCartData())
  }, [])


    useEffect(() => {
      axios.get("https://fakestoreapi.com/products")
        .then(response => setProducts(prevProducts => response.data))
        .catch(error => console.log(error));
    }, [])

  return (
    <section className={styles.catalog}>
      <div className={styles.catalog__grid}>
        {products.length > 0 ? products.map((item) => {
          return <CatalogItem key={item.id} item={item} />;
        }): "loading..."}
      </div>
    </section>
  );
}
