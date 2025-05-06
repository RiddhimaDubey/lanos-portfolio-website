import { useEffect } from 'react';
import { motion } from 'framer-motion';

const Research = () => {
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
        <div className="bg-element bg-element-1" style={{ top: '-30%', right: '-5%' }}></div>
        <div className="bg-element bg-element-2" style={{ bottom: '-30%', left: '-5%' }}></div>
        
        <div className="container">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center' }}
          >
            <h1>R&D Innovations</h1>
            <p style={{ maxWidth: '700px', margin: '1rem auto 0' }}>
              Discover our cutting-edge research projects that are shaping the future of technology education.
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Research overview */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}
          >
            <h2 style={{ marginBottom: '1.5rem' }}>Pioneering the Future of EdTech</h2>
            <p style={{ fontSize: '1.1rem' }}>
              At Lanos, research and development is at the core of our mission. We're committed to pushing the boundaries of what's possible in educational technology, creating innovative solutions that transform how people learn and interact with technology.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Smart Goggle project */}
      <section style={{ padding: '5rem 0', backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '4rem',
            alignItems: 'center'
          }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div style={{
                backgroundColor: 'rgba(0, 194, 255, 0.1)',
                borderRadius: '10px',
                height: '350px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden'
              }}>
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotateY: [0, 10, 0]
                  }}
                  transition={{ 
                    repeat: Infinity,
                    duration: 5,
                    ease: "easeInOut"
                  }}
                  style={{
                    padding: '2rem',
                    textAlign: 'center'
                  }}
                >
                  <h2 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>Smart Goggle</h2>
                  <p>Revolutionary AR Learning Device</p>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 style={{ marginBottom: '1.5rem' }}>Smart Goggle</h2>
              <p style={{ marginBottom: '1.5rem' }}>
                Our flagship research project, Smart Goggle, is a revolutionary wearable technology that enhances learning through augmented reality, providing immersive educational experiences.
              </p>
              
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Key Features</h3>
              <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>Immersive AR learning environments</li>
                <li style={{ marginBottom: '0.5rem' }}>Real-time data visualization</li>
                <li style={{ marginBottom: '0.5rem' }}>Interactive 3D models for complex concepts</li>
                <li style={{ marginBottom: '0.5rem' }}>Collaborative learning spaces</li>
                <li>Adaptive content based on user progress</li>
              </ul>
              
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Development Status</h3>
              <p>
                Currently in prototype phase, with initial testing showing promising results in enhancing learning outcomes across various technical subjects.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Project Aurora */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '4rem',
            alignItems: 'center'
          }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{ order: { xs: 1, md: 2 } }}
            >
              <div style={{
                backgroundColor: 'rgba(255, 62, 108, 0.1)',
                borderRadius: '10px',
                height: '350px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden'
              }}>
                <motion.div
                  animate={{ 
                    scale: [1, 1.05, 1],
                    opacity: [1, 0.8, 1]
                  }}
                  transition={{ 
                    repeat: Infinity,
                    duration: 4,
                    ease: "easeInOut"
                  }}
                  style={{
                    padding: '2rem',
                    textAlign: 'center'
                  }}
                >
                  <h2 style={{ color: 'var(--accent-color-alt)', marginBottom: '1rem' }}>Project Aurora</h2>
                  <p>AI-Driven Adaptive Learning Platform</p>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{ order: { xs: 2, md: 1 } }}
            >
              <h2 style={{ marginBottom: '1.5rem' }}>Project Aurora</h2>
              <p style={{ marginBottom: '1.5rem' }}>
                Project Aurora is an advanced AI-driven learning platform that adapts to individual learning styles and provides personalized education paths, making learning more efficient and effective.
              </p>
              
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Key Features</h3>
              <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>AI-powered learning path customization</li>
                <li style={{ marginBottom: '0.5rem' }}>Real-time skill gap analysis</li>
                <li style={{ marginBottom: '0.5rem' }}>Predictive performance analytics</li>
                <li style={{ marginBottom: '0.5rem' }}>Natural language processing for content interaction</li>
                <li>Intelligent content recommendation engine</li>
              </ul>
              
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Development Status</h3>
              <p>
                Currently in alpha testing with select educational institutions, with full beta release planned for late 2024.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Research partnerships */}
      <section style={{ padding: '5rem 0', backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
        <div className="container">
          <h2 className="section-title">Research Partnerships</h2>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ maxWidth: '800px', margin: '0 auto 3rem', textAlign: 'center' }}
          >
            <p>
              We believe in the power of collaboration to drive innovation. Our research initiatives are strengthened through partnerships with academic institutions, industry leaders, and technology pioneers.
            </p>
          </motion.div>
          
          <div className="grid" style={{ 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            {[
              "Academic Institutions",
              "Technology Companies",
              "Research Organizations",
              "Government Agencies"
            ].map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{
                  backgroundColor: 'rgba(30, 30, 30, 0.6)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '10px',
                  padding: '2rem',
                  textAlign: 'center',
                  border: '1px solid rgba(255, 255, 255, 0.05)'
                }}
                whileHover={{
                  y: -10,
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
                }}
              >
                <h3>{partner}</h3>
              </motion.div>
            ))}
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <motion.button
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Become a Research Partner
            </motion.button>
          </div>
        </div>
      </section>
      
      {/* Call to action */}
      <section style={{ padding: '8rem 0' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{
              backgroundColor: 'rgba(30, 30, 30, 0.6)',
              backdropFilter: 'blur(10px)',
              borderRadius: '10px',
              padding: '4rem 2rem',
              textAlign: 'center',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              maxWidth: '900px',
              margin: '0 auto'
            }}
          >
            <h2 style={{ marginBottom: '1.5rem' }}>Interested in Our Research?</h2>
            <p style={{ marginBottom: '2rem', maxWidth: '700px', margin: '0 auto 2rem' }}>
              Whether you're looking to collaborate on research, implement our innovations, or learn more about our projects, we'd love to hear from you.
            </p>
            <motion.button
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}
            >
              Contact Our R&D Team
            </motion.button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Research;