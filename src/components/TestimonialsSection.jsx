import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const intervalRef = useRef(null);
  
  const testimonials = [
    {
      name: "Rahul Sharma",
      position: "Student, IIT Bombay",
      text: "Lanos's gamified learning platform completely transformed my approach to learning complex programming concepts. The interactive challenges and real-world applications made it engaging and effective.",
      image: "/src/assets/images/testimonial1.jpg"
    },
    {
      name: "Priya Patel",
      position: "HR Director, TechSolutions India",
      text: "We partnered with Lanos for our employee training program, and the results have been outstanding. Their customized curriculum and innovative teaching methods have significantly improved our team's technical capabilities.",
      image: "/src/assets/images/testimonial2.jpg"
    },
    {
      name: "Dr. Amit Kumar",
      position: "Professor, Delhi University",
      text: "The curriculum design services provided by Lanos have helped us modernize our computer science program. Their deep understanding of industry needs and educational methodologies is impressive.",
      image: "/src/assets/images/testimonial3.jpg"
    }
  ];

  useEffect(() => {
    // Auto-rotate testimonials
    intervalRef.current = setInterval(() => {
      nextTestimonial();
    }, 5000);
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentIndex]);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section id="testimonials" style={{ padding: '8rem 0', backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
      <div className="container">
        <h2 className="section-title">Building Trust</h2>
        
        <div style={{ 
          position: 'relative',
          maxWidth: '900px',
          margin: '4rem auto 0',
          height: '350px'
        }}>
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <div style={{
                backgroundColor: 'rgba(30, 30, 30, 0.6)',
                backdropFilter: 'blur(10px)',
                borderRadius: '10px',
                padding: '3rem',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                position: 'relative'
              }}>
                <FontAwesomeIcon 
                  icon={faQuoteLeft} 
                  style={{ 
                    fontSize: '3rem', 
                    color: 'rgba(0, 194, 255, 0.2)',
                    position: 'absolute',
                    top: '2rem',
                    left: '2rem'
                  }} 
                />
                
                <p style={{ 
                  fontSize: '1.2rem', 
                  lineHeight: '1.8',
                  marginBottom: '2rem',
                  zIndex: 1
                }}>
                  "{testimonials[currentIndex].text}"
                </p>
                
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  marginTop: 'auto'
                }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(0, 194, 255, 0.2)',
                    marginRight: '1rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'hidden'
                  }}>
                    {/* Placeholder for testimonial image */}
                    <span style={{ 
                      fontSize: '1.5rem', 
                      fontWeight: 'bold',
                      color: 'var(--accent-color)'
                    }}>
                      {testimonials[currentIndex].name.charAt(0)}
                    </span>
                  </div>
                  
                  <div>
                    <h4 style={{ margin: 0, marginBottom: '0.2rem' }}>
                      {testimonials[currentIndex].name}
                    </h4>
                    <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-color-muted)' }}>
                      {testimonials[currentIndex].position}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation buttons */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevTestimonial}
            style={{
              position: 'absolute',
              left: '-20px',
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: 'white',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              border: 'none',
              cursor: 'pointer',
              zIndex: 2
            }}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextTestimonial}
            style={{
              position: 'absolute',
              right: '-20px',
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: 'white',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              border: 'none',
              cursor: 'pointer',
              zIndex: 2
            }}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </motion.button>
          
          {/* Dots indicator */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            position: 'absolute',
            bottom: '-30px',
            width: '100%',
            gap: '10px'
          }}>
            {testimonials.map((_, index) => (
              <motion.div
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: currentIndex === index ? 'var(--accent-color)' : 'rgba(255, 255, 255, 0.3)',
                  cursor: 'pointer'
                }}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </div>
        
        {/* Team Section */}
        <div style={{ marginTop: '8rem' }}>
          <h3 style={{ 
            fontSize: '1.8rem', 
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
            Meet Our Team
          </h3>
          
          <div className="grid" style={{ 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            {[
              { name: "Aditya Sharma", position: "Founder & CEO", image: "/src/assets/images/team1.jpg" },
              { name: "Neha Gupta", position: "CTO", image: "/src/assets/images/team2.jpg" },
              { name: "Vikram Singh", position: "Head of R&D", image: "/src/assets/images/team3.jpg" },
              { name: "Ananya Patel", position: "Lead EdTech Designer", image: "/src/assets/images/team4.jpg" }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{
                  backgroundColor: 'rgba(30, 30, 30, 0.6)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  height: '100%'
                }}
                whileHover={{
                  y: -10,
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
                }}
              >
                <div style={{
                  height: '250px',
                  backgroundColor: 'rgba(0, 194, 255, 0.1)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  {/* Placeholder for team member image */}
                  <div style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    backgroundColor: index % 2 === 0 ? 'rgba(0, 194, 255, 0.3)' : 'rgba(255, 62, 108, 0.3)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <span style={{ 
                      fontSize: '2.5rem', 
                      fontWeight: 'bold',
                      color: index % 2 === 0 ? 'var(--accent-color)' : 'var(--accent-color-alt)'
                    }}>
                      {member.name.charAt(0)}
                    </span>
                  </div>
                </div>
                
                <div style={{ padding: '1.5rem', textAlign: 'center' }}>
                  <h4 style={{ marginBottom: '0.5rem' }}>{member.name}</h4>
                  <p style={{ color: 'var(--text-color-muted)', margin: 0 }}>{member.position}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;