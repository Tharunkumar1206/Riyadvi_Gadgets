import React, { useState } from 'react';
import { FaSearch, FaUser, FaShoppingBag } from 'react-icons/fa';
import AuthModal from './AuthModel';

const Navbar = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleUserIconClick = () => {
    setShowAuthModal(true);
  };

  return (
    <>
      <nav className="bg-[#0f0f0f] text-white py-12 px-6 md:px-12 lg:px-20">
  <div className="max-w-screen-xl mx-auto flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-white rounded-full p-1">
              <div className="bg-black rounded-full w-2 h-2"></div>
            </div>
            <h1 className="text-xl font-bold">Gadgets</h1>
          </div>

          {/* Menu */}
          <div className="hidden md:flex space-x-8 text-gray-400">
            <a href="#" className="hover:text-white font-semibold text-white">Home</a>
            <a href="#" className="hover:text-white">Products</a>
            <a href="#" className="hover:text-white">About Us</a>
            <a href="#" className="hover:text-white">Blog</a>
            <a href="#" className="hover:text-white">Contact Us</a>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-6 text-gray-400">
            <FaSearch className="hover:text-white cursor-pointer" />
            <FaUser 
              className="hover:text-white cursor-pointer"
              onClick={handleUserIconClick}
            />
            <FaShoppingBag className="hover:text-white cursor-pointer" />
          </div>
        </div>
      </nav>

      {/* Auth Modal */}
      {showAuthModal && <AuthModal onClose={() => setShowAuthModal(false)} />}
    </>
  );
};

export default Navbar;
