'use client';

import { motion } from 'framer-motion';
import { Wand2, LayoutGrid, Database, TrendingUp, ArrowRight } from 'lucide-react';

const chain = [
  {
    icon: Wand2,
    title: 'Automatización de tareas operativas',
    desc: 'Las tareas repetitivas que hoy se resuelven de forma manual pasan a ejecutarse de manera automática.',
  },
  {
    icon: LayoutGrid,
    title: 'Menor carga operativa',
    desc: 'El equipo deja de concentrar todo el trabajo diario y la empresa deja de depender de una sola persona.',
  },
  {
    icon: Database,
    title: 'Información centralizada',
    desc: 'Clientes, pedidos y datos ordenados en un solo lugar y disponibles cuando se necesitan.',
  },
  {
    icon: TrendingUp,
    title: 'Mayor capacidad de crecimiento',
    desc: 'Con tiempo y recursos liberados, la empresa puede atender mejor y aumentar sus ventas.',
  },
];

export function WhatWeDo() {
  return (
    <section className="py-20 md:py-28 bg-kuma-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: narrative */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-kuma-gold text-sm font-semibold uppercase tracking-widest mb-4">Una forma diferente de incorporar tecnología</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-kuma-white mb-6 tracking-tight leading-tight">
              Incorporamos tecnología con un propósito claro
            </h2>
            <div className="space-y-4 text-kuma-text-dim leading-relaxed">
              <p>
                Analizamos los procesos de la empresa e implementamos soluciones que reducen el trabajo operativo y mejoran la organización.
              </p>
              <p>
                El equipo puede seguir concentrándose en aquello que mejor sabe hacer, mientras la tecnología se ocupa de las tareas repetitivas.
              </p>
              <p className="text-kuma-gold font-medium">
                El resultado: menos tareas operativas, información centralizada y mayor capacidad de crecimiento.
              </p>
            </div>
          </motion.div>

          {/* Right: benefit chain */}
          <div className="space-y-4">
            {chain.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative bg-kuma-dark-card border border-kuma-border rounded-2xl p-6 hover:border-kuma-gold/30 transition-all flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-kuma-gold/10 flex items-center justify-center flex-shrink-0">
                  <c.icon size={22} className="text-kuma-gold" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-kuma-white mb-1">{c.title}</h3>
                  <p className="text-sm text-kuma-text-dim leading-relaxed">{c.desc}</p>
                </div>
                {i < chain.length - 1 && (
                  <ArrowRight size={16} className="text-kuma-gold/40 absolute -bottom-3 left-9 rotate-90" aria-hidden="true" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
