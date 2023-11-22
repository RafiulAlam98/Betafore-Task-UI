import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { removeUserToken } from "../../services/auth";
import { authKey } from "../../components/constant/authKey";

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
    <div className="max-width-[800px] mx-auto ">
      <h2>this is homepage</h2>
      <h1>Products</h1>
    </div>
  );
};

export default Homepage;
