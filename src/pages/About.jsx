import { useEffect } from 'react';
import { motion } from 'framer-motion';
import AboutSection from '../components/AboutSection';
import TestimonialsSection from '../components/TestimonialsSection';

const About = () => {
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
        <div className="bg-element bg-element-1" style={{ top: '-50%', right: '-10%' }}></div>
        
        <div className="container">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center' }}
          >
            <h1>About Lanos</h1>
            <p style={{ maxWidth: '700px', margin: '1rem auto 0' }}>
              Learn more about our mission, vision, and the team behind Lanos.
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Main content */}
      <AboutSection />
      
      {/* Vision and Mission details */}
      <section style={{ padding: '5rem 0', backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
        <div className="container">
          <div className="grid" style={{ 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '4rem'
          }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 style={{ marginBottom: '1.5rem' }}>Our Vision</h2>
              <p style={{ marginBottom: '1.5rem' }}>
                Establish Lanos as the global epicenter for EdTech & R&D breakthroughs, catalyzing 25,000 jobs in Sagar, MP by 2027.
              </p>
              <p>
                We envision a future where technology education is accessible to all, regardless of geographical or socioeconomic barriers. Our goal is to create a thriving ecosystem of innovation and learning that benefits students, professionals, and the broader community.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 style={{ marginBottom: '1.5rem' }}>Our Mission</h2>
              <p style={{ marginBottom: '1.5rem' }}>
                Democratize future-ready tech education and deliver transformative research outcomes.
              </p>
              <p>
                We are committed to breaking down barriers to technology education through innovative learning platforms and methodologies. Simultaneously, our R&D initiatives aim to push the boundaries of what's possible in educational technology, creating solutions that address real-world challenges.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* History timeline */}
      <section style={{ padding: '8rem 0' }}>
        <div className="container">
          <h2 className="section-title">Our Journey</h2>
          
          <div style={{ 
            maxWidth: '800px', 
            margin: '4rem auto 0',
            position: 'relative'
          }}>
            {/* Timeline line */}
            <div style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '2px',
              height: '100%',
              backgroundColor: 'rgba(0, 194, 255, 0.3)'
            }}></div>
            
            {/* Timeline items */}
            {[
              { 
                year: '2024', 
                title: 'Foundation', 
                description: 'Lanos was founded in Sagar, MP with a vision to transform technology education and research.' 
              },
              { 
                year: '2024', 
                title: 'First Product Launch', 
                description: 'Launched our gamified learning platform, providing interactive tech education experiences.' 
              },
              { 
                year: '2024', 
                title: 'R&D Initiatives', 
                description: 'Started development on Smart Goggle and Project Aurora, our flagship research projects.' 
              },
              { 
                year: '2025', 
                title: 'Future Growth', 
                description: 'Projected expansion of services and research initiatives to reach broader audiences.' 
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                style={{
                  display: 'flex',
                  justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
                  marginBottom: '4rem',
                  position: 'relative'
                }}
              >
                <div style={{
                  width: '45%',
                  backgroundColor: 'rgba(30, 30, 30, 0.6)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '10px',
                  padding: '2rem',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  position: 'relative'
                }}>
                  {/* Timeline dot */}
                  <div style={{
                    position: 'absolute',
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--accent-color)',
                    top: '50%',
                    [index % 2 === 0 ? 'right' : 'left']: '-40px',
                    transform: 'translateY(-50%)',
                    zIndex: 2
                  }}></div>
                  
                  {/* Year badge */}
                  <div style={{
                    display: 'inline-block',
                    padding: '0.3rem 1rem',
                    backgroundColor: 'rgba(0, 194, 255, 0.1)',
                    borderRadius: '20px',
                    marginBottom: '1rem',
                    fontWeight: 500
                  }}>
                    {item.year}
                  </div>
                  
                  <h3 style={{ marginBottom: '1rem' }}>{item.title}</h3>
                  <p style={{ margin: 0 }}>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <TestimonialsSection />
    </motion.div>
  );
};

export default About;