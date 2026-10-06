'use client';

import Link from 'next/link';
import { MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-kuma-dark-card border-t border-kuma-border text-kuma-text py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-10">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex flex-col leading-tight mb-4 group">
              <span className="text-2xl font-extrabold tracking-tight text-kuma-white group-hover:text-kuma-gold transition-colors">
                KUMA
              </span>
              <span className="text-xs text-kuma-text-dim font-medium tracking-widest -mt-0.5">
                SOLUTIONS
              </span>
            </Link>
            <p className="text-kuma-text-dim text-sm leading-relaxed max-w-xs">
Ayudamos a las empresas a trabajar mejor: procesos más simples, mejor organización y tecnología aplicada para crecer.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-kuma-white mb-4 text-sm uppercase tracking-wider">
              Navegación
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/#soluciones" className="text-kuma-text-dim hover:text-kuma-gold transition-colors">
                  Soluciones
                </Link>
              </li>
              <li>
                <Link href="/#trabajos" className="text-kuma-text-dim hover:text-kuma-gold transition-colors">
                  Trabajos
                </Link>
              </li>
              <li>
                <Link href="/#casos" className="text-kuma-text-dim hover:text-kuma-gold transition-colors">
                  Casos
                </Link>
              </li>
              <li>
                <Link href="/#planes" className="text-kuma-text-dim hover:text-kuma-gold transition-colors">
                  Planes
                </Link>
              </li>
              <li>
                <Link href="/#contacto" className="text-kuma-text-dim hover:text-kuma-gold transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-kuma-white mb-4 text-sm uppercase tracking-wider">
              Contacto
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://wa.me/59892773422"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-kuma-text-dim hover:text-kuma-gold transition-colors"
                >
                  WhatsApp: +598 92 773 422
                </a>
              </li>
              <li>
                <a
                  href="mailto:Bjon.Kuma@gmail.com"
                  className="text-kuma-text-dim hover:text-kuma-gold transition-colors"
                >
                  Bjon.Kuma@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-kuma-text-dim">
                <MapPin size={14} />
                <span>Montevideo – Uruguay</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-kuma-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-sm">
            <p className="text-kuma-text-dim">
              © 2025 KUMA Solutions. Todos los derechos reservados.
            </p>
            <p className="text-kuma-text-dim">
              Servicios provistos por{' '}
              <span className="text-kuma-text font-medium">ABC Activas SRL</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
