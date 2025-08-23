import Layout from '../components/Layout'
import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'

const AboutPage = () => {
  const teamMembers = [
    { name: "Sahaj Patel", initials: "SP" },
    { name: "Yash Patel", initials: "YP" },
    { name: "Shrey Patel", initials: "SP" },
    { name: "Harshal Kande", initials: "HK" },
    { name: "Sid Purohit", initials: "SP" }
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

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <Link href="/">
                <motion.button 
                  whileHover={{ scale: 1.05, x: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-ghost mb-8 text-muted-foreground hover:text-primary rounded-xl transition-all duration-200"
                >
                  ← Back to Home
                </motion.button>
              </Link>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl md:text-5xl font-bold text-foreground mb-6"
              >
                Meet the 
                <span className="bg-gradient-primary bg-clip-text text-transparent"> Team</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              >
                Our amazing team behind FocusFinance - passionate individuals dedicated to empowering students through financial education.
              </motion.p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            >
              {teamMembers.map((member, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="card shadow-medium hover:shadow-strong transition-all duration-300 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/10"
                >
                  <div className="pt-8 pb-8 px-6 text-center">
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className="relative mb-6 mx-auto group cursor-pointer"
                      onDrop={(e) => handleImageDrop(e, member.name)}
                      onDragOver={handleDragOver}
                    >
                      <div className="w-24 h-24 mx-auto border-4 border-primary/20 shadow-glow rounded-full overflow-hidden bg-gradient-primary flex items-center justify-center transition-all duration-300 hover:border-primary/40 hover:shadow-neon">
                        <img
                          src="" 
                          alt={member.name}
                          className="object-cover w-full h-full"
                          style={{ display: 'none' }}
                        />
                        <span className="text-primary-foreground text-lg font-bold">
                          {member.initials}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-black/60 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                        <span className="text-white text-xs font-medium px-2 py-1 bg-black/80 rounded-lg">
                          Drop photo here
                        </span>
                      </div>
                    </motion.div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {member.name}
                    </h3>
                    <div className="w-12 h-0.5 bg-gradient-primary mx-auto rounded-full"></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="text-center mt-16"
            >
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-medium hover:shadow-strong transition-all duration-300 max-w-2xl mx-auto border border-primary/10"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Join Our Mission
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Interested in contributing to financial education? We're always looking for passionate individuals to join our team.
                </p>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-hero btn-lg rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
                >
                  Get In Touch
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default AboutPage