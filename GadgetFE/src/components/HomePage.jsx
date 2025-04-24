import React from 'react';
import assets from '../assets/assets';
import { FaTruck, FaUndo, FaClock, FaLock } from 'react-icons/fa';

const HomePage = () => {
  return (
    <section className="bg-black text-white min-h-screen px-6 md:px-[5cm] py-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="max-w-xl text-center  lg:text-left">
          <p className="text-gray-400 text-lg mb-2">From $999</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">iPhone 12 Pro</h1>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-white text-black font-semibold px-6 py-3 rounded-md shadow hover:bg-gray-200 transition">
              Buy Now
            </button>
            <button className="flex items-center text-gray-400 hover:text-white transition">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 8.64v6.72L15.27 12 10 8.64M8 5v14l11-7L8 5z" />
              </svg>
              Watch Video
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="mt-10 lg:mt-0 w-full lg:w-1/2">
          <img
            src={assets.phone}
            alt="iPhone 12 Pro"
            className="w-full object-contain"
          />
        </div>
      </div>

      {/* Feature Boxes */}
      <div className="max-w-7xl mx-auto mt-10 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-6 flex flex-col md:flex-row justify-around items-center text-white space-y-6 md:space-y-0">
        <FeatureItem icon={<FaTruck size={24} />} title="Free Shipping" subtitle="Free shipping on all US orders" />
        <FeatureItem icon={<FaUndo size={24} />} title="100% Money Back" subtitle="You have 10 days to return" />
        <FeatureItem icon={<FaClock size={24} />} title="Support 24/7" subtitle="Contact us 24 hours a day" />
        <FeatureItem icon={<FaLock size={24} />} title="100% Payment Secure" subtitle="Your payments are safe with us" />
      </div>
    </section>
  );
};

const FeatureItem = ({ icon, title, subtitle }) => (
  <div className="flex items-start space-x-4 max-w-xs">
    <div className="text-white">{icon}</div>
    <div>
      <h4 className="font-semibold">{title}</h4>
      <p className="text-sm text-gray-400">{subtitle}</p>
    </div>
  </div>
);

export default HomePage;
