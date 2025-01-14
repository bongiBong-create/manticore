import { useSelector } from "react-redux";

import CartItem from "../../components/cartItem";
import Btn from "../../components/ui/button";

import styles from "./index.module.css";

export default function Cart() {
  const { cartProducts, cartTotal } = useSelector((state) => state.cart);

  return (
    <section className={styles.cart}>
      <div className={styles.cart__products}>
        <h1>Products</h1>
        {cartProducts.length > 0 ? (
          cartProducts.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <p>Please, add product in cart</p>
        )}
      </div>
      <div className={styles.order}>
        <h2>Итого</h2>
        <div className="order-total">{Number(cartTotal).toFixed(2)}</div>
        <Btn>Оформить заказ</Btn>
      </div>
    </section>
  );
}
