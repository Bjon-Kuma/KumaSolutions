import type { Metadata } from 'next'
import { headers } from 'next/headers'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const dynamic = 'force-dynamic'

export async function generateMetadata(): Promise<Metadata> {
  const headersList = headers()
  const host = headersList.get('x-forwarded-host') || process.env.SITE_URL || 'https://kuma.digital'
  const baseUrl = host.startsWith('http') ? host : `https://${host}`

  return {
    metadataBase: new URL(baseUrl),
    title: 'KUMA Solutions | Menos tareas, más tiempo para tu negocio',
    description:
      'Ordenamos tu negocio para que trabajes menos, no pierdas clientes y tengas la cabeza más tranquila. Sin tecnicismos y a tu ritmo.',
    keywords:
      'inclusión digital, soluciones digitales, páginas web pymes, catálogos digitales, automatización negocios, NFC, kuma, uruguay, montevideo',
    icons: {
      icon: '/logos/kuma-icon.jpg',
      shortcut: '/logos/kuma-icon.jpg',
      apple: '/logos/kuma-icon.jpg',
    },
    openGraph: {
      title: 'KUMA Solutions | Menos tareas, más tiempo para tu negocio',
      description:
        'Ordenamos tu negocio para que trabajes menos, no pierdas clientes y crezcas. Sin tecnicismos y a tu ritmo.',
      images: ['/logos/kuma-full.jpg'],
      type: 'website',
      locale: 'es_UY',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'KUMA Solutions',
      description: 'Menos tareas, más tiempo para tu negocio',
      images: ['/logos/kuma-full.jpg'],
    },
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="bg-kuma-dark min-h-screen">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
