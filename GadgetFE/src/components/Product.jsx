import React from 'react';
import assets from '../assets/assets';
import CardsSection from './CardsSection';

const products = [
  {
    title: "Laptops",
    count: 245,
    image: assets.laptop, // Use imported assets
    hoverColor: "hover:bg-yellow-400",
  },
  {
    title: "Drones",
    count: 28,
    image: assets.drone,
    hoverColor: "hover:bg-violet-400",
  },
  {
    title: "Smartphones",
    count: 273,
    image: assets.phone,
    hoverColor: "hover:bg-green-400",
  },
  {
    title: "Gaming",
    count: 25,
    image: assets.gaming,
    hoverColor: "hover:bg-black hover:text-white",
  },
];

const Product = () => {
  return (
    <>
    <div className="flex items-center justify-center bg-white p-6 md:p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-7xl w-full py-16">
        {/* Left Side - Product 0 */}
        <div className={`bg-white p-6 md:p-10 rounded-2xl shadow-lg flex flex-col items-center justify-center transition-all duration-300 ${products[0].hoverColor}`}>
          <h2 className="text-xl md:text-2xl font-bold mb-2">{products[0].title}</h2>
          <p className="text-gray-500 text-sm md:text-base mb-4">{products[0].count} products</p>
          <img 
            src={products[0].image} 
            alt={products[0].title} 
            className="w-52 md:w-80 object-contain"
          />
        </div>
  
        {/* Right Side - Products 1, 2, 3 */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 md:gap-6">
          {/* Product 1 - Top card */}
          <div 
            className={`bg-white p-6 md:p-10 rounded-2xl shadow-lg flex flex-col items-center justify-center transition-all duration-300 ${products[1].hoverColor}`}
          >
            <h2 className="text-xl md:text-2xl font-bold mb-2">{products[1].title}</h2>
            <p className="text-gray-500 text-sm md:text-base mb-4">{products[1].count} products</p>
            <img 
              src={products[1].image} 
              alt={products[1].title} 
              className="w-52 md:w-80 object-contain"
            />
          </div>
          
          {/* Bottom row - Products 2 and 3 */}
          <div className="grid grid-cols-2 gap-4">
            {products.slice(2, 4).map((product, index) => (
              <div 
                key={index} 
                className={`bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center transition-all duration-300 ${product.hoverColor}`}
              >
                <h2 className="text-lg font-semibold mb-1">{product.title}</h2>
                <p className="text-gray-500 text-sm mb-3">{product.count} products</p>
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-20 md:w-28 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <CardsSection />
  </>
  
  );
};

export default Product;



// import React, { useEffect, useState } from 'react';
// import assets from '../assets/assets'; 

// const Product = () => {
//   const [products, setProducts] = useState([]);

  
//   const imageMap = {
//     "Laptops": { image: assets.laptop, hoverColor: "hover:bg-yellow-400" },
//     "Drones": { image: assets.drone, hoverColor: "hover:bg-violet-400" },
//     "Smartphones": { image: assets.phone, hoverColor: "hover:bg-green-400" },
//     "Gaming": { image: assets.gaming, hoverColor: "hover:bg-black hover:text-white" },
//   };

//   useEffect(() => {
//     fetch("http://localhost:8080/api/products")
//       .then((res) => res.json())
//       .then((data) => {
        
//         const enrichedProducts = data.map(product => ({
//           ...product,
//           ...imageMap[product.title] 
//         }));
//         setProducts(enrichedProducts);
//       })
//       .catch((err) => console.error("Error fetching products:", err));
//   }, []);

//   if (products.length === 0) return <p>Loading...</p>;

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6 md:p-10">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-7xl w-full">
//         {/* Main product card */}
//         <div className={`bg-white p-6 md:p-10 rounded-2xl shadow-lg flex flex-col items-center justify-center transition-all duration-300 ${products[0].hoverColor}`}>
//           <h2 className="text-xl md:text-2xl font-bold mb-2">{products[0].title}</h2>
//           <p className="text-gray-500 text-sm md:text-base mb-4">{products[0].count} products</p>
//           <img 
//             src={products[0].image} 
//             alt={products[0].title} 
//             className="w-52 md:w-80 object-contain"
//           />
//         </div>

//         {/* Remaining product cards */}
//         <div className="grid grid-cols-2 gap-4 md:gap-6">
//           {products.slice(1).map((product, index) => (
//             <div 
//               key={index} 
//               className={`bg-white p-4 md:p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center transition-all duration-300 ${product.hoverColor}`}
//             >
//               <h2 className="text-lg font-semibold mb-1">{product.title}</h2>
//               <p className="text-gray-500 text-sm mb-3">{product.count} products</p>
//               <img 
//                 src={product.image} 
//                 alt={product.title} 
//                 className="w-20 md:w-28 object-contain"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Product;
