'use client';

import { motion } from 'framer-motion';
import { Search, PenTool, Rocket, HeartHandshake } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: Search,
    title: 'Diagnóstico inicial',
    desc: 'Se analiza cómo trabaja hoy la empresa y dónde se concentra la mayor pérdida de tiempo. Sin costo y sin compromiso.',
  },
  {
    num: '02',
    icon: PenTool,
    title: 'Diseño de la solución',
    desc: 'Se define, con claridad, por dónde comenzar para obtener resultados concretos en el menor tiempo posible.',
  },
  {
    num: '03',
    icon: Rocket,
    title: 'Implementación',
    desc: 'El equipo de Kuma se ocupa de todo el desarrollo. La solución se entrega lista para usar, sin requerir conocimientos técnicos.',
  },
  {
    num: '04',
    icon: HeartHandshake,
    title: 'Seguimiento y mejora continua',
    desc: 'El acompañamiento continúa en el tiempo, ajustando y optimizando para que todo siga funcionando correctamente.',
  },
];

export function HowWeWork() {
  return (
    <section id="proceso" className="py-20 md:py-28 bg-kuma-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-14"
        >
          <span className="inline-block text-kuma-gold text-sm font-semibold uppercase tracking-widest mb-4">Paso a paso</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-kuma-white mb-4 tracking-tight">
            Nuestro proceso de trabajo
          </h2>
          <p className="text-lg text-kuma-text-dim">
            Un recorrido claro y sin sorpresas. La empresa mantiene su actividad habitual mientras el equipo se ocupa del resto.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative bg-kuma-dark-card border border-kuma-border rounded-2xl p-6 hover:border-kuma-gold/30 transition-all group"
            >
              <span className="text-5xl font-black text-kuma-text-dim/20 absolute top-4 right-5 select-none group-hover:text-kuma-gold/30 transition-colors" aria-hidden="true">
                {s.num}
              </span>
              <div className="w-10 h-10 rounded-lg bg-kuma-gold/10 flex items-center justify-center mb-4">
                <s.icon size={20} className="text-kuma-gold" />
              </div>
              <h3 className="text-lg font-bold text-kuma-white mb-2">{s.title}</h3>
              <p className="text-sm text-kuma-text-dim leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
