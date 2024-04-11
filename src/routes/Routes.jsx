import { createBrowserRouter } from "react-router-dom";

import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ViewDetail from "../pages/ViewDetail/ViewDetail";
import PrivateRoutes from "./PrivateRoutes";
import AboutUs from "../pages/AboutUs/AboutUs";
import ContactUs from "../pages/ContactUS/ContactUs";
import BookingForm from "../pages/BookingForm/BookingForm";
import UpdateProfileForm from "../components/UpdateProfileForm/UpdateProfileForm";
import Blog from "../pages/Blog/Blog";


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
        loader: () => fetch('/residential.json'),
      },
      {
        path: '/about',
        element:<AboutUs></AboutUs>,
        
      },
      {
        path: '/contact',
        element:<PrivateRoutes><ContactUs></ContactUs></PrivateRoutes>,
        
      },

      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/booking",
        element: <BookingForm></BookingForm>
      },
      {
        path: "/update",
        element: <PrivateRoutes><UpdateProfileForm></UpdateProfileForm></PrivateRoutes>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },

    ]
  },
]);

export default router;