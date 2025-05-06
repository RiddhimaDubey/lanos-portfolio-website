import { useEffect } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import BenefitsSection from '../components/BenefitsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import AnimatedBackground from '../components/AnimatedBackground';

const Home = () => {
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
      {/* Enhanced animated background */}
      <AnimatedBackground />
      
      {/* Main sections */}
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <BenefitsSection />
      <TestimonialsSection />
      <ContactSection />
    </motion.div>
  );
};

export default Home;