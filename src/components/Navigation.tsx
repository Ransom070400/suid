import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, LogIn, ChevronDown } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Program', href: '#curriculum' },
    { label: 'Mentors', href: '#mentors' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-800'
          : 'bg-gray-900/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo as a link */}
          <a
            href="/"
            className="flex items-center"
            aria-label="Go to homepage"
          >
            <img
              src="https://cocozqaswhyugfbilbxk.supabase.co/storage/v1/object/public/suihub//Sui_Symbol_White.png"
              alt="Sui Hub Logo"
              className="w-10 h-10 object-contain"
            />
          </a>

          {/* Centered Nav Items with Inline White Arrows */}
          <div className="flex-1 flex justify-center items-center">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="flex items-center text-gray-300 hover:text-white transition-colors duration-200 font-medium text-lg"
                >
                  {item.label}
                  <ChevronDown className="w-4 h-4 text-white ml-2" />
                </button>
              ))}
            </div>
          </div>

          {/* Desktop Right: Login/Enroll */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('#apply')}
                className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-shadow duration-200"
              >
                Enroll
              </motion.button>
            ) : (
              <>
                <motion.a
                  href="/login"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <LogIn className="w-4 h-4" />
                  <span>Login</span>
                </motion.a>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('#apply')}
                  className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-shadow duration-200"
                >
                  Enroll
                </motion.button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-gray-900/95 backdrop-blur-md rounded-lg mt-2 p-4"
          >
            <div className="flex flex-col items-center space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="flex items-center w-full justify-center text-gray-300 hover:text-white py-2 transition-colors duration-200 font-medium text-lg"
                >
                  {item.label}
                  <ChevronDown className="w-4 h-4 text-white ml-2" />
                </button>
              ))}
            </div>

            <div className="mt-6 flex flex-col items-center space-y-2">
              {user ? (
                <button
                  onClick={() => scrollToSection('#apply')}
                  className="block w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-6 py-2 rounded-full font-semibold text-center hover:shadow-lg transition-shadow duration-200"
                >
                  Enroll
                </button>
              ) : (
                <>
                  <a
                    href="/login"
                    className="block w-full text-gray-300 hover:text-white py-2 text-center transition-colors duration-200"
                  >
                    Login
                  </a>
                  <button
                    onClick={() => scrollToSection('#apply')}
                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-shadow duration-200"
                  >
                    Enroll
                  </button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;