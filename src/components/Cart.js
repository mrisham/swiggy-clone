import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.item);
  const dispatch = useDispatch();
  handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto ">
        <button
          className="bg-black text-white rounded-lg p-2 m-2 border-white"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && <h1>Cart is empty</h1>}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
