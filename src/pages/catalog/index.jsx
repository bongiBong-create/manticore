import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetProducts } from "../../store/reducers/productsSlice";

import CatalogItem from "../../components/catalogItem";

import styles from "./index.module.css";

export default function Catalog() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchGetProducts());
  }, []);

  return (
    <section className={styles.catalog}>
      <div className={styles.catalog__grid}>
        {products.length > 0
          ? products.map((item) => <CatalogItem key={item.id} item={item} />)
          : "loading..."}
      </div>
    </section>
  );
}
