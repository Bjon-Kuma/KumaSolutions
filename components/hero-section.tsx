'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Clock, MessageCircle, Search, TrendingUp } from 'lucide-react';

const pillars = [
  { icon: Search, label: 'Mayor visibilidad digital' },
  { icon: Clock, label: 'Menos trabajo operativo' },
  { icon: MessageCircle, label: 'Respuesta más rápida a clientes' },
  { icon: TrendingUp, label: 'Más tiempo para hacer crecer la empresa' },
];

export function HeroSection() {
  return (
    <section className="relative pt-28 md:pt-36 pb-20 md:pb-32 overflow-hidden bg-kuma-dark">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-[0.18]"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-kuma-dark/85 via-kuma-dark/90 to-kuma-dark" />

      {/* Gradient orbs */}
      <div className="absolute top-20 -right-40 w-[500px] h-[500px] bg-kuma-gold/5 rounded-full blur-[120px]" />
      <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-kuma-gold/3 rounded-full blur-[100px]" />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(212,160,23,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,160,23,0.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-kuma-gold/10 border border-kuma-gold/20 px-4 py-2 rounded-full text-sm text-kuma-gold mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-kuma-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-kuma-gold"></span>
            </span>
            <span className="font-medium">Tecnología aplicada para optimizar empresas reales</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-black text-kuma-white leading-[1.05] tracking-tight mb-6"
          >
            Menos tiempo dedicado a tareas repetitivas.{' '}
            <span className="text-kuma-gold">Más tiempo para hacer crecer la empresa.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-kuma-text-dim mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Cuando todas las consultas, reservas, ventas y seguimientos dependen de una sola persona, el crecimiento se vuelve cada vez más difícil. En Kuma ayudamos a organizar los procesos, reducir tareas repetitivas y aprovechar la tecnología para que la empresa pueda crecer con mayor tranquilidad.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <a
              href="https://wa.me/59892773422?text=Hola%21%20Quiero%20agendar%20una%20evaluaci%C3%B3n%20de%20negocio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-kuma-gold hover:bg-kuma-gold-hover text-kuma-dark px-8 py-4 rounded-xl font-bold text-base transition-all shadow-gold hover:shadow-gold-md hover:-translate-y-0.5"
            >
              Agendar una evaluación de negocio
              <ArrowRight size={18} />
            </a>
            <Link
              href="#soluciones"
              className="inline-flex items-center justify-center gap-2 bg-kuma-dark-surface hover:bg-kuma-border-light text-kuma-text px-8 py-4 rounded-xl font-semibold text-base border border-kuma-border transition-all"
            >
              Conocer las soluciones
            </Link>
          </motion.div>

          {/* Pillars row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {pillars.map((p, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-2 bg-kuma-dark-card/50 border border-kuma-border rounded-xl px-4 py-4"
              >
                <p.icon size={22} className="text-kuma-gold" />
                <span className="text-sm text-kuma-text-dim font-medium text-center">{p.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
