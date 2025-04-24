import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaMediumM } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-bold text-white flex items-center mb-4">
            <span className="bg-white text-black rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-2">G</span>
            Gadgets
          </h2>
          <p className="text-sm leading-relaxed">
            Cras gravida bibendum dolor eu varius morbi fermentum velit eget vehicula lorem sodales donec quis volutpat orci.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="bg-white text-black rounded-full p-2"><FaFacebookF /></a>
            <a href="#" className="bg-white text-black rounded-full p-2"><FaTwitter /></a>
            <a href="#" className="bg-white text-black rounded-full p-2"><FaLinkedinIn /></a>
            <a href="#" className="bg-white text-black rounded-full p-2"><FaMediumM /></a>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">USEFUL LINKS</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">Products</a></li>
            <li><a href="#" className="hover:underline">Login</a></li>
            <li><a href="#" className="hover:underline">Sign Up</a></li>
          </ul>
        </div>

        {/* Custom Area */}
        <div>
          <h3 className="text-white font-semibold mb-4">CUSTOM AREA</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">My Account</a></li>
            <li><a href="#" className="hover:underline">Tracking List</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Orders</a></li>
            <li><a href="#" className="hover:underline">My Cart</a></li>
          </ul>
        </div>

        {/* More Information */}
        <div>
          <h3 className="text-white font-semibold mb-4">MORE INFORMATION</h3>
          <p className="text-sm leading-relaxed mb-6">
            Aliquam faucibus, odio nec commodo aliquam, neque felis placerat dui, a porta ante lectus
          </p>
          {/* <div className="flex space-x-4">
            <img src="/visa.png" alt="Visa" className="h-6" />
            <img src="/amex.png" alt="American Express" className="h-6" />
            <img src="/mastercard.png" alt="MasterCard" className="h-6" />
            <img src="/paypal.png" alt="PayPal" className="h-6" />
          </div> */}
        </div>
      <span className="text-start flex item-center mt-10 text-sm text-gray-500 " > Copyright © 2025 - WordPress Theme by CreativeThemes</span>  
      </div>
      {/* <div className="text-start flex item-center mx-8 text-sm text-gray-500 mt-20">
        Copyright © 2025 - WordPress Theme by CreativeThemes
      </div> */}
    </footer>
  );
};

export default Footer;
