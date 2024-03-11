import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Products from "./pages/products";
import About from "./pages/about";
import Contact from "./pages/contact";

const Layout = () => {
  return (
    <div className="layout">
      <div className="page-container">
        <div className="content-wrapper">
          <Navbar />
        </div>
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/products", element: <Products /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
