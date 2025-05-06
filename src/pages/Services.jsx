import { useEffect } from 'react';
import { motion } from 'framer-motion';
import ServicesSection from '../components/ServicesSection';
import BenefitsSection from '../components/BenefitsSection';

const Services = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Page header */}
      <div style={{
        height: '40vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
      }}>
        <div className="bg-element bg-element-2" style={{ bottom: '-50%', left: '-10%' }}></div>
        
        <div className="container">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center' }}
          >
            <h1>Our Services</h1>
            <p style={{ maxWidth: '700px', margin: '1rem auto 0' }}>
              Explore our comprehensive range of EdTech services and solutions.
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Main content */}
      <ServicesSection />
      
      {/* Service details */}
      <section style={{ padding: '8rem 0' }}>
        <div className="container">
          <h2 className="section-title">Our Core Services</h2>
          
          {/* Service 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '3rem',
              alignItems: 'center',
              marginBottom: '6rem'
            }}
          >
            <div>
              <div style={{
                backgroundColor: 'rgba(30, 30, 30, 0.6)',
                backdropFilter: 'blur(10px)',
                borderRadius: '10px',
                overflow: 'hidden',
                height: '300px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'rgba(0, 194, 255, 0.1)' // Changed to 'background' to avoid duplicate
              }}>
                <h3 style={{ color: 'var(--accent-color)' }}>Gamified Learning Platform</h3>
              </div>
            </div>
            
            <div>
              <h3 style={{ marginBottom: '1.5rem' }}>Gamified Learning Platform</h3>
              <p style={{ marginBottom: '1rem' }}>
                Our flagship product transforms traditional learning into an engaging, game-based experience that makes complex technical concepts accessible and enjoyable.
              </p>
              <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>Interactive coding challenges</li>
                <li style={{ marginBottom: '0.5rem' }}>Progress tracking and achievements</li>
                <li style={{ marginBottom: '0.5rem' }}>Peer competition and collaboration</li>
                <li style={{ marginBottom: '0.5rem' }}>Real-world project simulations</li>
                <li>Adaptive learning paths</li>
              </ul>
              <motion.button 
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
          
          {/* Service 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '3rem',
              alignItems: 'center',
              marginBottom: '6rem'
            }}
          >
            <div style={{ order: { xs: 1, md: 2 } }}>
              <div style={{
                backgroundColor: 'rgba(30, 30, 30, 0.6)',
                backdropFilter: 'blur(10px)',
                borderRadius: '10px',
                overflow: 'hidden',
                height: '300px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'rgba(255, 62, 108, 0.1)' // Changed to 'background' to avoid duplicate
              }}>
                <h3 style={{ color: 'var(--accent-color-alt)' }}>Enterprise Training Solutions</h3>
              </div>
            </div>
            
            <div style={{ order: { xs: 2, md: 1 } }}>
              <h3 style={{ marginBottom: '1.5rem' }}>Enterprise Training Solutions</h3>
              <p style={{ marginBottom: '1rem' }}>
                Customized training programs designed to upskill your workforce with the latest technology competencies, tailored to your organization's specific needs.
              </p>
              <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>Customized learning paths</li>
                <li style={{ marginBottom: '0.5rem' }}>Team-based challenges</li>
                <li style={{ marginBottom: '0.5rem' }}>Progress analytics and reporting</li>
                <li style={{ marginBottom: '0.5rem' }}>Integration with HR systems</li>
                <li>Certification programs</li>
              </ul>
              <motion.button 
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
          
          {/* Service 3 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '3rem',
              alignItems: 'center'
            }}
          >
            <div>
              <div style={{
                backgroundColor: 'rgba(30, 30, 30, 0.6)',
                backdropFilter: 'blur(10px)',
                borderRadius: '10px',
                overflow: 'hidden',
                height: '300px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'rgba(0, 194, 255, 0.1)' // Changed to 'background' to avoid duplicate
              }}>
                <h3 style={{ color: 'var(--accent-color)' }}>Consulting & Curriculum Design</h3>
              </div>
            </div>
            
            <div>
              <h3 style={{ marginBottom: '1.5rem' }}>Consulting & Curriculum Design</h3>
              <p style={{ marginBottom: '1rem' }}>
                Expert guidance on educational technology implementation and curriculum development for modern learning needs, helping institutions stay at the cutting edge.
              </p>
              <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>EdTech strategy development</li>
                <li style={{ marginBottom: '0.5rem' }}>Curriculum modernization</li>
                <li style={{ marginBottom: '0.5rem' }}>Technology integration planning</li>
                <li style={{ marginBottom: '0.5rem' }}>Faculty training programs</li>
                <li>Learning outcome assessment</li>
              </ul>
              <motion.button 
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
      
      <BenefitsSection />
    </motion.div>
  );
};

export default Services;