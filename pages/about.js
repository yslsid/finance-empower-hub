import Layout from '../components/Layout'
import Link from 'next/link'
import { useState } from 'react'

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
            <div className="text-center mb-16">
              <Link href="/">
                <button className="btn btn-ghost mb-8 text-muted-foreground hover:text-primary">
                  ← Back to Home
                </button>
              </Link>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                Meet the 
                <span className="bg-gradient-primary bg-clip-text text-transparent"> Team</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Our amazing team behind FocusFinance - passionate individuals dedicated to empowering students through financial education.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {teamMembers.map((member, index) => (
                <div key={index} className="card shadow-medium hover:shadow-strong transition-smooth transform hover:-translate-y-1">
                  <div className="pt-8 pb-8 text-center">
                    <div 
                      className="relative mb-6 mx-auto group cursor-pointer"
                      onDrop={(e) => handleImageDrop(e, member.name)}
                      onDragOver={handleDragOver}
                    >
                      <div className="w-24 h-24 mx-auto border-4 border-primary/20 shadow-glow rounded-full overflow-hidden bg-gradient-primary flex items-center justify-center">
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
                        <span className="text-white text-xs font-medium px-2 py-1 bg-black/80 rounded">
                          Drop photo here
                        </span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {member.name}
                    </h3>
                    <div className="w-12 h-0.5 bg-gradient-primary mx-auto rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <div className="bg-card rounded-2xl p-8 md:p-12 shadow-medium max-w-2xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Join Our Mission
                </h2>
                <p className="text-muted-foreground mb-6">
                  Interested in contributing to financial education? We're always looking for passionate individuals to join our team.
                </p>
                <button className="btn btn-hero btn-lg">
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default AboutPage