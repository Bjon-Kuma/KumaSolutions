'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ArrowRight, ChevronDown, Clock3 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const products = [
  {
    name: 'Control Horario',
    href: '/ControlHorario',
    description: 'Fichaje con QR, portal del mánager y tótem',
    icon: Clock3,
  },
]

type NavItem = { name: string; href: string; children?: typeof products }

const navItems: NavItem[] = [
  { name: 'Soluciones', href: '/#soluciones' },
  { name: 'Productos', href: '/ControlHorario', children: products },
  { name: 'Trabajos', href: '/#trabajos' },
  { name: 'Casos', href: '/#casos' },
  { name: 'Planes', href: '/#planes' },
  { name: 'Contacto', href: '/#contacto' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window?.scrollY > 20)
    }
    window?.addEventListener?.('scroll', handleScroll)
    return () => window?.removeEventListener?.('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-kuma-dark/95 backdrop-blur-md shadow-soft border-b border-kuma-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-10 h-10 md:w-11 md:h-11 rounded-xl overflow-hidden flex-shrink-0">
              <Image
                src="/logos/kuma-icon.jpg"
                alt="KUMA"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-xl md:text-2xl font-extrabold text-kuma-white tracking-tight">
                KUMA
              </span>
              <span className="text-[10px] md:text-xs text-kuma-text-dim font-medium tracking-widest -mt-1">
                SOLUTIONS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems?.map?.((item) =>
              item.children ? (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1 text-kuma-text-dim hover:text-kuma-white group-focus-within:text-kuma-white transition-colors font-medium text-sm"
                  >
                    {item.name}
                    <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
                  </Link>
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all">
                    <div className="w-72 bg-kuma-dark-card border border-kuma-border rounded-2xl p-2 shadow-soft-lg">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="flex items-start gap-3 p-3 rounded-xl hover:bg-kuma-dark-surface transition-colors"
                        >
                          <span className="w-9 h-9 rounded-lg bg-kuma-gold/10 flex items-center justify-center flex-shrink-0">
                            <child.icon size={18} className="text-kuma-gold" />
                          </span>
                          <span>
                            <span className="block text-sm font-semibold text-kuma-white">{child.name}</span>
                            <span className="block text-xs text-kuma-text-dim mt-0.5">{child.description}</span>
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item?.name ?? ''}
                  href={item?.href ?? '/'}
                  className="text-kuma-text-dim hover:text-kuma-white transition-colors font-medium text-sm"
                >
                  {item?.name ?? ''}
                </Link>
              )
            ) ?? []}
            <a
              href="https://wa.me/59892773422?text=Hola%21%20Quiero%20agendar%20una%20evaluaci%C3%B3n%20de%20negocio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-kuma-gold hover:bg-kuma-gold-hover text-kuma-dark px-5 py-2.5 rounded-xl font-semibold text-sm transition-all shadow-gold hover:shadow-gold-md"
            >
              Agendar evaluación
              <ArrowRight size={16} />
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-kuma-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-kuma-dark-card border-t border-kuma-border"
          >
            <nav className="flex flex-col px-4 py-4 space-y-2">
              {navItems?.map?.((item) =>
                item.children ? (
                  <div key={item.name} className="py-1">
                    <span className="block text-[11px] font-semibold uppercase tracking-widest text-kuma-gold px-3 pt-2 pb-1">
                      {item.name}
                    </span>
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3 text-kuma-text-dim hover:text-kuma-white hover:bg-kuma-dark-surface transition-colors font-medium py-3 px-3 rounded-lg"
                      >
                        <child.icon size={18} className="text-kuma-gold" />
                        {child.name}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={item?.name ?? ''}
                    href={item?.href ?? '/'}
                    onClick={() => setIsOpen(false)}
                    className="text-kuma-text-dim hover:text-kuma-white hover:bg-kuma-dark-surface transition-colors font-medium py-3 px-3 rounded-lg"
                  >
                    {item?.name ?? ''}
                  </Link>
                )
              ) ?? []}
              <a
                href="https://wa.me/59892773422?text=Hola%21%20Quiero%20agendar%20una%20evaluaci%C3%B3n%20de%20negocio"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center gap-2 bg-kuma-gold hover:bg-kuma-gold-hover text-kuma-dark px-5 py-3 rounded-xl font-semibold mt-2"
              >
                Agendar evaluación
                <ArrowRight size={16} />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
