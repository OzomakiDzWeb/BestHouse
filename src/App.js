import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import Bloge from "./pages/Bloge";
import NotFoundPage from "./pages/NotFoundPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const App = () => {
  return (
    <div className="">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/bloge" element={<Bloge />} />
          <Route path="/" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
