import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, X, Menu } from 'lucide-react'; // ADDED: X and Menu icons
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // ADDED: State for mobile menu
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ADDED: Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const handleDropdownToggle = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Industry', path: '/industry' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen // MODIFIED: Keep background when mobile menu is open
          ? 'bg-primary/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* ... Your Logo and Title code remains the same ... */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-primary font-bold text-xl">E</span>
            </div>
            <div>
              <h1 className="text-white font-bold text-xl">Elitepro</h1>
              <p className="text-accent text-xs">Engineering & Automation</p>
            </div>
          </Link>


          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* ... Your desktop navigation code remains the same ... */}
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {/* ... This part is unchanged ... */}
              </div>
            ))}
          </nav>

          {/* MODIFIED: Mobile Menu Button */}
          <button
            className="lg:hidden text-white z-50" // z-50 ensures it's on top
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} // Toggles the mobile menu state
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" /> // Show 'X' icon when menu is open
            ) : (
              <Menu className="w-6 h-6" /> // Show hamburger icon when closed
            )}
          </button>
        </div>

        {/* ADDED: Mobile Menu Panel */}
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden pt-8 pb-4"
          >
            <div className="flex flex-col items-center space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-lg font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-accent'
                      : 'text-white hover:text-accent'
                  }`}
                  // The useEffect hook now handles closing the menu
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;