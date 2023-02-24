import React from "react";
import Navbar from "./components/navbar/Navbar";

import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Gigs from "./pages/gigs/Gigs";
import "./App.scss";
import NotFound from "./pages/404/NotFound";

function App() {
  const path = useLocation().pathname;
  console.log(path);
  return (
    <div className="App">
      {path === "/" && <Navbar />}
      {path === "/gigs" && <Navbar />}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/gigs" element={<Gigs />} />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
      {path === "/" && <Footer />}
      {path === "/gigs" && <Footer />}
    </div>
  );
}

export default App;
