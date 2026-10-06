'use client';

import { motion } from 'framer-motion';
import { MessageSquare, NotebookPen, RotateCcw, ShoppingCart, Hourglass, User } from 'lucide-react';

const problems = [
  {
    icon: MessageSquare,
    title: 'Toda la operación depende de un único canal',
    desc: 'Ventas, consultas, reservas y reclamos concentrados en un solo lugar. Si no se atiende a tiempo, la oportunidad se pierde.',
  },
  {
    icon: NotebookPen,
    title: 'Información dispersa',
    desc: 'Cuadernos, planillas y mensajes sueltos. Los datos están repartidos y cuesta encontrarlos cuando se necesitan.',
  },
  {
    icon: RotateCcw,
    title: 'Las mismas consultas se repiten todos los días',
    desc: 'Precios, horarios y disponibilidad: preguntas frecuentes que consumen tiempo del equipo de forma constante.',
  },
  {
    icon: ShoppingCart,
    title: 'Oportunidades comerciales que se pierden',
    desc: 'Clientes que consultan y no regresan porque no recibieron una respuesta a tiempo o no encontraron la información clara.',
  },
  {
    icon: Hourglass,
    title: 'Exceso de tareas operativas',
    desc: 'Gran parte de la jornada se destina a tareas repetitivas que no aportan directamente al crecimiento del negocio.',
  },
  {
    icon: User,
    title: 'El funcionamiento depende de una sola persona',
    desc: 'Cuando toda la información y las decisiones pasan por una única persona, la empresa se vuelve difícil de escalar.',
  },
];

export function ProblemSection() {
  return (
    <section className="py-20 md:py-28 bg-kuma-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-14"
        >
          <span className="inline-block text-kuma-gold text-sm font-semibold uppercase tracking-widest mb-4">Situaciones comunes en empresas en crecimiento</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-kuma-white mb-4 tracking-tight leading-tight">
            Cuando los procesos no están organizados, gran parte del tiempo se destina a resolver tareas operativas en lugar de hacer crecer el negocio
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-kuma-dark-card border border-kuma-border rounded-2xl p-6 hover:border-kuma-border-light transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-kuma-gold/10 flex items-center justify-center mb-4">
                <p.icon size={20} className="text-kuma-gold" />
              </div>
              <h3 className="text-lg font-bold text-kuma-white mb-2">{p.title}</h3>
              <p className="text-sm text-kuma-text-dim leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-kuma-text-dim mt-12 text-lg max-w-3xl mx-auto"
        >
          <span className="text-kuma-white font-semibold">Todos estos problemas pueden resolverse</span> mediante procesos simples y las herramientas adecuadas.
        </motion.p>
      </div>
    </section>
  );
}
