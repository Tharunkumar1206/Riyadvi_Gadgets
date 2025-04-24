import React, { useState } from 'react';
import axios from 'axios';

const AuthModal = ({ onClose }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = isSignUp ? '/api/users/signup' : '/api/users/signin';
      const payload = isSignUp 
        ? formData 
        : { email: formData.email, password: formData.password };

      const response = await axios.post(url, payload);
      alert(response.data || "Success");
      onClose();
    } catch (error) {
      alert(error.response?.data || "Error occurred");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg w-96 relative">
        <button 
          className="absolute top-2 right-4 text-black text-2xl font-bold"
          onClick={onClose}
        >×</button>

        <h2 className="text-2xl font-bold mb-6 text-center">
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignUp && (
            <input 
              type="text" 
              name="name" 
              placeholder="Name" 
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none"
            />
          )}
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none"
          />
          <input 
            type="password" 
            name="password" 
            placeholder="Password" 
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none"
          />

          <button 
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
          >
            {isSignUp ? 'Create Account' : 'Login'}
          </button>
        </form>

        <p className="mt-4 text-center">
          {isSignUp ? 'Already have an account?' : "Don't have an account?"} 
          <span 
            className="text-blue-600 cursor-pointer ml-2"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthModal;
