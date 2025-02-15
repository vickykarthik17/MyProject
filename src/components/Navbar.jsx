import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, Heart, User } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Find a Pet', path: '/pets' },
    { name: 'How to Adopt', path: '/adopt' },
    { name: 'Success Stories', path: '/stories' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
      isScrolled ? 'shadow-md' : ''
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link relative py-2 ${
                  isActive(link.path)
                    ? 'text-orange-500 font-medium'
                    : 'text-gray-600 hover:text-orange-500'
                } transition-colors duration-200`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 rounded-full"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-600 hover:text-orange-500 transition-colors p-2">
              <Search size={20} />
            </button>
            <button className="text-gray-600 hover:text-orange-500 transition-colors p-2">
              <Heart size={20} />
            </button>
            <button className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
              <User size={20} />
              <span>Sign In</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-600 hover:text-gray-900 p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="space-y-2">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-2 rounded-lg ${
                    isActive(link.path)
                      ? 'text-orange-500 bg-orange-50 font-medium'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            {/* Mobile Actions */}
            <div className="flex items-center space-x-4 mt-4 pt-4 border-t border-gray-100 px-4">
              <button className="text-gray-600 hover:text-orange-500 transition-colors p-2">
                <Search size={20} />
              </button>
              <button className="text-gray-600 hover:text-orange-500 transition-colors p-2">
                <Heart size={20} />
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                <User size={20} />
                <span>Sign In</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;