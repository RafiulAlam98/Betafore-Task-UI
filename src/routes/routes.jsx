import Login from "../pages/Login";
import MainLayout from "../components/Layouts/MainLayout";
import { createBrowserRouter } from "react-router-dom";
import SignUp from "../pages/SignUp";
import Homepage from "../pages/Homepage/Homepage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
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
        element: <Homepage />,
      },
    ],
  },
]);
export default routes;
