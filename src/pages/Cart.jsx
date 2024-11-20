import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartData, sendCartData } from "../store/cartSlice";

import CartItem from "../components/CartItem";
import Btn from "../reusable/Btn";

import "../components/CartItem.css";

export default function Cart() {
  const cartProducts = useSelector((state) => state.cart.cartProducts);
  const cartTotal = useSelector((state) => state.cart.totalPrice);
  const cart = useSelector((state) => state.cart);
  const dispatchAction = useDispatch();

  useEffect(() => {
    dispatchAction(sendCartData(cart))
  }, [cart])

  useEffect(() => {
    dispatchAction(getCartData())
  }, [])


  return (
    <section className="cart">
      <div className="cart__products">
        <h1>Products</h1>
        {cartProducts.length > 0
          ? cartProducts.map((item) => {
              return <CartItem key={item.id} item={item} />;
            })
          : <span>Please, add product in cart</span>}
      </div>
      <div className="cart__order">
        <h1>Итого</h1>
        <div className="cart__order--total">{cartTotal.toFixed(2)}</div>
        <Btn>Оформить заказ</Btn>
      </div>
    </section>
  );
}