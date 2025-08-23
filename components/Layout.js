import Link from 'next/link'
import { useRouter } from 'next/router'

const Layout = ({ children }) => {
  const router = useRouter()

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-card/5 backdrop-blur-xl border-b border-primary/10 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center space-x-3 cursor-pointer">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow">
                <span className="text-primary-foreground font-bold text-sm">FF</span>
              </div>
              <span className="text-xl font-semibold text-foreground tracking-tight">FocusFinance</span>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about">
              <span className="text-muted-foreground hover:text-primary transition-glow font-medium cursor-pointer">
                About
              </span>
            </Link>
            <Link href="/branches">
              <span className="text-muted-foreground hover:text-primary transition-glow font-medium cursor-pointer">
                Branches
              </span>
            </Link>
            {router.pathname === '/' && (
              <>
                <button 
                  onClick={() => scrollToSection('workshops')}
                  className="text-muted-foreground hover:text-primary transition-glow font-medium"
                >
                  Workshops
                </button>
                <button 
                  onClick={() => scrollToSection('join')}
                  className="text-muted-foreground hover:text-primary transition-glow font-medium"
                >
                  Get Involved
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-muted-foreground hover:text-primary transition-glow font-medium"
                >
                  Contact
                </button>
              </>
            )}
            <button 
              onClick={() => {
                if (router.pathname === '/') {
                  scrollToSection('join')
                } else {
                  router.push('/#join')
                }
              }}
              className="btn btn-glass btn-sm"
            >
              Join Now
            </button>
          </div>
        </div>
      </nav>
      
      <main className="pt-20">
        {children}
      </main>
    </div>
  )
}

export default Layout