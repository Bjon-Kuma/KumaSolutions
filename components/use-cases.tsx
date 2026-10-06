'use client';

import { motion } from 'framer-motion';
import { Clock3, Scissors, PawPrint, Wrench, UtensilsCrossed, Scale, Shirt } from 'lucide-react';

const cases = [
  {
    icon: Clock3,
    business: 'Carrasco Boating',
    problem: 'El control de entradas y salidas se llevaba de forma manual, dificultando el seguimiento de los horarios.',
    solution: 'Un sistema centralizado para registrar horarios y consultar la información de forma clara.',
    featured: true,
  },
  {
    icon: Scissors,
    business: 'Barbería',
    problem: 'Gran parte del día se destina a responder consultas de disponibilidad por WhatsApp.',
    solution: 'Los clientes reservan su turno online y reciben recordatorios automáticos. Menos mensajes y menos ausencias.',
  },
  {
    icon: PawPrint,
    business: 'Veterinaria',
    problem: 'Las fichas de cada paciente se encuentran dispersas en papeles y cuadernos.',
    solution: 'El historial de cada paciente queda centralizado en un solo lugar, con avisos automáticos de vacunas y controles.',
  },
  {
    icon: Wrench,
    business: 'Ferretería',
    problem: 'Las consultas sobre precios y disponibilidad de stock se repiten constantemente.',
    solution: 'Un catálogo digital actualizado que el cliente consulta de forma autónoma, sin necesidad de escribir.',
  },
  {
    icon: UtensilsCrossed,
    business: 'Restaurante',
    problem: 'El menú cambia con frecuencia y debe reimprimirse o enviarse por foto.',
    solution: 'Menú digital con QR en la mesa: se actualiza en cualquier momento y agiliza la toma de pedidos.',
  },
  {
    icon: Scale,
    business: 'Estudio jurídico',
    problem: 'Los nuevos clientes llegan sin la información necesaria para avanzar.',
    solution: 'Un formulario que organiza las consultas antes de la reunión y reduce las idas y vueltas.',
  },
  {
    icon: Shirt,
    business: 'Tienda de ropa',
    problem: 'Las ventas se realizan por Instagram, pero se pierden oportunidades fuera de horario.',
    solution: 'Una tienda online con catálogo claro que vende de forma autónoma, incluso con el local cerrado.',
  },
];

export function UseCases() {
  return (
    <section id="casos" className="py-20 md:py-28 bg-kuma-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-14"
        >
          <span className="inline-block text-kuma-gold text-sm font-semibold uppercase tracking-widest mb-4">Ejemplos reales</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-kuma-white mb-4 tracking-tight">
            Cómo se aplica en distintos tipos de empresa
          </h2>
          <p className="text-lg text-kuma-text-dim">
            Casos concretos y ejemplos de las situaciones que resolvemos habitualmente.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-kuma-dark-card border border-kuma-border rounded-2xl p-6 hover:border-kuma-gold/30 transition-all"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-kuma-gold/10 flex items-center justify-center flex-shrink-0">
                  <c.icon size={22} className="text-kuma-gold" />
                </div>
                <div>
                  {c.featured && (
                    <span className="text-[10px] font-bold uppercase tracking-widest text-kuma-gold">Proyecto realizado</span>
                  )}
                  <h3 className="text-lg font-bold text-kuma-white">{c.business}</h3>
                </div>
              </div>
              <p className="text-sm text-kuma-text-dim leading-relaxed mb-4">
                <span className="text-kuma-text font-semibold">Situación inicial:</span> {c.problem}
              </p>
              <p className="text-sm text-kuma-text-dim leading-relaxed">
                <span className="text-kuma-gold font-semibold">Solución implementada:</span> {c.solution}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-kuma-text-dim mt-12 text-lg"
        >
          ¿Su rubro no aparece en la lista?{' '}
          <a
            href="https://wa.me/59892773422?text=Hola%21%20Quiero%20saber%20c%C3%B3mo%20funcionar%C3%ADa%20en%20mi%20empresa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-kuma-gold font-semibold hover:text-kuma-gold-light transition-colors"
          >
            Cuéntenos a qué se dedica y le mostramos cómo puede ayudar.
          </a>
        </motion.p>
      </div>
    </section>
  );
}
