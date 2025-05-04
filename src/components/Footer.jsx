import React from 'react';
import { Facebook, MessageCircle, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#1a1a1a] py-12">
      <div className="container mx-auto px-4">
        {/* Contact Information */}
        <div className="text-center text-white mb-6">
          <p className="text-lg">
            Pune, India | Phone: +91 88550 75626 | Email: kafiladventures@gmail.com
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="text-white hover:text-gray-300">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <MessageCircle className="w-6 h-6" />
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <Instagram className="w-6 h-6" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-white">
          <p className="text-lg">
            Copyright © 2025 Kafila Adventures
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;