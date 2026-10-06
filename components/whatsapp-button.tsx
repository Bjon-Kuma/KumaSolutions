'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import Link from 'next/link';

export function WhatsAppButton() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Link
        href="https://wa.me/59892773422?text=Hola%21%20Quiero%20informaci%C3%B3n%20sobre%20KUMA"
        target="_blank"
        className="group flex items-center gap-3"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-kuma-green rounded-full animate-ping opacity-25" />
          <div className="relative w-14 h-14 bg-kuma-green hover:bg-kuma-green-hover rounded-full flex items-center justify-center shadow-soft-lg transition-all hover:scale-110">
            <MessageCircle className="w-7 h-7 text-white" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
