import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import Shop from "../Pages/Shop/Shop";
import Rental from "../Pages/Rental/Rental";
import Irriagation from "../Pages/Irriagation/Irriagation";
import Contact from "../Pages/Contact/Contact";
import Design from "../Pages/Design/Design";
import Article from "../Pages/Article/Article";
import Gallery from "../Pages/Gallery/Gallery";
import About from "../Pages/About/About";

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
        path: "/login",
        element: <Login />,
      },
      {
        path: "/regester",
        element: <Register />,
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
        path: "/irriagation",
        element: <Irriagation />,
      },
      {
        path: "/contact",
        element: <Contact />,
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
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default routes