import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

const Layout = ({ children }) => {
  const router = useRouter()

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 w-full backdrop-blur-xl border-b z-50"
        style={{
          background: 'var(--gradient-glass)',
          borderColor: 'hsl(var(--glass-border))',
          boxShadow: 'var(--shadow-glass)'
        }}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-3 cursor-pointer"
            >
              <div className="w-10 h-10 bg-gradient-neon rounded-full flex items-center justify-center relative overflow-hidden">
                <span className="text-background font-bold text-sm z-10">FF</span>
                <div className="absolute inset-0 bg-gradient-hologram opacity-20 animate-hologram-shift"></div>
              </div>
              <span className="text-2xl font-bold holographic-text">FocusFinance</span>
            </motion.div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about">
              <motion.span 
                whileHover={{ scale: 1.05, y: -2 }}
                className="text-foreground/80 hover:text-neon-blue transition-glow relative group cursor-pointer font-medium"
              >
                About
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></div>
              </motion.span>
            </Link>
            <Link href="/branches">
              <motion.span 
                whileHover={{ scale: 1.05, y: -2 }}
                className="text-foreground/80 hover:text-neon-cyan transition-glow relative group cursor-pointer font-medium"
              >
                Globe
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-secondary group-hover:w-full transition-all duration-300"></div>
              </motion.span>
            </Link>
            {router.pathname === '/' && (
              <>
                <motion.button 
                  whileHover={{ scale: 1.05, y: -2 }}
                  onClick={() => scrollToSection('workshops')}
                  className="text-foreground/80 hover:text-neon-magenta transition-glow relative group font-medium"
                >
                  Workshops
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-accent group-hover:w-full transition-all duration-300"></div>
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05, y: -2 }}
                  onClick={() => scrollToSection('join')}
                  className="text-foreground/80 hover:text-neon-violet transition-glow relative group font-medium"
                >
                  Get Involved
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></div>
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05, y: -2 }}
                  onClick={() => scrollToSection('contact')}
                  className="text-foreground/80 hover:text-electric-blue transition-glow relative group font-medium"
                >
                  Contact
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-secondary group-hover:w-full transition-all duration-300"></div>
                </motion.button>
              </>
            )}
            <motion.button 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                if (router.pathname === '/') {
                  scrollToSection('join')
                } else {
                  router.push('/#join')
                }
              }}
              className="btn btn-hero px-6 py-2 font-semibold"
            >
              Join Now
            </motion.button>
          </div>
        </div>
      </motion.nav>
      
      <main className="pt-24">
        {children}
      </main>
      
      {/* Ambient background effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-magenta/5 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>
    </div>
  )
}

export default Layout