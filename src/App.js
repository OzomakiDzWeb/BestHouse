import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Header from './common/Header';
import Footer from "./common/Footer";
import Home from './pages/Home'
import Cart from "./pages/Cart";
import Shop from './pages/Shop';
import Contact from "./pages/Contact";
import AboutUs from './pages/AboutUs';
import Bloge from "./pages/Bloge";
import NotFoundPage from './pages/NotFoundPage';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/" element={<Contact />} />
          <Route path="/" element={<AboutUs />} />
          <Route path="/" element={<Bloge />} />
          <Route path="/" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App