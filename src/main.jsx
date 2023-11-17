import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
// pages
import Signup from "./pages/Authentication/Signup.jsx";
import Login from "./pages/Authentication/Login.jsx";
import About from "./pages/About.jsx";
import Admin from "./components/Auth/Admin.jsx";
import Services from "./pages/Services.jsx";
import Chat from "./Chat.jsx";
import Cart from "./Cart.jsx";
import Payment from "./components/Payment.jsx";
// import Chat from "./Chat.jsx";

const paths = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/chat",
    element: <Chat />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/payment",
    element: <Payment />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <React.StrictMode>
      <RouterProvider router={paths} />
    </React.StrictMode>
  </ChakraProvider>
);
