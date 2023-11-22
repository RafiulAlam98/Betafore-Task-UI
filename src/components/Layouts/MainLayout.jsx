/* eslint-disable react-hooks/exhaustive-deps */
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import { useEffect } from "react";
import { removeUserId, removeUserToken } from "../../services/auth";
import { authEmail, authKey } from "../constant/authKey";
import toast from "react-hot-toast";

const MainLayout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeUserToken(authKey);
      removeUserId(authEmail);
      navigate("/login");
      toast.error("You are logged out");
    }, 120000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
