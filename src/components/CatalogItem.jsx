import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";

import Btn from "../reusable/Btn";
import styles from "./CatalogItem.module.css";

export default function CatalogItem({ item }) {
  const dispatchAction = useDispatch();

  const addItemHandler = () => {
    dispatchAction(cartActions.addItem({...item}))
  }

  return (
    <div className={styles.catalog__item}>
      <div className={styles["catalog__item--img"]}>
        <img src={item.image} alt="dress" />
      </div>
      <div className={styles["catalog__item--info"]}>
        <div>
          <p className={styles["catalog__item--name"]}>{item.title}</p>
          <p className="catalog__item--price">${item.price}</p>
        </div>
        <Btn onClick={addItemHandler}>
          Купить
        </Btn>
      </div>
    </div>
  );
}
