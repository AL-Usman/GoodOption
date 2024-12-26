import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import "./css/card.css";
import App from "./routes/App.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home.tsx";
import Fashion from "./routes/Fashion.tsx";
import { Provider } from "react-redux";
import goodOption from "./store/index.ts";
import Furniture from "./components/Furniture.tsx";
import ShopProducts from "./routes/ShopProducts.tsx";
import Cart from "./routes/Cart.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

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
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={goodOption}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
