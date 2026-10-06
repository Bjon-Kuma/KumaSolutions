'use client';

import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    q: '¿Esto sirve para mi empresa?',
    a: 'En la mayoría de los casos, sí. Kuma trabaja con comercios, servicios y profesionales de todos los rubros. Antes de proponer una solución, se analiza cómo funciona hoy la empresa y se indica con claridad de qué manera es posible ayudar.',
  },
  {
    q: '¿Es necesario tener conocimientos técnicos?',
    a: 'No. Ese es justamente el trabajo de Kuma. El equipo puede seguir concentrándose en su actividad mientras la solución se entrega funcionando y lista para usar. Cualquier duda se explica las veces que sea necesario.',
  },
  {
    q: '¿Cuánto demora?',
    a: 'Depende de la necesidad, pero siempre se comienza por algo concreto que pueda verse funcionando en poco tiempo. Se avanza por etapas para que los resultados se noten desde el principio.',
  },
  {
    q: '¿Qué sucede si la empresa ya tiene un sitio web?',
    a: 'Se aprovecha y se mejora, o se incorpora aquello que le falta para que realmente atraiga clientes. No se descarta el trabajo ya realizado.',
  },
  {
    q: '¿Es posible contratar solo una parte?',
    a: 'Sí. No es obligatorio incorporar todo al mismo tiempo. Se comienza por lo más útil en el momento y, si funciona, se amplía de forma gradual. La empresa define el ritmo.',
  },
  {
    q: '¿Quién se ocupa de que todo siga funcionando?',
    a: 'El equipo de Kuma. El acompañamiento continúa después de la entrega, ajustando lo que sea necesario y brindando soporte cuando se requiera.',
  },
];

export function FaqSection() {
  return (
    <section id="preguntas" className="py-20 md:py-28 bg-kuma-dark">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block text-kuma-gold text-sm font-semibold uppercase tracking-widest mb-4">Preguntas frecuentes</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-kuma-white mb-4 tracking-tight">
            Consultas habituales
          </h2>
          <p className="text-lg text-kuma-text-dim">
            Si queda alguna duda, escríbanos por WhatsApp y la resolvemos a la brevedad.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-kuma-dark-card border border-kuma-border rounded-2xl px-6 data-[state=open]:border-kuma-gold/30 transition-colors"
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-bold text-kuma-white hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-kuma-text-dim leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
