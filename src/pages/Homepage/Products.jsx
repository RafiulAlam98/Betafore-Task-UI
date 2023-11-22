import { useDispatch } from "react-redux";
import Loading from "../../components/ui/Loading";
import useProducts from "../../hooks/useProducts";
import { addToCart } from "../../redux/features/cartSlice";
import toast from "react-hot-toast";

const Products = () => {
  const [products, loading] = useProducts();
  const dispatch = useDispatch();
  if (loading) {
    return <Loading />;
  }
  console.log(products);
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));

    toast.success("Added Product to the cart");
  };
  return (
    <>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((item) => (
          <div key={item._id} className="rounded bg-base-100 shadow-xl">
            <figure>
              <img src={item.img} alt={item.title} className="h-3/4" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {item.title}
                <div className="badge badge-secondary">NEW</div>
              </h2>

              <div className="card-actions justify-end my-4">
                <div className="badge badge-outline badge-secondary">
                  Price {item.price}{" "}
                  <i className="fa-solid fa-dollar-sign ml-1"></i>
                </div>
                <div className="badge badge-outline badge-secondary">
                  Quantity {item.quantity}
                </div>
              </div>
              <div>
                <button
                  onClick={() => handleAddToCart(item)}
                  className="btn btn-sm btn-secondary text-white rounded"
                >
                  Add to Cart <i className="fa-solid fa-cart-shopping"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
