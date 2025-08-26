import Layout from '../components/Layout'
import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import HolographicCard from '../components/HolographicCard'

const AboutPage = () => {
  const teamMembers = [
    { name: "Sahaj Patel", initials: "SP", role: "Founder & CEO", color: "neon-blue" },
    { name: "Yash Patel", initials: "YP", role: "CTO", color: "neon-cyan" },
    { name: "Shrey Patel", initials: "SP", role: "Head of Education", color: "neon-magenta" },
    { name: "Harshal Kande", initials: "HK", role: "Operations Director", color: "neon-violet" },
    { name: "Sid Purohit", initials: "SP", role: "Community Manager", color: "electric-blue" }
  ];

  const handleImageDrop = (e, memberName) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const img = e.currentTarget.querySelector('img');
          if (img && event.target?.result) {
            img.src = event.target.result;
            img.style.display = 'block';
          }
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <Layout>
      <div className="min-h-screen relative z-10">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <Link href="/">
                <motion.button 
                  whileHover={{ scale: 1.05, x: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-glass mb-8 px-6 py-3"
                >
                  ← Back to Home
                </motion.button>
              </Link>
              <motion.h1 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-5xl md:text-7xl font-bold mb-8"
              >
                Meet the 
                <span className="holographic-text"> Dream Team</span>
              </motion.h1>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.2, delay: 0.5 }}
                className="h-1 bg-gradient-neon mx-auto mb-8 max-w-md rounded-full"
              />
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed"
              >
                Our amazing team behind FocusFinance - passionate individuals dedicated to empowering students through financial education.
              </motion.p>
            </motion.div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20"
            >
              {teamMembers.map((member, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="glass-panel p-8 text-center group cursor-pointer relative overflow-hidden"
                  onDrop={(e) => handleImageDrop(e, member.name)}
                  onDragOver={handleDragOver}
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="relative mb-6 mx-auto group-hover:animate-float"
                  >
                    <div className={`w-28 h-28 mx-auto border-4 border-${member.color}/30 rounded-full overflow-hidden bg-gradient-primary flex items-center justify-center transition-glow hover:border-${member.color}/60 relative`}>
                      <img
                        src="" 
                        alt={member.name}
                        className="object-cover w-full h-full"
                        style={{ display: 'none' }}
                      />
                      <span className="text-primary-foreground text-xl font-bold z-10">
                        {member.initials}
                      </span>
                      <div className="absolute inset-0 bg-gradient-hologram opacity-20 animate-hologram-shift"></div>
                    </div>
                    <div className="absolute inset-0 bg-background/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-glass flex items-center justify-center">
                      <span className="text-foreground text-xs font-medium px-3 py-2 glass-panel">
                        Drop photo here
                      </span>
                    </div>
                  </motion.div>
                  
                  <motion.h3 
                    className="text-2xl font-bold mb-2 neon-text"
                    whileHover={{ scale: 1.05 }}
                  >
                    {member.name}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-foreground/70 mb-4 font-medium"
                    initial={{ opacity: 0.7 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {member.role}
                  </motion.p>
                  
                  <div className={`w-16 h-1 bg-gradient-primary mx-auto rounded-full shadow-${member.color}`}></div>
                  
                  {/* Holographic border effect */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-hologram opacity-10 animate-hologram-shift rounded-3xl"></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="text-center"
            >
              <HolographicCard
                title="Join Our Mission"
                description="Interested in contributing to financial education? We're always looking for passionate individuals to join our team."
                glowColor="neon-violet"
                delay={0}
                className="max-w-2xl mx-auto p-12"
              >
                <motion.button 
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-hero px-10 py-4 text-lg font-bold mt-6"
                >
                  Get In Touch
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="ml-2"
                  >
                    →
                  </motion.span>
                </motion.button>
              </HolographicCard>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default AboutPage