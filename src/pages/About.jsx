import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faGraduationCap, faHandshake, faFlask, faChevronLeft, faChevronRight, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import ContactSection from '../components/ContactSection';
import AnimatedBackground from '../components/AnimatedBackground';

const About = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  // Testimonial carousel state
  const [[currentTestimonial, direction], setCurrentTestimonial] = useState([0, 0]);
  const testimonials = [
    {
      text: "Lanos Institute has completely transformed our approach to technical training. Their gamified learning platform has increased engagement and knowledge retention among our team by over 40%.",
      author: "Sarah Johnson",
      position: "CTO, TechVision Inc."
    },
    {
      text: "The research collaboration with Lanos has been instrumental in developing our new AI-driven educational tools. Their expertise and innovative thinking have accelerated our product development significantly.",
      author: "Michael Chen",
      position: "Head of Innovation, EduTech Solutions"
    },
    {
      text: "As someone who struggled with traditional learning methods, Lanos' approach was a revelation. Their interactive modules made complex programming concepts accessible and even enjoyable.",
      author: "Priya Sharma",
      position: "Software Engineer & Former Student"
    },
    {
      text: "Partnering with Lanos for our corporate training needs has yielded exceptional results. Our employees are more engaged and better equipped to handle technological challenges.",
      author: "Robert Williams",
      position: "HR Director, Global Systems"
    }
  ];

  const paginate = (newDirection) => {
    const nextIndex = (currentTestimonial + newDirection + testimonials.length) % testimonials.length;
    setCurrentTestimonial([nextIndex, newDirection]);
  };

  const testimonialVariants = {
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
     
      <AnimatedBackground />
      
      {/* Hero Section */}
      <section style={{ padding: '10rem 0 5rem', position: 'relative' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}
          >
            <h1 style={{ marginBottom: '2rem' }}>About Lanos</h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
              Founded in 2024, Lanos Institute of Technology is an agile EdTech & R&D startup 
              transforming technology education and innovation through our gamified learning 
              platforms, enterprise training solutions, and cutting-edge research.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section style={{ padding: '5rem 0', backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="section-title">Our Story</h2>
            
            <div className="grid" style={{ 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '4rem',
              marginTop: '3rem'
            }}>
              <motion.div variants={itemVariants}>
                <div style={{
                  backgroundColor: 'rgba(30, 30, 30, 0.6)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '10px',
                  padding: '2.5rem',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  height: '100%'
                }}>
                  <h3 style={{ marginBottom: '1.5rem' }}>Our Beginning</h3>
                  <p>
                    Lanos was born from a vision to bridge the gap between traditional education 
                    and the rapidly evolving technology landscape. Founded in Sagar, Madhya Pradesh, 
                    we started with a small team of passionate educators and technologists committed 
                    to revolutionizing how technical skills are taught and acquired.
                  </p>
                  <p>
                    Our founders recognized that conventional educational approaches were failing to 
                    prepare students for the dynamic tech industry. This realization sparked the 
                    creation of our first gamified learning modules, designed to make complex 
                    technical concepts accessible and engaging.
                  </p>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <div style={{
                  backgroundColor: 'rgba(30, 30, 30, 0.6)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '10px',
                  padding: '2.5rem',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  height: '100%'
                }}>
                  <h3 style={{ marginBottom: '1.5rem' }}>Our Mission</h3>
                  <p>
                    At Lanos, our mission is to democratize technology education through innovative, 
                    accessible, and engaging learning experiences. We believe that quality tech education 
                    should not be limited by geography, background, or traditional educational constraints.
                  </p>
                  <p>
                    We are committed to developing cutting-edge educational technologies and methodologies 
                    that empower learners to master complex technical skills effectively. Through our 
                    research and development initiatives, we continuously push the boundaries of what's 
                    possible in educational technology.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Our Values Section */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="section-title">Our Values</h2>
            
            <div className="grid" style={{ 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem',
              marginTop: '3rem'
            }}>
              {[
                {
                  icon: faLightbulb,
                  title: "Innovation",
                  description: "We constantly explore new ideas and approaches to improve technology education and solve complex challenges."
                },
                {
                  icon: faGraduationCap,
                  title: "Excellence",
                  description: "We are committed to delivering the highest quality in everything we do, from our educational content to our research initiatives."
                },
                {
                  icon: faHandshake,
                  title: "Collaboration",
                  description: "We believe in the power of partnerships and work closely with educational institutions, industry leaders, and communities."
                },
                {
                  icon: faFlask,
                  title: "Research-Driven",
                  description: "Our approaches are grounded in rigorous research and continuous experimentation to ensure effectiveness and relevance."
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                >
                  <div style={{
                    backgroundColor: 'rgba(30, 30, 30, 0.6)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '10px',
                    padding: '2rem',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center'
                  }}>
                    <div style={{
                      width: '70px',
                      height: '70px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(0, 194, 255, 0.1)',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginBottom: '1.5rem'
                    }}>
                      <FontAwesomeIcon icon={value.icon} style={{ fontSize: '1.8rem', color: 'var(--accent-color)' }} />
                    </div>
                    <h3 style={{ marginBottom: '1rem' }}>{value.title}</h3>
                    <p>{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Testimonials Carousel Section */}
      <section style={{ padding: '5rem 0', backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="section-title">What People Say About Us</h2>
            
            <div style={{ 
              position: 'relative',
              maxWidth: '900px',
              margin: '4rem auto 0',
              height: '300px',
              overflow: 'hidden'
            }}>
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currentTestimonial}
                  custom={direction}
                  variants={testimonialVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  style={{
                    position: 'absolute',
                    width: '100%',
                    backgroundColor: 'rgba(30, 30, 30, 0.6)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '10px',
                    padding: '3rem',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    height: '100%'
                  }}
                >
                  <FontAwesomeIcon 
                    icon={faQuoteLeft} 
                    style={{ 
                      fontSize: '2rem', 
                      color: 'var(--accent-color)',
                      opacity: 0.5,
                      marginBottom: '1rem'
                    }} 
                  />
                  <p style={{ fontSize: '1.1rem', marginBottom: '2rem', fontStyle: 'italic' }}>
                    "{testimonials[currentTestimonial].text}"
                  </p>
                  <div>
                    <h4 style={{ marginBottom: '0.5rem' }}>{testimonials[currentTestimonial].author}</h4>
                    <p style={{ opacity: 0.7 }}>{testimonials[currentTestimonial].position}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              <div style={{ 
                position: 'absolute', 
                bottom: '20px', 
                left: '0', 
                right: '0',
                display: 'flex',
                justifyContent: 'center',
                gap: '10px'
              }}>
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial([index, index > currentTestimonial ? 1 : -1])}
                    style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      backgroundColor: currentTestimonial === index ? 'var(--accent-color)' : 'rgba(255, 255, 255, 0.3)',
                      border: 'none',
                      padding: 0,
                      cursor: 'pointer'
                    }}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={() => paginate(-1)}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '10px',
                  transform: 'translateY(-50%)',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'pointer',
                  zIndex: 2
                }}
                aria-label="Previous testimonial"
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              
              <button
                onClick={() => paginate(1)}
                style={{
                  position: 'absolute',
                  top: '50%',
                  right: '10px',
                  transform: 'translateY(-50%)',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'pointer',
                  zIndex: 2
                }}
                aria-label="Next testimonial"
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Team Section */}
      <section style={{ padding: '5rem 0', backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="section-title">Our Leadership Team</h2>
            
            <div className="grid" style={{ 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem',
              marginTop: '3rem'
            }}>
              {/* Team members would go here */}
            </div>
          </motion.div>
        </div>
      </section>
      
      <ContactSection />
    </motion.div>
  );
};

export default About;