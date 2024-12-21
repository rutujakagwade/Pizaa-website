import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";  // Import BrowserRouter here
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App() {
  return (
    <Router>  {/* Wrap your app with BrowserRouter */}
      <div className="bg-gray-100 min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />  {/* Fixed typo in route path */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
