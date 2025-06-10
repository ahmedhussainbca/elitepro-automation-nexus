
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownToggle = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    {
      name: 'About Us',
      path: '/about',
      dropdown: [
        { name: 'Vision', path: '/about#vision' },
        { name: 'Team', path: '/about#team' }
      ]
    },
    { name: 'Industry', path: '/industry' },
    {
      name: 'Services',
      path: '/services',
      dropdown: [
        { name: 'PLC Programming', path: '/services#plc' },
        { name: 'SCADA', path: '/services#scada' },
        { name: 'HMI', path: '/services#hmi' },
        { name: 'Vision Systems', path: '/services#vision' },
        { name: 'Conveyor Systems', path: '/services#conveyor' }
      ]
    },
    {
      name: 'Products',
      path: '/products',
      dropdown: [
        { name: 'Siemens PLC', path: '/products#siemens' },
        { name: 'Mitsubishi PLC', path: '/products#mitsubishi' },
        { name: 'HMIs', path: '/products#hmis' },
        { name: 'Control Panels', path: '/products#panels' }
      ]
    },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-primary/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-primary font-bold text-xl">E</span>
            </div>
            <div>
              <h1 className="text-white font-bold text-xl">Elitepro</h1>
              <p className="text-accent text-xs">Engineering & Automation</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.path}
                  className={`flex items-center space-x-1 text-white hover:text-accent transition-colors duration-200 ${
                    location.pathname === item.path ? 'text-accent' : ''
                  }`}
                  onMouseEnter={() => item.dropdown && setOpenDropdown(item.name)}
                >
                  <span>{item.name}</span>
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </Link>
                
                {item.dropdown && (
                  <div
                    className={`absolute top-full left-0 w-48 bg-white shadow-lg rounded-lg py-2 mt-2 transform transition-all duration-200 ${
                      openDropdown === item.name
                        ? 'opacity-100 visible translate-y-0'
                        : 'opacity-0 invisible -translate-y-2'
                    }`}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {item.dropdown.map((dropItem) => (
                      <Link
                        key={dropItem.name}
                        to={dropItem.path}
                        className="block px-4 py-2 text-primary hover:bg-accent/10 hover:text-accent transition-colors duration-200"
                      >
                        {dropItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <button className="lg:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
