import { createBrowserRouter } from "react-router-dom";

import { MainLayout } from "../components/main-layout";
import Catalog from "../pages/catalog";
import Cart from "../pages/cart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Catalog />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
