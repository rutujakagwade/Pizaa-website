import React, { useState, useEffect } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cart")) || []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const groupedItems = cartItems.reduce((acc, item) => {
    const existingItem = acc.find((i) => i.name === item.name);
    if (existingItem) {
      existingItem.count += 1;
      existingItem.totalPrice += item.price;
    } else {
      acc.push({ ...item, count: 1, totalPrice: item.price });
    }
    return acc;
  }, []);

  const totalCount = cartItems.length;
  const totalBill = groupedItems.reduce((total, item) => total + item.totalPrice, 0);

  const handleRemove = (itemToRemove) => {
    const updatedCart = cartItems.filter((item) => item.name !== itemToRemove.name);
    setCartItems(updatedCart);
  };

  return (
    <div className="p-6 bg-[#FFDDC1] min-h-screen">
      <div className="bg-white rounded-lg shadow-xl p-6 max-w-4xl mx-auto mt-6 slide-up">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4 fade-in">Cart</h2>
        {cartItems.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <div>
            <ul className="space-y-4">
              {groupedItems.map((item, index) => (
                <li
                  key={index}
                  className="bg-gray-100 p-4 rounded-lg shadow hover:bg-gray-200 transition-all duration-300 fade-in"
                >
                  <div className="flex justify-between items-center">
                    <div className="text-gray-800 font-medium">
                      {item.name} ({item.count})
                    </div>
                    <div className="text-gray-600">₹{item.totalPrice}</div>
                    <button
                      onClick={() => handleRemove(item)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex justify-between items-center">
              <p className="font-semibold text-xl">Total Items: {totalCount}</p>
              <p className="font-semibold text-xl">Total Bill: ₹{totalBill}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
