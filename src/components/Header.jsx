import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import styles from "./Header.module.css";

export default function Header() {
  const cartQuantityProducts = useSelector(
    (state) => state.cart.productsQuantity
  );

  return (
    <header className={styles.header}>
      <NavLink to="/about">Информация</NavLink>
      <NavLink to="/catalog" className="logo">MANTICORE</NavLink>
      <NavLink to="/cart">Корзина ({cartQuantityProducts})</NavLink>
    </header>
  );
}