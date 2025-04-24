import React from "react";
import assets from "../assets/assets";

const products = [
  { id: 1, name: "iPhone 12 Pro", price: "$999.00", category: "GADGETS", image: assets.phone },
  { id: 2, name: "VR Box", price: "$499.00", category: "GADGETS", image: assets.vrbox },
  { id: 3, name: "Laptop", price: "$1299.00", category: "GADGETS", image: assets.laptop },
  { id: 4, name: "Drone", price: "$799.00", category: "GADGETS", image: assets.drone },
  { id: 5, name: "Gaming Console", price: "$599.00", category: "GADGETS", image: assets.gaming },
  { id: 6, name: "iPad Mini", price: "$499.00", category: "GADGETS", image: assets.phone },
];

const FeaturedProducts = () => {
  return (
    <section className="py-20 px-6 sm:px-10 lg:px-20 bg-white flex justify-center items-center min-h-screen">
      <div className="w-full max-w-7xl">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
            <p className="text-gray-500 mt-1">Feugiat pretium nibh ipsum consequat commodo.</p>
          </div>
          <button className="bg-gray-100 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition">
            View All
          </button>
        </div>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
  <div
    key={product.id}
    className="bg-white transition rounded-2xl flex flex-col text-center"
  >
    <div className="flex justify-center items-center rounded-2xl bg-gray-50 mb-6 overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-68 h-68 object-contain transform transition-transform duration-300 hover:scale-110"
      />
    </div>
    <div className="text-start px-6 pb-6">
      <h3 className="font-semibold text-lg text-gray-800">{product.name}</h3>
      <p className="text-gray-900 font-semibold mt-2">{product.price}</p>
      <p className="text-xs text-gray-500 uppercase mb-4">{product.category}</p>
      <button className="bg-gray-100 text-gray-900 px-4 py-2 rounded-md text-sm hover:bg-gray-200 transition">
        Add to cart
      </button>
    </div>
  </div>
))}


        </div>
      </div>
    </section>
  );
  
};

export default FeaturedProducts;
