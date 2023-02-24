import React from "react";
import Navbar from "./components/navbar/Navbar";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Gigs from "./pages/gigs/Gigs";
import "./App.scss";
import NotFound from "./pages/404/NotFound";

function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/fiverr-ui-clone/dist/",
          element: <Home />,
        },
        {
          path: "fiverr-ui-clone/dist/gigs",
          element: <Gigs />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
