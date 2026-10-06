'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Mail, MapPin } from 'lucide-react';

const contactMethods = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+598 92 773 422',
    href: 'https://wa.me/59892773422?text=Hola%21%20Quiero%20informaci%C3%B3n%20de%20KUMA',
    description: 'La forma más rápida',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'Bjon.Kuma@gmail.com',
    href: 'mailto:Bjon.Kuma@gmail.com',
    description: 'Para consultas detalladas',
  },
  {
    icon: MapPin,
    label: 'Ubicación',
    value: 'Montevideo y Canelones',
    href: null,
    description: 'Uruguay',
  },
];

export function ContactSection() {
  return (
    <section id="contacto" className="py-20 md:py-28 bg-kuma-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <span className="inline-block text-kuma-gold text-sm font-semibold uppercase tracking-widest mb-4">Contacto</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-kuma-white mb-3 tracking-tight">
            Comience la transformación de su empresa
          </h2>
          <p className="text-lg text-kuma-text-dim">
            Elija el canal que resulte más conveniente. La respuesta es ágil.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {contactMethods.map((method, index) => {
            const Content = (
              <div className="bg-kuma-dark-card rounded-2xl p-6 border border-kuma-border hover:border-kuma-border-light transition-all hover:-translate-y-1 h-full">
                <div className="w-12 h-12 rounded-xl bg-kuma-gold/10 flex items-center justify-center mb-4">
                  <method.icon className="w-6 h-6 text-kuma-gold" />
                </div>
                <p className="text-xs text-kuma-text-dim uppercase tracking-wider font-semibold mb-1">
                  {method.label}
                </p>
                <p className="text-lg font-bold text-kuma-white mb-1">{method.value}</p>
                <p className="text-sm text-kuma-text-dim">{method.description}</p>
              </div>
            );

            return (
              <motion.div
                key={method.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {method.href ? (
                  <a
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block h-full"
                  >
                    {Content}
                  </a>
                ) : (
                  Content
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
