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
import Form from "../components/Form"

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
  {
    path: "productsUpdate",
    element: <ProductsUpdatePage />,
  },
  { path: "addProduct", element: <Form /> },
]);
export default router;
