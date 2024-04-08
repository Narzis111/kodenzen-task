import { createBrowserRouter } from "react-router-dom";

import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ViewDetail from "../pages/ViewDetail/ViewDetail";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/residential.json'),
      },
      {
        path: '/asset/:id',
        element:<PrivateRoutes><ViewDetail></ViewDetail></PrivateRoutes>,
        loader: () => fetch('../../public/residential.json'),
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/login",
        element: <Login></Login>
      },

    ]
  },
]);

export default router;