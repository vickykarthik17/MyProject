import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin, 
  Dog, 
  Heart,
  ArrowRight 
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Dog className="text-orange-400" size={28} />
              <h3 className="text-xl font-bold text-white">PetConnect</h3>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Making tails wag and hearts purr since 2020. We're dedicated to 
              connecting loving families with pets who need a forever home.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-orange-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-orange-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-orange-400 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/pets" className="flex items-center gap-2 hover:text-orange-400 transition-colors group">
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  Available Pets
                </Link>
              </li>
              <li>
                <Link to="/adopt" className="flex items-center gap-2 hover:text-orange-400 transition-colors group">
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  Adoption Process
                </Link>
              </li>
              <li>
                <Link to="/stories" className="flex items-center gap-2 hover:text-orange-400 transition-colors group">
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  Success Stories
                </Link>
              </li>
              <li>
                <Link to="/volunteer" className="flex items-center gap-2 hover:text-orange-400 transition-colors group">
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  Volunteer
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-orange-400 mt-1" size={18} />
                <span>Telangana , Hyderabad</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-orange-400" size={18} />
                <span>1234567890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-orange-400" size={18} />
                <span>Team Furtech</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Stay Updated</h4>
            <p className="text-sm mb-4">Join our newsletter for pet care tips and adoption updates.</p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-gray-800 rounded-md focus:ring-2 focus:ring-orange-400 focus:outline-none"
              />
              <button className="w-full bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm">
          <p>
            © {currentYear} PetConnect. All rights reserved. Made with <Heart size={14} className="inline text-orange-400" /> for pets.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
