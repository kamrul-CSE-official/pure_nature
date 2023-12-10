import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import NormalLayouts from "../Layouts/NormalLayouts";
import Home from "../Pages/Home/Home";
import Shop from "../Pages/Shop/Shop";
import Rental from "../Pages/Rental/Rental";
import Design from "../Pages/Design/Design";
import Article from "../Pages/Article/Article";
import Gallery from "../Pages/Gallery/Gallery";
import RentalDetails from "../Pages/RentalDetails/RentalDetails";
import ProductsDetails from "../Pages/ProductsDetails/ProductsDetails";
import About from "../Pages/About/About";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Pages/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import UserProfile from "../Pages/UserProfile/UserProfile";
import AddArticle from "../Pages/AddArticle/AddArticle";
import ArticleDetails from "../Pages/ArticleDetails/ArticleDetails";
import UpdateArticle from "../Pages/UpdateArticle/UpdateArticle";

// Define your routes with meaningful names
const mainRoutes = [
  { path: "/", element: <Home /> },
  { path: "/shop", element: <Shop /> },
  { path: "/rental", element: <Rental /> },
  { path: "/design", element: <Design /> },
  { path: "/article", element: <Article /> },
  { path: "/gallery", element: <Gallery /> },
  {
    path: "/rentalDetails",
    element: (
      <PrivateRoute>
        <RentalDetails />
      </PrivateRoute>
    ),
  },
  {
    path: "/productsDetails/:id",
    element: (
      <PrivateRoute>
        <ProductsDetails />
      </PrivateRoute>
    ),
    loader: ({ params }) =>
      fetch(`${import.meta.env.VITE_SERVERapi}/productsDetails/${params.id}`),
  },
  { path: "/about", element: <About /> },
];

const loginRoutes = [
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  {
    path: "/profile",
    element: (
      <PrivateRoute>
        <UserProfile />
      </PrivateRoute>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
  },
  {
    path: "/addArticle",
    element: (
      <PrivateRoute>
        <AddArticle />
      </PrivateRoute>
    ),
  },
  {
    path: "/articleDetails/:id",
    element: (
      <PrivateRoute>
        <ArticleDetails />
      </PrivateRoute>
    ),
    loader: ({ params }) =>
      fetch(`${import.meta.env.VITE_SERVERapi}/articles/${params.id}`),
  },
  {
    path: "/articleUpdate/:id",
    element: (
      <PrivateRoute>
        <UpdateArticle />
      </PrivateRoute>
    ),
    loader: ({ params }) =>
      fetch(`${import.meta.env.VITE_SERVERapi}/articles/${params.id}`),
  },
];

// Create a function to generate routes for a layout with children
const createLayoutRoutes = (layout, children) => ({
  path: "/",
  element: layout,
  children,
});

// Define your routes using meaningful names and organize them logically
const routes = createBrowserRouter([
  createLayoutRoutes(<MainLayouts />, mainRoutes),
  createLayoutRoutes(<NormalLayouts />, loginRoutes),
  { path: "*", element: <PageNotFound /> },
]);

export default routes;
