'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CalendarDays,
  Check,
  ClipboardCheck,
  Clock3,
  ExternalLink,
  LayoutDashboard,
  Moon,
  QrCode,
  ShieldCheck,
  Smartphone,
  UserPlus,
} from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/59892773422?text=Hola%21%20Quiero%20saber%20m%C3%A1s%20sobre%20Control%20Horario%20para%20mi%20empresa';

const demos = [
  {
    id: 'empleado',
    label: 'App del empleado',
    short: 'Empleado',
    icon: Smartphone,
    src: '/ControlHorario/demo/empleado.html',
    frameClass: 'h-[85vh] min-h-[640px] md:h-[880px]',
    title: 'La jornada, clara de un vistazo',
    description:
      'Cada persona registra entrada, pausas, descansos y salida desde su celular. El tiempo trabajado se ve en grande y el cierre de la jornada siempre pide confirmación.',
    points: [
      'Contador de jornada con estados claros: trabajando, en pausa o en descanso',
      'Fichaje escaneando el QR del tótem del lugar de trabajo',
      'Historial de fichajes y calendario con horas efectivas por día',
      'Solicitud de ausencias y vacaciones desde la app',
    ],
    hint: 'Pruebe los estados con los botones Trabajando, Pausa, Descanso y Jornada cerrada.',
  },
  {
    id: 'manager',
    label: 'Portal del mánager',
    short: 'Mánager',
    icon: LayoutDashboard,
    src: '/ControlHorario/demo/manager.html',
    frameClass: 'h-[85vh] min-h-[640px] md:h-[820px]',
    title: 'Todo el equipo, en tiempo real',
    description:
      'El responsable ve quién está trabajando, quién está en pausa y quién falta. Planifica turnos, aprueba solicitudes y exporta reportes sin planillas sueltas.',
    points: [
      'Resumen del día y jornada en vivo de todo el equipo',
      'Turnos fijos, recurrentes, rotativos y nocturnos',
      'Ausencias, vacaciones y correcciones con registro de auditoría',
      'Reportes de horas efectivas exportables',
    ],
    hint: 'Navegue por Hoy, Empleados, Turnos, Fichajes y Reportes. Los datos son ficticios.',
  },
  {
    id: 'totem',
    label: 'Tótem de acceso',
    short: 'Tótem',
    icon: QrCode,
    src: '/ControlHorario/demo/totem.html',
    frameClass: 'h-[85vh] min-h-[640px] md:h-[720px]',
    title: 'Un punto de fichaje en la entrada',
    description:
      'Una tablet en la entrada muestra un código QR que se renueva cada 60 segundos. Los funcionarios lo escanean con la app; servicios e invitados se registran en el mismo tótem.',
    points: [
      'QR temporal que cambia cada minuto para evitar fichajes a distancia',
      'Ingreso con código personal cuando no se puede escanear',
      'Registro de servicios e invitados, con aprobación del responsable',
      'Modo claro, oscuro o automático según la hora',
    ],
    hint: 'Toque Funcionarios, Servicios o Invitados para ver cada flujo.',
  },
] as const;

type DemoId = (typeof demos)[number]['id'];

const benefits = [
  {
    icon: Clock3,
    title: 'Horas reales, sin planillas',
    text: 'Entradas, pausas y salidas quedan registradas al momento. Se terminan las planillas en papel y las horas reconstruidas de memoria.',
  },
  {
    icon: QrCode,
    title: 'Fichaje en el lugar de trabajo',
    text: 'El QR del tótem cambia cada minuto, así el registro se hace en la sede y no desde cualquier lugar.',
  },
  {
    icon: CalendarDays,
    title: 'Turnos y ausencias en un solo lugar',
    text: 'Horarios, vacaciones y licencias se gestionan en el mismo sistema que los fichajes.',
  },
  {
    icon: ClipboardCheck,
    title: 'Correcciones con trazabilidad',
    text: 'Cada corrección queda registrada con quién la hizo, cuándo y por qué.',
  },
  {
    icon: UserPlus,
    title: 'Servicios e invitados',
    text: 'Proveedores y visitas se registran en el tótem y el responsable aprueba su ingreso.',
  },
  {
    icon: Moon,
    title: 'Pensado para el celular',
    text: 'Botones grandes, lectura clara y modo oscuro para usar en cualquier turno.',
  },
];

