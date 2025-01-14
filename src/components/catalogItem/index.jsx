import { useDispatch } from "react-redux";

import Btn from "../ui/button";

import styles from "./index.module.css";
import { addItem } from "../../store/reducers/cartSlice";

export default function CatalogItem({ item }) {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className={styles.catalog__item}>
      <div className={styles["catalog__item-img"]}>
        <img src={item.image} alt="dress" />
      </div>
      <div className={styles["catalog__item-info"]}>
        <div>
          <p className={styles["catalog__item-name"]}>{item.title}</p>
          <p className="catalog__item-price">${item.price}</p>
        </div>
        <Btn onClick={() => handleAddItem(item)}>Купить</Btn>
      </div>
    </div>
  );
}
