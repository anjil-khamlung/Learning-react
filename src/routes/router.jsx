import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import LearningUsestate from "../pages/LearningUsestate";
import UseEffectExample from "../pages/UseEffectExample";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ProductsPage from "../pages/ProductsPage";
import SingleProductPage from "../pages/SingleProductPage";
import ProductsUpdatePage from "../pages/UpdateProducts";
import Form from "../components/AddProduct";
import AddProduct from "../components/AddProduct";
import EditProduct from "../components/EditProduct";
import CartsPage from "../pages/CartsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "useState",
        element: <LearningUsestate />,
      },
      {
        path: "useEffect",
        element: <UseEffectExample />,
      },
      {
        path: "products",
        element: <ProductsPage />,
      },
      {
        path: "product/:id",
        element: <SingleProductPage />,
      },
      {
        path: "updateProduct",
        element: <ProductsUpdatePage />,
      },
      {
        path: "addProduct",
        element: <AddProduct />,
      },
      {
        path: "editProduct/:id",
        element: <EditProduct />,
      },
      {
        path: "carts",
        element:<CartsPage/>
      }
    ],
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "register",
    element: <RegisterPage />,
  },
]);
export default router;
