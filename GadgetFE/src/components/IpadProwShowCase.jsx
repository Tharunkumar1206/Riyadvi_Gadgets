import React from "react";
import assets from '../assets/assets';

export default function IPadProShowcase() {
  return (
    <div className="bg-black text-white min-h-[90vh] flex items-center justify-center px-4 md:px-10 lg:px-20">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-32 w-full max-w-7xl">
        
        {/* Left Side - Text */}

        <div className="w-full lg:w-1/2 relative">
          <img
            src={assets.ipad2}
            alt="iPad Pro"
            className="w-full rounded-xl object-contain"
          />
          <div className="absolute bottom-50 left-50 bg-gradient-to-r from-red-500 to-black bg-opacity-70 p-4 rounded-xl max-w-xs shadow-lg">
            <h3 className="font-bold text-white mb-1">Super Powerful Chip</h3>
            <p className="text-gray-300 text-sm">
              Pellentesque pulvinar habitant morbi tristique maecenas.
            </p>
          </div>
        </div>


        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4">
          <p className="text-gray-400 text-sm lg:text-base">From $1099</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">iPad Pro</h1>
          <p className="text-gray-300 text-base lg:text-lg">Libero nunc consequat interdum</p>
          <p className="text-gray-300 text-base lg:text-lg">Varius sitamet mattis vulputate</p>
          <p className="text-gray-300 text-base lg:text-lg">Ultricies mieget mauris pharetra</p>
          <button className="mt-4 bg-white text-black px-6 py-2 rounded-md font-medium hover:bg-gray-200 transition">
            Buy Now
          </button>
        </div>

      </div>
    </div>
  );
  
}
