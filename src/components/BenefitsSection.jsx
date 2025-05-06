import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const BenefitsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

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

  const beneficiaries = [
    {
      title: "Students",
      benefits: [
        "Access to cutting-edge learning platforms",
        "Hands-on experience with emerging technologies",
        "Personalized learning paths",
        "Industry-relevant skills development",
        "Enhanced job prospects"
      ],
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z" stroke="#00c2ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88" stroke="#00c2ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Working Professionals",
      benefits: [
        "Upskilling opportunities in emerging technologies",
        "Flexible learning schedules",
        "Industry-recognized certifications",
        "Career advancement pathways",
        "Networking with industry experts"
      ],
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z" stroke="#00c2ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21" stroke="#00c2ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Academic Institutions",
      benefits: [
        "Modern curriculum integration",
        "Faculty development programs",
        "Research collaboration opportunities",
        "Access to innovative teaching methodologies",
        "Enhanced student engagement and outcomes"
      ],
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 3H8C9.06087 3 10.0783 3.42143 10.8284 4.17157C11.5786 4.92172 12 5.93913 12 7V21C12 20.2044 11.6839 19.4413 11.1213 18.8787C10.5587 18.3161 9.79565 18 9 18H2V3Z" stroke="#00c2ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22 3H16C14.9391 3 13.9217 3.42143 13.1716 4.17157C12.4214 4.92172 12 5.93913 12 7V21C12 20.2044 12.3161 19.4413 12.8787 18.8787C13.4413 18.3161 14.2044 18 15 18H22V3Z" stroke="#00c2ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "IT Companies",
      benefits: [
        "Access to skilled talent pool",
        "Customized training solutions",
        "R&D partnership opportunities",
        "Technology adoption consulting",
        "Reduced onboarding time for new hires"
      ],
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 9H16C16.5304 9 17.0391 9.21071 17.4142 9.58579C17.7893 9.96086 18 10.4696 18 11V21H6V11C6 10.4696 6.21071 9.96086 6.58579 9.58579C6.96086 9.21071 7.46957 9 8 9H12Z" stroke="#00c2ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 9V5C12 4.46957 12.2107 3.96086 12.5858 3.58579C12.9609 3.21071 13.4696 3 14 3H18C18.5304 3 19.0391 3.21071 19.4142 3.58579C19.7893 3.96086 20 4.46957 20 5V7" stroke="#00c2ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 9V5C12 4.46957 11.7893 3.96086 11.4142 3.58579C11.0391 3.21071 10.5304 3 10 3H6C5.46957 3 4.96086 3.21071 4.58579 3.58579C4.21071 3.96086 4 4.46957 4 5V7" stroke="#00c2ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Government",
      benefits: [
        "High-impact public–private initiatives",
        "Regional development in Sagar, MP",
        "Job creation and economic growth",
        "Technology-driven governance solutions",
        "Educational ecosystem development"
      ],
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 22H21" stroke="#00c2ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 18V11" stroke="#00c2ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 18V11" stroke="#00c2ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 18V11" stroke="#00c2ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18 18V11" stroke="#00c2ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 2L2 7H22L12 2Z" stroke="#00c2ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Investors",
      benefits: [
        "High-growth investment opportunity",
        "Exposure to innovative EdTech solutions",
        "Participation in transformative R&D projects",
        "Social impact through education advancement",
        "Potential for significant returns"
      ],
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 1V23" stroke="#00c2ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="#00c2ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <section ref={sectionRef} id="benefits" style={{ padding: '8rem 0' }}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h2 className="section-title">Who Benefits</h2>
          
          <div className="grid" style={{ 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginTop: '3rem'
          }}>
            {beneficiaries.map((beneficiary, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="benefit-card"
                style={{
                  backgroundColor: 'rgba(30, 30, 30, 0.6)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '10px',
                  padding: '2rem',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  height: '100%'
                }}
                whileHover={{
                  y: -10,
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '1.5rem'
                }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(0, 194, 255, 0.1)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: '1rem'
                  }}>
                    {beneficiary.icon}
                  </div>
                  <h3 style={{ margin: 0 }}>{beneficiary.title}</h3>
                </div>
                
                <ul style={{ paddingLeft: '1.5rem' }}>
                  {beneficiary.benefits.map((benefit, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * i, duration: 0.5 }}
                      viewport={{ once: true }}
                      style={{ marginBottom: '0.5rem' }}
                    >
                      {benefit}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;