'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

const works = [
  {
    name: 'MD Studios',
    category: 'Sitio web profesional',
    description: 'Presencia digital de alto impacto para un estudio creativo, con foco en la conversión.',
    image: '/portfolio/md-studios.png',
    url: 'https://mdstudios.abacusai.app/',
  },
  {
    name: 'Vitacar',
    category: 'Presencia digital',
    description: 'Plataforma clara y ordenada para presentar servicios y captar consultas.',
    image: '/portfolio/vitacar.png',
    url: 'https://grey-capybara-179311.hostingersite.com/test-mail.html',
  },
  {
    name: 'Bjorn',
    category: 'Sitio web a medida',
    description: 'Desarrollo a medida con una identidad visual sólida y navegación cuidada.',
    image: '/portfolio/bjorn.png',
    url: 'https://BJORN.abacusai.app',
  },
  {
    name: 'Seguridad',
    category: 'Sitio institucional',
    description: 'Sitio institucional que transmite confianza y profesionalismo en el rubro seguridad.',
    image: '/portfolio/seguridad.png',
    url: 'https://seguridad.com.uy/',
  },
];

export function PortfolioCarousel() {
  const [index, setIndex] = useState(0);

  const goTo = useCallback((i: number) => {
    setIndex((i + works.length) % works.length);
  }, []);

  const next = useCallback(() => goTo(index + 1), [index, goTo]);
  const prev = useCallback(() => goTo(index - 1), [index, goTo]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % works.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = works[index];

  return (
    <section id="trabajos" className="py-20 md:py-28 bg-kuma-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-14"
        >
          <span className="inline-block text-kuma-gold text-sm font-semibold uppercase tracking-widest mb-4">Trabajos realizados</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-kuma-white mb-4 tracking-tight">
            Proyectos que ya están en línea
          </h2>
          <p className="text-lg text-kuma-text-dim">
            Una muestra de sitios y soluciones desarrollados para empresas reales.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative bg-kuma-dark-card border border-kuma-border rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Image */}
              <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[380px] bg-kuma-dark-surface overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.image}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={current.image}
                      alt={`Sitio web de ${current.name} desarrollado por KUMA Solutions`}
                      fill
                      className="object-cover object-top"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Content */}
              <div className="relative p-8 md:p-10 flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.name}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="inline-block text-xs font-semibold uppercase tracking-widest text-kuma-gold mb-3">
                      {current.category}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-kuma-white mb-3 tracking-tight">
                      {current.name}
                    </h3>
                    <p className="text-kuma-text-dim leading-relaxed mb-6">
                      {current.description}
                    </p>
                    <a
                      href={current.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-kuma-gold hover:bg-kuma-gold-hover text-kuma-dark px-6 py-3 rounded-xl font-semibold text-sm transition-all shadow-gold hover:shadow-gold-md w-fit"
                    >
                      Ver sitio
                      <ArrowUpRight size={16} />
                    </a>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Nav arrows */}
            <button
              onClick={prev}
              aria-label="Trabajo anterior"
              className="absolute left-3 top-1/2 -translate-y-1/2 lg:left-3 w-10 h-10 rounded-full bg-kuma-dark/80 border border-kuma-border text-kuma-white flex items-center justify-center hover:bg-kuma-gold hover:text-kuma-dark transition-all backdrop-blur-sm"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              aria-label="Trabajo siguiente"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-kuma-dark/80 border border-kuma-border text-kuma-white flex items-center justify-center hover:bg-kuma-gold hover:text-kuma-dark transition-all backdrop-blur-sm"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2.5 mt-8">
            {works.map((w, i) => (
              <button
                key={w.name}
                onClick={() => goTo(i)}
                aria-label={`Ver ${w.name}`}
                className={`h-2.5 rounded-full transition-all ${
                  i === index ? 'w-8 bg-kuma-gold' : 'w-2.5 bg-kuma-border-light hover:bg-kuma-text-dim'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
