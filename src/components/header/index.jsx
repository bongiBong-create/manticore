import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import styles from "./index.module.css";

export default function Header() {
  const cartQuantityProducts = useSelector(
    (state) => state.cart.productsQuantity
  );

  return (
    <header className={styles.header}>
      <Link to="/about">Информация</Link>
      <Link to="/" className="logo">
        MANTICORE
      </Link>
      <Link to="/cart">Корзина ({cartQuantityProducts})</Link>
    </header>
  );
}
