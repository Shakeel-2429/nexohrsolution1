
import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS, CONTACT_INFO } from '../constants';
import { LinkedInIcon, MailIcon, PhoneIcon } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-nexo-deep-blue text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Logo and Info */}
          <div className="space-y-4">
            <Link to="/" className="text-3xl font-bold">
              NEXO<span className="text-nexo-teal">HR</span>
            </Link>
            <p className="text-gray-300">
              Empowering SMEs with professional, reliable, and affordable HR solutions.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-300 hover:text-nexo-teal transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <PhoneIcon className="h-5 w-5 mr-3 text-nexo-teal" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="text-gray-300 hover:text-nexo-teal transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center">
                <MailIcon className="h-5 w-5 mr-3 text-nexo-teal" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-gray-300 hover:text-nexo-teal transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </li>
            </ul>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-300 hover:text-nexo-teal transition-colors"><LinkedInIcon className="h-6 w-6" /></a>
              <a href={`mailto:${CONTACT_INFO.email}`} className="text-gray-300 hover:text-nexo-teal transition-colors"><MailIcon className="h-6 w-6" /></a>
              <a href={`tel:${CONTACT_INFO.phone}`} className="text-gray-300 hover:text-nexo-teal transition-colors"><PhoneIcon className="h-6 w-6" /></a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          <p>Copyright © {new Date().getFullYear()} NEXO HR Solutions. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
