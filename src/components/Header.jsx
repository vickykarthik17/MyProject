import React from 'react';
import { Dog, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-orange-50 to-rose-50 py-4 border-b border-orange-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Dog className="text-orange-600" size={32} />
            <div>
              <Link to="/" className="text-3xl font-semibold text-gray-800 hover:text-orange-600 transition-colors">
                PetConnect
              </Link>
              <p className="text-sm text-gray-600">Find your furry friend</p>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-2 text-gray-600">
              <Phone size={20} className="text-orange-500" />
              <span className="font-medium">(123) 456-7890</span>
            </div>
            <button className="bg-orange-500 text-white px-6 py-2.5 rounded-lg hover:bg-orange-600 transition-colors shadow-sm">
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;