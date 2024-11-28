import React, { useContext } from "react";
import { FaMinus, FaPlus } from "react-icons/fa"; // FontAwesome icons
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="max-w-sm bg-white shadow-md rounded-lg overflow-hidden flex flex-col">
      {/* Food Item Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover"
      />

      {/* Content Section */}
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          {/* Food Name */}
          <h2 className="text-md font-bold text-gray-800 mb-1">{name}</h2>

          {/* Food Description */}
          <p className="text-gray-600 text-sm mb-2">{description}</p>

          {/* Price */}
          <p className="text-red-500 text-lg font-semibold">${price}</p>
        </div>

        {/* Add to Cart Section */}
        <div className="mt-4">
          {cartItems[id] ? (
            <div className="flex items-center justify-center gap-3">
              <FaMinus
                className="text-red-500 text-xl border border-red-500 rounded-full p-1 cursor-pointer"
                onClick={() => removeFromCart(id)}
              />
              <p className="text-lg font-bold text-gray-800">{cartItems[id]}</p>
              <FaPlus
                className="text-green-500 text-xl border border-green-500 rounded-full p-1 cursor-pointer"
                onClick={() => addToCart(id)}
              />
            </div>
          ) : (
            <button
              onClick={() => addToCart(id)}
              className="w-full bg-green-500 text-white font-bold py-2 rounded-md"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
