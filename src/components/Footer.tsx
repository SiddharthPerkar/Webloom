import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">The Webloom</h3>
            <p className="text-gray-400">
              Transforming digital experiences with innovative solutions.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail size={20} className="mr-2" />
                <span>thewebloom7@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone size={20} className="mr-2" />
                <span>+91 866 850 0533</span>
              </div>
              <div className="flex items-center">
                <MapPin size={20} className="mr-2" />
                <span>Nashik, India</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/services" className="hover:text-blue-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-blue-400 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/team" className="hover:text-blue-400 transition-colors">
                  Our Team
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} The Webloom. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;