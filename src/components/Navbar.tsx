import React from 'react';
import { Menu, ShoppingCart } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold">MINIMAL</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-900 hover:text-gray-600">Home</a>
            <a href="#products" className="text-gray-900 hover:text-gray-600">Products</a>
            <a href="#about" className="text-gray-900 hover:text-gray-600">About</a>
            <a href="#contact" className="text-gray-900 hover:text-gray-600">Contact</a>
          </div>

          <div className="flex items-center space-x-4">
            <ShoppingCart className="h-6 w-6 text-gray-900 cursor-pointer hover:text-gray-600" />
            <Menu className="h-6 w-6 md:hidden text-gray-900 cursor-pointer hover:text-gray-600" />
          </div>
        </div>
      </div>
    </nav>
  );
}