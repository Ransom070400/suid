import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, LogIn } from 'lucide-react';
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
    { label: 'Mentors', href: '#mentors' },
    { label: 'Apply', href: '#apply' }
  ];

  const scrollToSection = (href: string) => {
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
          ? 'bg-gray-900/80 backdrop-blur-md border-b border-gray-800' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="text-white font-bold text-lg">Sui Hub Africa</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
            
            {user ? (
              <motion.a
                href="/dashboard"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-shadow duration-200"
              >
                Dashboard
              </motion.a>
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
                  Apply Now
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
            className="md:hidden bg-gray-800/90 backdrop-blur-md rounded-lg mt-2 p-4"
          >
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left text-gray-300 hover:text-white py-2 transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
            
            {user ? (
              <a
                href="/dashboard"
                className="block w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-6 py-2 rounded-full font-semibold mt-4 text-center hover:shadow-lg transition-shadow duration-200"
              >
                Dashboard
              </a>
            ) : (
              <>
                <a
                  href="/login"
                  className="block w-full text-gray-300 hover:text-white py-2 transition-colors duration-200"
                >
                  Login
                </a>
                <button
                  onClick={() => scrollToSection('#apply')}
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-6 py-2 rounded-full font-semibold mt-4 hover:shadow-lg transition-shadow duration-200"
                >
                  Apply Now
                </button>
              </>
            )}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;