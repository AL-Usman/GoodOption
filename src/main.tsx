import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import "./css/card.css";
import App from "./routes/App.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home.tsx";
import Fashion from "./routes/Fashion/Fashion.tsx";
import { Provider } from "react-redux";
import goodOption from "./store/index.ts";
import Furniture from "./routes/Furniture/Furniture.tsx";
import ShopProducts from "./routes/Fashion/FashionProducts.tsx";
import Cart from "./routes/Cart.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import FurnitureShops from "./routes/Furniture/FurnitureShops.tsx";
import FurnitureProducts from "./routes/Furniture/FurnitureProducts.tsx";
import Grocery from "./routes/Grocery/Grocery.tsx";
import Electronics from "./routes/Electronics/Electronics.tsx";
import ShopFromBrand from "./components/ShopFromBrand.tsx";
import ElectronicsProducts from "./routes/Electronics/ElectronicsProducts.tsx";
import LogIn from "./routes/LogIn.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/fashion",
        element: <Fashion />,
      },
      { path: "/fashion-shop-in", element: <ShopProducts /> },
      {
        path: "/furniture",
        element: <Furniture />,
      },
      {
        path: "/furniture-shop",
        element: <FurnitureShops />,
      },
      {
        path: "/furniture-shop-in",
        element: <FurnitureProducts />,
      },
      {
        path: "/electronics",
        element: <Electronics />,
      },
      {
        path: "/electronics-shop-in",
        element: <ElectronicsProducts />,
      },
      {
        path: "/grocery",
        element: <Grocery />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      { path: "/shop-by-Brand", element: <ShopFromBrand /> },
    ],
  },
  {
    path: "/login",
    element: <LogIn />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={goodOption}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
