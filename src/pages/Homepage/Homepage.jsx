import Products from "./Products";
import Cart from "../../components/ui/Cart";

const Homepage = () => {
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
