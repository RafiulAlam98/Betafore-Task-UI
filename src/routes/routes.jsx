import Login from "../pages/Login";
import MainLayout from "../components/Layouts/MainLayout";
import { createBrowserRouter } from "react-router-dom";
import SignUp from "../pages/SignUp";
import Homepage from "../pages/Homepage/Homepage";
import Payment from "../pages/Payment/Payment";
import PrivateRoutes from "./PrivateRoutes";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/home",
    element: (
      <PrivateRoutes>
        <MainLayout />
      </PrivateRoutes>
    ),
    children: [
      {
        path: "/home",
        element: <Homepage />,
      },
      {
        path: "/home/payment",
        element: <Payment />,
      },
    ],
  },
]);
export default routes;
