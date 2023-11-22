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
    <div>
      <h2>this is homepage</h2>
    </div>
  );
};

export default Homepage;
