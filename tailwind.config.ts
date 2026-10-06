import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // KUMA Dark Palette — derived from logo
        'kuma-dark': '#0B1120',           // Primary background (logo bg navy)
        'kuma-dark-card': '#111827',      // Card / elevated surfaces
        'kuma-dark-surface': '#1A2332',   // Hover / tertiary surfaces
        'kuma-navy': '#0F172A',           // Secondary background
        'kuma-text': '#F0F4F8',           // Primary text (off-white)
        'kuma-text-dim': '#94A3B8',       // Secondary text (gray-blue)
        'kuma-gold': '#D4A017',           // Accent gold (from K in logo)
        'kuma-gold-hover': '#B8860B',     // Hover gold
        'kuma-gold-light': '#F5D060',     // Light gold for highlights
        'kuma-border': '#1E293B',         // Subtle dark borders
        'kuma-border-light': '#334155',   // Lighter borders for emphasis
        'kuma-white': '#FFFFFF',          // Pure white (bear, key text)
        // Legacy compat
        'kuma-blue': '#0B1120',
        'kuma-green': '#2ECC71',
        'kuma-green-hover': '#27AE60',
        primary: '#D4A017',
        secondary: '#111827',
        background: '#0B1120',
        accent: '#D4A017',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 24px rgba(0, 0, 0, 0.2)',
        'soft-md': '0 8px 32px rgba(0, 0, 0, 0.3)',
        'soft-lg': '0 16px 48px rgba(0, 0, 0, 0.4)',
        'gold': '0 4px 24px rgba(212, 160, 23, 0.15)',
        'gold-md': '0 8px 32px rgba(212, 160, 23, 0.2)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
export default config
