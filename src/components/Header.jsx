import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Research', path: '/research' },
    { name: 'Contact', path: '/contact' }
  ];

  const headerVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  const navItemVariants = {
    initial: { y: -20, opacity: 0 },
    animate: (i) => ({ 
      y: 0, 
      opacity: 1, 
      transition: { 
        delay: 0.1 * i,
        duration: 0.4
      } 
    })
  };

  return (
    <motion.header 
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      variants={headerVariants}
      initial="initial"
      animate="animate"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        padding: '1rem 0',
        zIndex: 100,
        backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.9)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        transition: 'all 0.3s ease',
        borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center' }}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 style={{ margin: 0, fontSize: '1.8rem', fontWeight: 700 }}>
              <span className="highlight">Lanos</span>
            </h2>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              custom={index}
              variants={navItemVariants}
              initial="initial"
              animate="animate"
              style={{ display: { xs: 'none', md: 'block' } }}
            >
              <Link 
                to={item.path} 
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                style={{
                  color: 'var(--text-color)',
                  fontWeight: 500,
                  position: 'relative',
                  padding: '0.5rem 0'
                }}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div 
                    layoutId="underline"
                    style={{
                      position: 'absolute',
                      bottom: '-2px',
                      left: 0,
                      right: 0,
                      height: '2px',
                      backgroundColor: 'var(--accent-color)'
                    }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6, duration: 0.3 }}
          >
            <Link to="/contact" className="btn btn-primary" style={{ marginLeft: '1rem' }}>
              Get Started
            </Link>
          </motion.div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="mobile-menu-btn" style={{ display: { md: 'none' } }}>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ 
              background: 'transparent', 
              border: 'none', 
              color: 'var(--text-color)',
              fontSize: '1.5rem'
            }}
          >
            <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div 
        className="mobile-nav"
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: mobileMenuOpen ? 'auto' : 0,
          opacity: mobileMenuOpen ? 1 : 0,
          display: mobileMenuOpen ? 'flex' : 'none'
        }}
        transition={{ duration: 0.3 }}
        style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          width: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.95)',
          backdropFilter: 'blur(10px)',
          flexDirection: 'column',
          padding: mobileMenuOpen ? '1rem 0' : 0,
          overflow: 'hidden'
        }}
      >
        {navItems.map((item, index) => (
          <Link 
            key={item.name}
            to={item.path} 
            className={`mobile-nav-link ${location.pathname === item.path ? 'active' : ''}`}
            style={{
              color: 'var(--text-color)',
              padding: '1rem 2rem',
              borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
              fontWeight: location.pathname === item.path ? 600 : 400
            }}
          >
            {item.name}
          </Link>
        ))}
        <div style={{ padding: '1rem 2rem' }}>
          <Link to="/contact" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>
            Get Started
          </Link>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;