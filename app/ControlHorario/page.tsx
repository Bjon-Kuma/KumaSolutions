import type { Metadata } from 'next'
import { ControlHorarioProduct } from '@/components/control-horario-product'
import { WhatsAppButton } from '@/components/whatsapp-button'

export const metadata: Metadata = {
  title: 'Control Horario | KUMA Solutions',
  description:
    'Fichaje desde el celular con QR en la entrada, portal para el responsable y tótem de acceso. Pruebe la demo interactiva.',
  openGraph: {
    title: 'Control Horario | KUMA Solutions',
    description:
      'Fichaje desde el celular con QR en la entrada, portal para el responsable y tótem de acceso.',
    images: ['/logos/kuma-full.jpg'],
    type: 'website',
    locale: 'es_UY',
  },
}

export default function ControlHorarioPage() {
  return (
    <>
      <ControlHorarioProduct />
      <WhatsAppButton />
    </>
  )
}
