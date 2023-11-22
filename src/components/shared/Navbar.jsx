import { useNavigate } from "react-router-dom";
import { removeUserId, removeUserToken } from "../../services/auth";
import { authEmail, authKey } from "../constant/authKey";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    removeUserToken(authKey);
    removeUserId(authEmail);
    navigate("/login");
  };
  return (
    <div className="navbar bg-base-600">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">App</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Item 1</a>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <label
          htmlFor="cart-drawer"
          className="drawer-button btn btn-sm btn-primary rounded capitalize mr-4"
        >
          Open Cart
        </label>
        <button
          onClick={handleLogout}
          className="btn btn-sm btn-warning rounded "
        >
          <span>
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
          </span>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
