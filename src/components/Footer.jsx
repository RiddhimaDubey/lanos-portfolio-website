import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
      style={{
        backgroundColor: '#080808',
        color: 'var(--text-color)',
        padding: '5rem 0 2rem',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)'
      }}
    >
      <div className="container">
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>
          {/* Company Info */}
          <motion.div variants={itemVariants}>
            <h3>Lanos</h3>
            <p>Agile EdTech & R&D Startup transforming technology education and innovation.</p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon hoverable">
                <FontAwesomeIcon icon={faTwitter} style={socialIconStyle} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon hoverable">
                <FontAwesomeIcon icon={faLinkedin} style={socialIconStyle} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon hoverable">
                <FontAwesomeIcon icon={faInstagram} style={socialIconStyle} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon hoverable">
                <FontAwesomeIcon icon={faGithub} style={socialIconStyle} />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3>Quick Links</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.8rem' }}>
                <Link to="/" className="animated-link">Home</Link>
              </li>
              <li style={{ marginBottom: '0.8rem' }}>
                <Link to="/about" className="animated-link">About Us</Link>
              </li>
              <li style={{ marginBottom: '0.8rem' }}>
                <Link to="/services" className="animated-link">Services</Link>
              </li>
              <li style={{ marginBottom: '0.8rem' }}>
                <Link to="/research" className="animated-link">Research</Link>
              </li>
              <li style={{ marginBottom: '0.8rem' }}>
                <Link to="/contact" className="animated-link">Contact</Link>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h3>Our Services</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.8rem' }}>
                <Link to="/services" className="animated-link">Gamified Learning Platform</Link>
              </li>
              <li style={{ marginBottom: '0.8rem' }}>
                <Link to="/services" className="animated-link">Enterprise Training</Link>
              </li>
              <li style={{ marginBottom: '0.8rem' }}>
                <Link to="/services" className="animated-link">Consulting Services</Link>
              </li>
              <li style={{ marginBottom: '0.8rem' }}>
                <Link to="/services" className="animated-link">Curriculum Design</Link>
              </li>
              <li style={{ marginBottom: '0.8rem' }}>
                <Link to="/research" className="animated-link">R&D Innovations</Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3>Contact Us</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: 'var(--accent-color)' }} />
                <span>Sagar, Madhya Pradesh, India</span>
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <FontAwesomeIcon icon={faPhone} style={{ color: 'var(--accent-color)' }} />
                <a href="tel:+919109279790" className="animated-link">+91 91092 79790</a>
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <FontAwesomeIcon icon={faEnvelope} style={{ color: 'var(--accent-color)' }} />
                <a href="mailto:info@lanos.tech" className="animated-link">info@lanos.tech</a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div 
          variants={itemVariants}
          style={{ 
            marginTop: '4rem', 
            paddingTop: '2rem', 
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          <p style={{ margin: 0 }}>© {currentYear} Lanos. All rights reserved.</p>
          <div>
            <Link to="/privacy-policy" className="animated-link" style={{ marginRight: '1.5rem' }}>Privacy Policy</Link>
            <Link to="/terms" className="animated-link">Terms of Service</Link>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

const socialIconStyle = {
  fontSize: '1.2rem',
  color: 'var(--text-color)',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  width: '40px',
  height: '40px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '50%',
  transition: 'all 0.3s ease'
};

export default Footer;