export function ControlHorarioProduct() {
  const [active, setActive] = useState<DemoId>('empleado');
  const demo = demos.find((d) => d.id === active) ?? demos[0];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 md:pt-36 pb-16 md:pb-20 overflow-hidden bg-kuma-dark">
        <div className="absolute top-20 -right-40 w-[500px] h-[500px] bg-kuma-gold/5 rounded-full blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(212,160,23,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,160,23,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-kuma-gold/10 border border-kuma-gold/20 px-4 py-2 rounded-full text-sm text-kuma-gold mb-8"
            >
              <Clock3 size={16} />
              <span className="font-medium">Productos · Control Horario</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-kuma-white leading-[1.05] tracking-tight mb-6"
            >
              El control de horario de su equipo,{' '}
              <span className="text-kuma-gold">claro para todos.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-kuma-text-dim mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Fichaje desde el celular con QR en la entrada, portal para el responsable y tótem de acceso.
              Tres piezas que trabajan juntas para saber quién está, cuántas horas se trabajaron y qué falta revisar.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="#demo"
                className="inline-flex items-center justify-center gap-2 bg-kuma-gold hover:bg-kuma-gold-hover text-kuma-dark px-7 py-4 rounded-xl font-bold transition-all shadow-gold hover:shadow-gold-md"
              >
                Probar la demo
                <ArrowRight size={18} />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-kuma-border-light hover:border-kuma-gold/50 text-kuma-white px-7 py-4 rounded-xl font-semibold transition-all"
              >
                Consultar para mi empresa
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Demo */}
      <section id="demo" className="py-16 md:py-24 bg-kuma-navy scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-10"
          >
            <span className="inline-block text-kuma-gold text-sm font-semibold uppercase tracking-widest mb-4">
              Demo interactiva
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-kuma-white mb-4 tracking-tight">
              Pruebe las tres pantallas
            </h2>
            <p className="text-lg text-kuma-text-dim">
              Son demostraciones navegables con datos ficticios: no se registran fichajes ni se guarda información.
            </p>
          </motion.div>

          <div
            role="tablist"
            aria-label="Pantallas de Control Horario"
            className="grid grid-cols-3 gap-2 p-1.5 mb-8 max-w-2xl mx-auto bg-kuma-dark-card border border-kuma-border rounded-2xl"
          >
            {demos.map((d) => {
              const selected = d.id === active;
              return (
                <button
                  key={d.id}
                  id={`tab-${d.id}`}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls={`panel-${d.id}`}
                  onClick={() => setActive(d.id)}
                  className={`flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2 px-2 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kuma-gold ${
                    selected
                      ? 'bg-kuma-gold text-kuma-dark shadow-gold'
                      : 'text-kuma-text-dim hover:text-kuma-white hover:bg-kuma-dark-surface'
                  }`}
                >
                  <d.icon size={18} />
                  <span className="hidden sm:inline">{d.label}</span>
                  <span className="sm:hidden">{d.short}</span>
                </button>
              );
            })}
          </div>

          <div
            id={`panel-${demo.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${demo.id}`}
            className="grid lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)] gap-6 lg:gap-8 items-start"
          >
            <div className="bg-kuma-dark-card border border-kuma-border rounded-2xl p-6 lg:sticky lg:top-24">
              <div className="w-11 h-11 rounded-xl bg-kuma-gold/10 flex items-center justify-center mb-4">
                <demo.icon size={22} className="text-kuma-gold" />
              </div>
              <h3 className="text-xl font-bold text-kuma-white mb-3">{demo.title}</h3>
              <p className="text-sm text-kuma-text-dim leading-relaxed mb-5">{demo.description}</p>
              <ul className="space-y-3 mb-6">
                {demo.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm text-kuma-text leading-relaxed">
                    <Check size={18} className="text-kuma-gold flex-shrink-0 mt-0.5" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-kuma-text-dim leading-relaxed border-t border-kuma-border pt-4 mb-5">
                {demo.hint}
              </p>
              <a
                href={demo.src}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-kuma-gold hover:text-kuma-gold-light transition-colors"
              >
                Abrir en pantalla completa
                <ExternalLink size={15} />
              </a>
            </div>

            <div className="rounded-2xl overflow-hidden border border-kuma-border-light bg-kuma-dark-card shadow-soft-lg">
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-kuma-border bg-kuma-dark-surface">
                <span className="w-2.5 h-2.5 rounded-full bg-kuma-border-light" />
                <span className="w-2.5 h-2.5 rounded-full bg-kuma-border-light" />
                <span className="w-2.5 h-2.5 rounded-full bg-kuma-border-light" />
                <span className="ml-2 text-xs text-kuma-text-dim truncate">{demo.label} · demo</span>
              </div>
              <iframe
                key={demo.id}
                src={demo.src}
                title={`Demo de Control Horario: ${demo.label}`}
                className={`block w-full bg-white ${demo.frameClass}`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-28 bg-kuma-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-14"
          >
            <span className="inline-block text-kuma-gold text-sm font-semibold uppercase tracking-widest mb-4">
              Qué resuelve
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-kuma-white mb-4 tracking-tight">
              Menos planillas, menos dudas sobre las horas
            </h2>
            <p className="text-lg text-kuma-text-dim">
              Un sistema centralizado para registrar horarios y consultar la información de forma clara.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-kuma-dark-card border border-kuma-border rounded-2xl p-6 hover:border-kuma-gold/30 transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-kuma-gold/10 flex items-center justify-center mb-5">
                  <b.icon size={22} className="text-kuma-gold" />
                </div>
                <h3 className="text-lg font-bold text-kuma-white mb-2">{b.title}</h3>
                <p className="text-sm text-kuma-text-dim leading-relaxed">{b.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-kuma-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-kuma-dark-card border border-kuma-gold/20 rounded-3xl p-8 md:p-12 text-center shadow-gold"
          >
            <ShieldCheck size={36} className="text-kuma-gold mx-auto mb-5" />
            <h2 className="text-2xl md:text-4xl font-extrabold text-kuma-white mb-4 tracking-tight">
              ¿Quiere ordenar el control de horario de su empresa?
            </h2>
            <p className="text-kuma-text-dim text-lg mb-8 max-w-2xl mx-auto">
              Lo adaptamos a sus turnos, sedes y forma de trabajo. Escríbanos y coordinamos una demostración.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-kuma-gold hover:bg-kuma-gold-hover text-kuma-dark px-8 py-4 rounded-xl font-bold transition-all shadow-gold hover:shadow-gold-md"
            >
              Coordinar una demostración
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
