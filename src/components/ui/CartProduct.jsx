/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  removeOneFromCart,
} from "../../redux/features/cartSlice";

const CartProduct = ({ item }) => {
  const { quantity, price } = item;
  const totalPrice = Number(quantity * price).toFixed(2);
  const dispatch = useDispatch();
  const handleRemove = (item) => {
    dispatch(removeFromCart(item));
  };
  const handleIncrease = (item) => {
    dispatch(addToCart(item));
  };
  const handleDecrease = (item) => {
    dispatch(removeOneFromCart(item));
  };
  return (
    <div className="m-1 grid grid-cols-3 gap-2">
      <figure className="">
        <img className=" rounded" src={item.img} alt="" />
      </figure>
      <div className="">
        <span className="font-semibold ">{item.title.slice(0, 15)}</span>
        <h2 className="text-center text-sm font-semibold text-red-600">
          <i className="fa-solid fa-bangladeshi-taka-sign"></i>
          <span> {totalPrice}</span>
        </h2>
      </div>

      <div>
        <div className="flex justify-center items-start">
          <button
            className="mx-5 text-red-500"
            onClick={() => handleRemove(item)}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
          <h2 className="text-sm font-medium">Remove </h2>
        </div>

        <div className="mb-2 flex justify-center items-center">
          <button className="mx-2" onClick={() => handleDecrease(item)}>
            <i className="fa-solid fa-minus"></i>
          </button>
          <h2 className="text-sm bg-base-200 px-2 py-1 font-semibold rounded border-2 border-slate-300">
            {item.quantity}
          </h2>
          <button className="mx-2" onClick={() => handleIncrease(item)}>
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
