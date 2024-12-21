import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-blue-100 text-white p-4 flex justify-between items-center">
      {/* Make the Pizza Delivery title clickable to navigate to the home page */}
      <Link to="/" className="text-lg font-bold">
        Pizza Delivery
      </Link>
      <Link
        to="/cart" // Fixed the route path here to "/cart"
        className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500"
      >
        Go to Cart
      </Link>
    </nav>
  );
};

export default Navbar;
