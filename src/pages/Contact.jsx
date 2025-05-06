import { useEffect } from 'react';
import { motion } from 'framer-motion';
import ContactSection from '../components/ContactSection';

const Contact = () => {
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
        <div className="bg-element bg-element-2" style={{ bottom: '-30%', left: '-10%' }}></div>
        
        <div className="container">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center' }}
          >
            <h1>Contact Us</h1>
            <p style={{ maxWidth: '700px', margin: '1rem auto 0' }}>
              Get in touch with our team to learn more about our services or discuss collaboration opportunities.
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Contact section */}
      <ContactSection />
      
      {/* FAQ section */}
      <section style={{ padding: '5rem 0', backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          
          <div style={{ maxWidth: '800px', margin: '3rem auto 0' }}>
            {[
              {
                question: "What services does Lanos offer?",
                answer: "Lanos offers a range of EdTech and R&D services including a gamified learning platform, enterprise training solutions, and consulting & curriculum design. We also conduct research in educational technology with flagship projects like Smart Goggle and Project Aurora."
              },
              {
                question: "How can I partner with Lanos?",
                answer: "We welcome partnerships with academic institutions, technology companies, and research organizations. You can reach out to us through our contact form or directly via email at partnerships@lanos.tech to discuss potential collaboration opportunities."
              },
              {
                question: "Where is Lanos located?",
                answer: "Lanos is headquartered in Sagar, Madhya Pradesh, India. We also collaborate with partners globally through our digital platforms."
              },
              {
                question: "How can educational institutions benefit from Lanos's services?",
                answer: "Educational institutions can benefit from our curriculum modernization services, faculty development programs, research collaboration opportunities, and access to our innovative teaching methodologies and platforms."
              },
              {
                question: "What is the Smart Goggle project?",
                answer: "Smart Goggle is our flagship research project - a revolutionary wearable technology that enhances learning through augmented reality, providing immersive educational experiences with features like real-time data visualization and interactive 3D models."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{
                  backgroundColor: 'rgba(30, 30, 30, 0.6)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '10px',
                  padding: '1.5rem 2rem',
                  marginBottom: '1.5rem',
                  border: '1px solid rgba(255, 255, 255, 0.05)'
                }}
              >
                <h3 style={{ marginBottom: '1rem', fontSize: '1.3rem' }}>{faq.question}</h3>
                <p style={{ margin: 0 }}>{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to action */}
      <section style={{ padding: '5rem 0' }}>
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
            <h2 style={{ marginBottom: '1.5rem' }}>Ready to Transform Your Learning Experience?</h2>
            <p style={{ marginBottom: '2rem', maxWidth: '700px', margin: '0 auto 2rem' }}>
              Join us in our mission to revolutionize technology education and innovation. Let's create the future of learning together.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <motion.button
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule a Demo
              </motion.button>
              <motion.button
                className="btn btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Services
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;