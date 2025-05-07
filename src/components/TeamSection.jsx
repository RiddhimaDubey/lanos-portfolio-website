import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const TeamSection = () => {
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

  const teamMembers = [
    {
      name: "Dr. Aisha Patel",
      role: "Chief Research Officer",
      bio: "With a Ph.D. in Computer Science and 10+ years in AI research, Dr. Patel leads our R&D initiatives with a focus on educational technology innovation.",
      image: "/images/team/team-member-1.jpg"
    },
    {
      name: "Marcus Johnson",
      role: "Head of Learning Design",
      bio: "Former educator with expertise in gamification and interactive learning, Marcus transforms complex concepts into engaging educational experiences.",
      image: "/images/team/team-member-2.jpg"
    },
    {
      name: "Sophia Chen",
      role: "Technical Lead",
      bio: "Full-stack developer with a passion for creating intuitive user interfaces and robust backend systems for educational platforms.",
      image: "/images/team/team-member-3.jpg"
    }
  ];

  const coreValues = [
    {
      title: "Innovation",
      description: "We constantly push boundaries, embracing new ideas and technologies to transform education and research.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 16L7 13.5V8.5L12 6L17 8.5V13.5L12 16Z" stroke="#00c2ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 6V11" stroke="#00c2ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 8.5L12 11L17 8.5" stroke="#00c2ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Agility",
      description: "We adapt quickly to changing environments, embracing challenges with enthusiasm and flexibility.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#00c2ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 6V12L16 14" stroke="#00c2ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Impact",
      description: "We measure our success by the meaningful difference we make in education and research outcomes.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 12H18L15 21L9 3L6 12H2" stroke="#00c2ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Collaboration",
      description: "We believe in the power of partnerships and teamwork to achieve extraordinary results.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#00c2ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#00c2ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="#00c2ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="#00c2ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <section ref={sectionRef} id="team" style={{ padding: '8rem 0' }}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={{ textAlign: 'center' }}
        >
          <h2 className="section-title">Our Team & Culture</h2>
          <p style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto 4rem' }}>
            Our nimble, multidisciplinary teams work collaboratively in open-plan labs, 
            fostering innovation and rapid development of breakthrough solutions.
          </p>
          
          {/* Team Members */}
          <div className="team-grid" style={teamGridStyle}>
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="team-member"
                style={teamMemberStyle}
              >
                <div className="member-image" style={memberImageContainerStyle}>
                  <div style={{
                    ...memberImageStyle,
                    backgroundImage: `url(${member.image})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                  }}></div>
                </div>
                <div className="member-info" style={memberInfoStyle}>
                  <h3>{member.name}</h3>
                  <h4 style={{ color: '#00c2ff', marginBottom: '1rem' }}>{member.role}</h4>
                  <p>{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Core Values */}
          <motion.div
            variants={containerVariants}
            style={{ marginTop: '6rem' }}
          >
            <h3 style={{ fontSize: '1.8rem', marginBottom: '3rem' }}>Core Values</h3>
            
            <div className="values-grid" style={valuesGridStyle}>
              {coreValues.map((value, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className="value-card" 
                  style={valueCardStyle}
                >
                  <div className="value-icon" style={valueIconStyle}>
                    {value.icon}
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const teamGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
  gap: '2rem',
  marginTop: '3rem'
};

const teamMemberStyle = {
  backgroundColor: 'rgba(30, 30, 30, 0.6)',
  backdropFilter: 'blur(10px)',
  borderRadius: '10px',
  overflow: 'hidden',
  border: '1px solid rgba(255, 255, 255, 0.05)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  height: '100%',
  ':hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'
  }
};

const memberImageContainerStyle = {
  width: '100%',
  height: '220px',
  overflow: 'hidden'
};

const memberImageStyle = {
  width: '100%',
  height: '100%',
  transition: 'transform 0.5s ease'
};

const memberInfoStyle = {
  padding: '1.5rem'
};

const valuesGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
  gap: '2rem'
};

const valueCardStyle = {
  backgroundColor: 'rgba(30, 30, 30, 0.6)',
  backdropFilter: 'blur(10px)',
  borderRadius: '10px',
  padding: '2rem',
  textAlign: 'center',
  border: '1px solid rgba(255, 255, 255, 0.05)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  height: '100%'
};

const valueIconStyle = {
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  backgroundColor: 'rgba(0, 194, 255, 0.1)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 auto 1.5rem'
};

const cultureImageContainerStyle = {
  position: 'relative',
  width: '100%',
  maxWidth: '1000px',
  height: '400px',
  margin: '0 auto',
  borderRadius: '10px',
  overflow: 'hidden'
};

const cultureImageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover'
};

const cultureOverlayStyle = {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  padding: '2rem',
  background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)',
  color: 'white',
  textAlign: 'left'
};

export default TeamSection;