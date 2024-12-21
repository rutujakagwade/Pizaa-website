import React, { useState, useEffect } from "react";
import PizzaCard from "../components/PizzaCard";
import { ToastContainer } from "react-toastify"; // Import ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import the Toastify CSS
import { fetchPizzas } from "../services/api"; // Import the service function

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchPizzaData = async () => {
      try {
        const pizzaData = await fetchPizzas(); // Call the service function
        setPizzas(pizzaData);
      } catch (error) {
        console.error("Error fetching pizzas:", error);
      }
    };

    fetchPizzaData(); // Fetch pizzas when the component mounts
  }, []);

  const addToCart = (pizza) => {
    setCart([...cart, pizza]);
  };

  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="col-span-2 bg-gradient-to-r from-red-400 to-yellow-300 p-4 shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-white">Our Pizzas</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {pizzas.length > 0 ? (
            pizzas.map((pizza) => (
              <PizzaCard key={pizza.id} pizza={pizza} addToCart={addToCart} />
            ))
          ) : (
            <p>Loading pizzas...</p>
          )}
        </div>
      </div>
      <ToastContainer /> {/* Add ToastContainer to show the toasts */}
    </div>
  );
};

export default Home;
