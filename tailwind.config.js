/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        // Cyberpunk neon colors
        'neon-blue': 'hsl(var(--neon-blue))',
        'neon-cyan': 'hsl(var(--neon-cyan))',
        'neon-magenta': 'hsl(var(--neon-magenta))',
        'neon-violet': 'hsl(var(--neon-violet))',
        'neon-pink': 'hsl(var(--neon-pink))',
        'electric-blue': 'hsl(var(--electric-blue))',
        'glass': 'hsl(var(--glass))',
        'glass-border': 'hsl(var(--glass-border))',
        'glass-hover': 'hsl(var(--glass-hover))'
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'var(--gradient-primary)',
        'gradient-secondary': 'var(--gradient-secondary)', 
        'gradient-accent': 'var(--gradient-accent)',
        'gradient-hero': 'var(--gradient-hero)',
        'gradient-subtle': 'var(--gradient-subtle)',
        'gradient-glass': 'var(--gradient-glass)',
        'gradient-neon': 'var(--gradient-neon)',
        'gradient-hologram': 'var(--gradient-hologram)'
      },
      boxShadow: {
        'neon-glow': 'var(--shadow-neon-glow)',
        'glass': 'var(--shadow-glass)',
        'hover-glow': 'var(--shadow-hover-glow)',
        'card': 'var(--shadow-card)',
        'card-hover': 'var(--shadow-card-hover)',
        'button': 'var(--shadow-button)',
        'button-hover': 'var(--shadow-button-hover)',
        'futuristic': '0 4px 20px rgba(6, 182, 212, 0.3)',
        'futuristic-glow': '0 8px 30px rgba(6, 182, 212, 0.5), 0 0 20px rgba(34, 211, 238, 0.3)',
      },
      transitionTimingFunction: {
        'smooth': 'var(--transition-smooth)',
        'spring': 'var(--transition-spring)',
        'glow': 'var(--transition-glow)',
        'glass': 'var(--transition-glass)',
        'hologram': 'var(--transition-hologram)'
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'hologram-shift': 'hologram-shift 3s ease-in-out infinite',
        'neon-pulse': 'neon-pulse 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': {
            boxShadow: 'var(--shadow-neon-glow)'
          },
          '50%': {
            boxShadow: '0 0 40px hsl(var(--neon-blue) / 0.8), 0 0 80px hsl(var(--neon-cyan) / 0.6), 0 0 120px hsl(var(--neon-violet) / 0.4)'
          }
        },
        'hologram-shift': {
          '0%, 100%': { filter: 'hue-rotate(0deg)' },
          '25%': { filter: 'hue-rotate(90deg)' },
          '50%': { filter: 'hue-rotate(180deg)' },
          '75%': { filter: 'hue-rotate(270deg)' }
        },
        'neon-pulse': {
          'from': {
            textShadow: '0 0 10px hsl(var(--neon-blue) / 0.8), 0 0 20px hsl(var(--neon-blue) / 0.6), 0 0 30px hsl(var(--neon-blue) / 0.4)'
          },
          'to': {
            textShadow: '0 0 20px hsl(var(--neon-blue) / 1), 0 0 30px hsl(var(--neon-blue) / 0.8), 0 0 40px hsl(var(--neon-blue) / 0.6)'
          }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      }
    }
  },
  plugins: []
}