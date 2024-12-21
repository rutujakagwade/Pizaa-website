import React from "react";
import { toast } from "react-toastify";

const PizzaCard = ({ pizza, addToCart }) => {
    const handleAddToCart = () => {
        addToCart(pizza);
        toast.success(`${pizza.name} added to cart!`, {
          position: "top-right", // Set the position to top-right
          autoClose: 3000,
        });
      };
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
 <img
        src={`/uploads/${pizza.image}`} // Assuming image path is correct
        alt={pizza.name}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-semibold">{pizza.name}</h3>
      <p className="text-lg text-gray-700">₹{pizza.price}</p>
      <button
        className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-full"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default PizzaCard;
