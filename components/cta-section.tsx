'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Search, Lightbulb, Handshake } from 'lucide-react';

const steps = [
  { icon: Search, text: 'Analizamos la empresa' },
  { icon: Lightbulb, text: 'Identificamos oportunidades' },
  { icon: Handshake, text: 'Usted decide si avanza' },
];

export function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-kuma-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-kuma-gold/20 via-kuma-dark-card to-kuma-dark-card" />
          <div className="absolute top-0 right-0 w-80 h-80 bg-kuma-gold/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-kuma-gold/5 rounded-full blur-[80px]" />

          {/* Decorative border */}
          <div className="absolute inset-0 border border-kuma-gold/20 rounded-3xl" />

          <div className="relative z-10 p-8 md:p-16 text-center">
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-kuma-gold/10 border border-kuma-gold/20 px-4 py-2 rounded-full text-sm text-kuma-gold font-medium mb-6"
            >
              Sin compromiso
            </motion.div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-kuma-white mb-5 tracking-tight leading-[1.1]">
              Toda transformación comienza con{' '}
              <span className="text-kuma-gold">un buen diagnóstico</span>
            </h2>
            <p className="text-lg md:text-xl text-kuma-text-dim mb-10 max-w-2xl mx-auto">
              Analizamos el funcionamiento de la empresa, identificamos oportunidades de mejora y presentamos una propuesta clara antes de realizar cualquier inversión.
            </p>

            {/* Trust steps */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-3 mb-10">
              {steps.map((s, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="inline-flex items-center gap-2 bg-kuma-dark-card/60 border border-kuma-border rounded-xl px-4 py-3">
                    <s.icon size={18} className="text-kuma-gold flex-shrink-0" />
                    <span className="text-sm font-medium text-kuma-text">{s.text}</span>
                  </div>
                  {i < steps.length - 1 && (
                    <ArrowRight size={16} className="text-kuma-gold/40 hidden sm:block" aria-hidden="true" />
                  )}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/59892773422?text=Hola%21%20Quiero%20agendar%20una%20evaluaci%C3%B3n%20de%20negocio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-kuma-gold hover:bg-kuma-gold-hover text-kuma-dark px-8 py-4 rounded-xl font-bold text-base transition-all shadow-gold hover:shadow-gold-md hover:-translate-y-0.5"
              >
                Agendar una evaluación de negocio
                <ArrowRight size={18} />
              </a>
              <a
                href="mailto:Bjon.Kuma@gmail.com?subject=Consulta%20KUMA%20Solutions"
                className="inline-flex items-center justify-center gap-2 bg-kuma-dark-surface hover:bg-kuma-border-light text-kuma-text px-8 py-4 rounded-xl font-semibold text-base border border-kuma-border transition-all"
              >
                Prefiero escribir por email
              </a>
            </div>

            <p className="text-kuma-text-dim/60 text-sm mt-8">
              Respondemos en menos de 24 horas
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
