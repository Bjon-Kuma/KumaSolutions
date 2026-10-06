'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Check, Star } from 'lucide-react';

const plans = [
  {
    name: 'Presencia Digital',
    tagline: 'Presencia digital profesional',
    problem: 'Para empresas que aún no cuentan con presencia online y pierden clientes que no logran encontrarlas.',
    popular: false,
    features: [
      'Sitio web profesional a medida',
      'Catálogo de productos o servicios siempre disponible',
      'Posicionamiento en Google',
      'Botón de contacto directo',
      'Diseño adaptado a dispositivos móviles',
      'Entrega lista para funcionar, sin complicaciones',
    ],
    cta: 'Consultar',
  },
  {
    name: 'Presencia Digital Plus',
    tagline: 'Organización y atención automatizada',
    problem: 'Para empresas que ya venden pero gestionan de forma manual y pierden clientes por no llegar a responder a tiempo.',
    popular: true,
    features: [
      'Todo lo incluido en el plan anterior',
      'Reservas y turnos automatizados',
      'Base de clientes centralizada',
      'Respuestas automáticas en WhatsApp',
      'Recordatorios automáticos que reducen ausencias',
      'Panel de control para seguimiento del negocio',
    ],
    cta: 'Consultar',
  },
  {
    name: 'Transformación Digital',
    tagline: 'Sistemas preparados para crecer',
    problem: 'Para empresas que buscan escalar de forma ordenada: más ventas, más clientes y toda la operación bajo control.',
    popular: false,
    features: [
      'Todo lo incluido en el plan anterior',
      'Tarjetas inteligentes (NFC) personalizadas',
      'Soluciones diseñadas a medida de la empresa',
      'Integración de herramientas sin duplicar tareas',
      'Gestión de entregas y pedidos',
      'Menor carga operativa y mayor eficiencia',
      'Acompañamiento cercano y prioritario',
    ],
    cta: 'Consultar',
  },
];

export function ServicesSection() {
  return (
    <section id="planes" className="py-20 md:py-28 bg-kuma-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-14"
        >
          <span className="inline-block text-kuma-gold text-sm font-semibold uppercase tracking-widest mb-4">Por dónde empezar</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-kuma-white mb-4 tracking-tight">
            Una solución para cada etapa de la empresa
          </h2>
          <p className="text-lg text-kuma-text-dim">
            No se trata de paquetes cerrados. El trabajo comienza por lo más útil en cada momento y se amplía de forma gradual.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl p-6 md:p-8 transition-all ${
                plan.popular
                  ? 'bg-kuma-dark-card border-2 border-kuma-gold shadow-gold'
                  : 'bg-kuma-dark-card border border-kuma-border hover:border-kuma-border-light'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-kuma-gold text-kuma-dark text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1">
                  <Star size={12} fill="currentColor" />
                  El más elegido
                </div>
              )}

              <h3 className="text-xl font-bold text-kuma-white mb-1">{plan.name}</h3>
              <p className="text-sm text-kuma-gold font-medium mb-3">{plan.tagline}</p>
              <p className="text-sm text-kuma-text-dim mb-6 leading-relaxed">{plan.problem}</p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm">
                    <Check size={16} className="text-kuma-gold mt-0.5 flex-shrink-0" />
                    <span className="text-kuma-text">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/59892773422?text=${encodeURIComponent('Hola! Me interesa el plan "' + plan.name + '"')}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all ${
                  plan.popular
                    ? 'bg-kuma-gold hover:bg-kuma-gold-hover text-kuma-dark shadow-gold'
                    : 'bg-kuma-dark-surface hover:bg-kuma-border-light text-kuma-text border border-kuma-border'
                }`}
              >
                {plan.cta}
                <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-kuma-text-dim mt-10 text-sm"
        >
          ¿No sabe cuál es la opción adecuada? Escríbanos y lo definimos en conjunto, sin compromiso.
        </motion.p>
      </div>
    </section>
  );
}
