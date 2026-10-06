'use client';

import { motion } from 'framer-motion';
import {
  Globe, FileText, Search, Layout,
  CalendarCheck, ClipboardList, Package, Settings,
  MessageCircle, Users, RefreshCw, Bell,
  CreditCard, QrCode, Smartphone, BookOpen,
  BarChart3, Truck, Cog, Plug,
} from 'lucide-react';

const categories = [
  {
    title: 'Presencia digital profesional',
    desc: 'Una imagen sólida que genera confianza y atrae nuevos clientes, incluso fuera del horario de atención.',
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
    items: [
      { icon: Globe, label: 'Sitio web profesional a medida' },
      { icon: FileText, label: 'Catálogo de productos y servicios' },
      { icon: Search, label: 'Posicionamiento en Google' },
      { icon: Layout, label: 'Diseño orientado a la conversión' },
    ],
  },
  {
    title: 'Organización operativa',
    desc: 'Procesos ordenados y centralizados para reducir el trabajo manual y evitar la pérdida de información.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
    items: [
      { icon: CalendarCheck, label: 'Reservas y turnos online' },
      { icon: ClipboardList, label: 'Formularios de gestión' },
      { icon: Package, label: 'Seguimiento de pedidos' },
      { icon: Settings, label: 'Flujos de trabajo organizados' },
    ],
  },
  {
    title: 'Atención comercial automatizada',
    desc: 'Respuestas más rápidas y un seguimiento constante sin depender de la disponibilidad de una sola persona.',
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
    items: [
      { icon: MessageCircle, label: 'Respuestas automáticas' },
      { icon: Users, label: 'Base de clientes centralizada' },
      { icon: RefreshCw, label: 'Menos consultas repetidas' },
      { icon: Bell, label: 'Recordatorios automáticos' },
    ],
  },
  {
    title: 'Integración entre el mundo físico y el digital',
    desc: 'Puentes simples entre el local y lo digital para que cualquier cliente acceda a la empresa en segundos.',
    color: 'text-purple-400',
    bg: 'bg-purple-400/10',
    items: [
      { icon: CreditCard, label: 'Tarjetas inteligentes (NFC)' },
      { icon: QrCode, label: 'Códigos QR' },
      { icon: Smartphone, label: 'Accesos rápidos' },
      { icon: BookOpen, label: 'Fichas digitales' },
    ],
  },
  {
    title: 'Sistemas preparados para acompañar el crecimiento',
    desc: 'Herramientas de control y escala para tomar mejores decisiones y prepararse para la próxima etapa.',
    color: 'text-rose-400',
    bg: 'bg-rose-400/10',
    items: [
      { icon: BarChart3, label: 'Un panel de control diseñado a medida' },
      { icon: Truck, label: 'Gestión de entregas' },
      { icon: Cog, label: 'Soluciones a medida' },
      { icon: Plug, label: 'Conectamos todas tus redes' },
    ],
  },
];

export function SolutionSection() {
  return (
    <section id="soluciones" className="py-20 md:py-28 bg-kuma-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-14"
        >
          <span className="inline-block text-kuma-gold text-sm font-semibold uppercase tracking-widest mb-4">Soluciones diseñadas para optimizar empresas</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-kuma-white mb-4 tracking-tight">
            Resolvemos aquello que hoy consume tiempo y limita las ventas
          </h2>
          <p className="text-lg text-kuma-text-dim">
            Cada empresa se encuentra en una etapa distinta. El trabajo comienza por la necesidad más urgente y se amplía de forma gradual.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`bg-kuma-dark-card border border-kuma-border rounded-2xl p-6 hover:border-kuma-border-light transition-all ${
                i === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <h3 className={`text-lg font-bold mb-1 ${cat.color}`}>{cat.title}</h3>
              <p className="text-sm text-kuma-text-dim mb-5">{cat.desc}</p>
              <div className="grid grid-cols-1 gap-3">
                {cat.items.map((item, j) => (
                  <div key={j} className="flex items-center gap-2.5">
                    <div className={`w-7 h-7 rounded-md ${cat.bg} flex items-center justify-center flex-shrink-0`}>
                      <item.icon size={14} className={cat.color} />
                    </div>
                    <span className="text-sm text-kuma-text font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
