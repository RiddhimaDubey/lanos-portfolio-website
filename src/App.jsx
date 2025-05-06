import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Research from './pages/Research'
import Contact from './pages/Contact'
// Cursor component removed as requested
import './App.css'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Initialize any global animations here
    const ctx = gsap.context(() => {
      // Animate elements with the .fade-in class
      gsap.utils.toArray('.fade-in').forEach(element => {
        gsap.fromTo(element, 
          { opacity: 0, y: 50 }, 
          { 
            opacity: 1, 
            y: 0, 
            duration: 1,
            scrollTrigger: {
              trigger: element,
              start: 'top bottom-=100',
              toggleActions: 'play none none none'
            }
          }
        );
      });
    });

    return () => ctx.revert(); // Clean up animations
  }, []);

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/research" element={<Research />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App