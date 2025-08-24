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
    <div className="min-h-screen">
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 w-full bg-card/10 backdrop-blur-xl border-b border-primary/10 z-50 shadow-frost"
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-3 cursor-pointer"
            >
              <div className="w-8 h-8 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-frost transition-frost hover:shadow-glow hover:scale-110">
                <span className="text-primary-foreground font-bold text-sm">FF</span>
              </div>
              <span className="text-xl font-semibold text-foreground tracking-tight">FocusFinance</span>
            </motion.div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about">
              <motion.span 
                whileHover={{ scale: 1.08, y: -2 }}
                className="text-muted-foreground hover:text-primary transition-frost font-medium cursor-pointer hover:drop-shadow-lg"
              >
                About
              </motion.span>
            </Link>
            <Link href="/branches">
              <motion.span 
                whileHover={{ scale: 1.08, y: -2 }}
                className="text-muted-foreground hover:text-primary transition-frost font-medium cursor-pointer hover:drop-shadow-lg"
              >
                Branches
              </motion.span>
            </Link>
            {router.pathname === '/' && (
              <>
                <motion.button 
                  whileHover={{ scale: 1.08, y: -2 }}
                  onClick={() => scrollToSection('workshops')}
                  className="text-muted-foreground hover:text-primary transition-frost font-medium hover:drop-shadow-lg"
                >
                  Workshops
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.08, y: -2 }}
                  onClick={() => scrollToSection('join')}
                  className="text-muted-foreground hover:text-primary transition-frost font-medium hover:drop-shadow-lg"
                >
                  Get Involved
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.08, y: -2 }}
                  onClick={() => scrollToSection('contact')}
                  className="text-muted-foreground hover:text-primary transition-frost font-medium hover:drop-shadow-lg"
                >
                  Contact
                </motion.button>
              </>
            )}
            <motion.button 
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                if (router.pathname === '/') {
                  scrollToSection('join')
                } else {
                  router.push('/#join')
                }
              }}
              className="btn btn-glass btn-sm shadow-frost hover:shadow-glow transition-frost"
            >
              Join Now
            </button>
          </div>
        </div>
      </motion.nav>
      
      <main className="pt-20">
        {children}
      </main>
    </div>
  )
}

export default Layout