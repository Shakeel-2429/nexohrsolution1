
import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Button from './Button';
import { NAV_LINKS, CONTACT_INFO } from '../constants';
import { MenuIcon, XIcon } from './Icons';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-shadow duration-300 ${isScrolled ? 'shadow-lg bg-white/95 backdrop-blur-sm' : 'bg-white'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-nexo-deep-blue">
            NEXO<span className="text-nexo-teal">HR</span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-base font-medium transition-colors hover:text-nexo-teal ${isActive ? 'text-nexo-teal' : 'text-nexo-deep-blue'}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button variant="primary" as="a" href={`mailto:${CONTACT_INFO.email}`}>
              Book Free Consultation
            </Button>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-nexo-deep-blue focus:outline-none">
              {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-xl absolute top-full left-0 w-full">
          <nav className="flex flex-col space-y-4 p-6">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-lg font-medium text-center transition-colors hover:text-nexo-teal ${isActive ? 'text-nexo-teal' : 'text-nexo-deep-blue'}`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="pt-4 border-t border-gray-200">
              <Button variant="primary" as="a" href={`mailto:${CONTACT_INFO.email}`} className="w-full">
                Book Free Consultation
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
