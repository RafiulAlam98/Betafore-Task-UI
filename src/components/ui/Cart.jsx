import { useSelector } from "react-redux";
import CartProduct from "./CartProduct";
import { Link } from "react-router-dom";

const Cart = () => {
  const { products, total } = useSelector((state) => state.cart);

  return (
    <div className="drawer drawer-end">
      <input id="cart-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side">
        <label
          htmlFor="cart-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          <h2 className="text-center  text-2xl text-secondary font-semibold mb-8">
            <span className=" border-b-2 border-secondary">Shopping Cart</span>
          </h2>
          {products.map((item) => (
            <div
              key={item._id}
              className=" w-full border-b-1 border-slate-300 mb-5"
            >
              <CartProduct item={item} />
            </div>
          ))}
          <h2 className="text-xl font-semibold mt-8">Sub Total</h2>
          <h2 className="text-sm mb-5 font-semibold text-secondary">
            <i className="fa-solid fa-dollar-sign ml-1"></i>
            <span> {parseInt(total)}</span>
          </h2>
          <Link to="/payment">
            <button className="btn btn-sm rounded btn-secondary">
              Checkout
            </button>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Cart;
