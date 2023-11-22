import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { removeUserToken } from "../../services/auth";
import { authKey } from "../../components/constant/authKey";

import Products from "./Products";
import Cart from "../../components/ui/Cart";

const Homepage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeUserToken(authKey);
      navigate("/login");
    }, 120000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="max-w-[1000px] mx-auto">
      <h1 className="text-4xl text-purple-600 font-semibold m-8">
        {" "}
        <span className="border-b-2 border-purple-600">All Products</span>
      </h1>
      <Products />
      <Cart />
    </div>
  );
};

export default Homepage;
