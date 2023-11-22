import { useSelector } from "react-redux";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51Jw18DIOKhAAMFhLmXYrvTFY5MFl9URuUp9DkcNUE2ORgIBRMWoDgzhZ8fub6B4zdc5s1RPsGyYxWyVz0oNdOwiP00woXJJaTX"
);

const Payment = () => {
  console.log(stripePromise);
  const { total } = useSelector((state) => state.cart);
  return (
    <div className=" max-w-[1200px] min-h-screen">
      <p className="text-xl text-center my-2">
        Please pay <strong>${parseInt(total)}</strong> for your product.
      </p>
      <div className="w-96 my-9 mx-auto">
        <Elements stripe={stripePromise}>
          <CheckoutForm total={total} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
