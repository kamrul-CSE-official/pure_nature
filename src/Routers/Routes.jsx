import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import Shop from "../Pages/Shop/Shop";
import Rental from "../Pages/Rental/Rental";
import Design from "../Pages/Design/Design";
import Article from "../Pages/Article/Article";
import Gallery from "../Pages/Gallery/Gallery";
import About from "../Pages/About/About";
import RentalDetails from "../Pages/RentalDetails/RentalDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/rental",
        element: <Rental />,
      },
      {
        path: "/design",
        element: <Design />,
      },
      {
        path: "/article",
        element: <Article />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/rentalDetails",
        element: <RentalDetails />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/regester",
    element: <Register />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default routes;
