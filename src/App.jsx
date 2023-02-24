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
      {path === "/fiverr-ui-clone/dist/" && <Navbar />}
      {path === "/fiverr-ui-clone/dist/gigs" && <Navbar />}
      <Routes>
        <Route exact path="/fiverr-ui-clone/dist/" element={<Home />} />
        <Route exact path="/fiverr-ui-clone/dist/gigs" element={<Gigs />} />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
      {path === "/fiverr-ui-clone/dist/" && <Footer />}
      {path === "/fiverr-ui-clone/dist/gigs" && <Footer />}
    </div>
  );
}

export default App;
