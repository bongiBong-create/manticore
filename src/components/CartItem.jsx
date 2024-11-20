import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";

export default function CartItem({ item }) {
  const dispatchAction = useDispatch();

  const addItemHandler = () => {
    dispatchAction(cartActions.addItem({ ...item }));
  };

  const removeItemHandler = () => {
    dispatchAction(cartActions.removeItem({...item}))
  }

  return (
    <div className="cart__products--item">
      <div className="cart__products--item__img">
        <img src={item.image} alt="cartDress" />
      </div>
      <div className="cart__products--item__title">{item.title}</div>
      <div className="cart__products--item__price">${item.totalPrice.toFixed(2)}</div>
      <div className="cart__products--item__box">
        <button className="cart__products--item__increment" onClick={addItemHandler}>+</button>
        <div className="cart__products--item__quantity">{item.amount}</div>
        <button className="cart__products--item__decrement" onClick={removeItemHandler}>-</button>
      </div>
    </div>
  );
}
