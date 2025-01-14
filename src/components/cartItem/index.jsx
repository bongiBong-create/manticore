import { useDispatch } from "react-redux";

import styles from "./index.module.css";
import { addItem, removeItem } from "../../store/reducers/cartSlice";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className={styles.item}>
      <div className={styles.item__img}>
        <img src={item.image} alt="cartDress" />
      </div>
      <div className={styles.item__title}>{item.title}</div>
      <div className={styles.item__price}>
        ${Number(item.totalPrice).toFixed(2)}
      </div>
      <div className={styles.item__box}>
        <button className="item__increment" onClick={() => handleAddItem(item)}>
          +
        </button>
        <div className="item__quantity">{item.amount}</div>
        <button
          className="cart__products--item__decrement"
          onClick={() => handleRemoveItem(item.id)}
        >
          -
        </button>
      </div>
    </div>
  );
}
