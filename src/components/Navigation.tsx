import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const { user } = useAuth();

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine scroll direction
      if (window.scrollY > lastScrollY) {
        setScrollDirection('down');
      } else if (window.scrollY < lastScrollY) {
        setScrollDirection('up');
      }
      lastScrollY = window.scrollY;
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

  // Solid blue for enroll button
  const enrollButtonClass =
    "bg-[#4DA2FF] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#358be0] transition-colors duration-200";

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
          {/* Logo and Brand Text */}
          <div className="flex items-center">
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
            {/* Animated Brand Text */}
            <AnimatePresence>
              {scrollDirection !== 'down' && (
                <motion.span
                  key="suihub-africa"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35, type: "tween" }}
                  className="ml-3 text-xl font-semibold text-[#FFFFFF] select-none hidden sm:inline-block"
                  style={{ whiteSpace: 'nowrap' }}
                >
                  Sui Hub Africa
                </motion.span>
              )}
            </AnimatePresence>
          </div>

          {/* Centered Nav Items - Hidden on mobile */}
          <div className="flex-1 flex justify-center items-center">
            <div className="hidden md:flex items-center space-x-8">
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

          {/* Desktop Right: Enroll only */}
          <div className="hidden md:flex items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#apply')}
              className={enrollButtonClass}
            >
              Enroll
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white"
            aria-label="Open navigation menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu as a bar */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-gray-900/95 backdrop-blur-md rounded-lg mt-2 px-0 py-2"
          >
            <div className="flex flex-row justify-center items-center space-x-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="flex items-center text-gray-300 hover:text-white px-4 py-2 transition-colors duration-200 font-medium text-lg"
                >
                  {item.label}
                  <ChevronDown className="w-4 h-4 text-white ml-2" />
                </button>
              ))}
              <button
                onClick={() => scrollToSection('#apply')}
                className={`${enrollButtonClass} ml-2`}
              >
                Enroll
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;