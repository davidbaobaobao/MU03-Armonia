import type { Metadata } from 'next'
import { Noto_Serif, Manrope } from 'next/font/google'
import './globals.css'

const notoSerif = Noto_Serif({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-display',
})

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  display: 'swap',
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: 'Escuela Armonía | Clases de Piano en Valencia',
  description:
    'Escuela de piano en Valencia para todas las edades desde los 8 años. Clases presenciales individuales, técnica clásica, preparación ABRSM.',
  openGraph: {
    title: 'Escuela Armonía | Clases de Piano en Valencia',
    description:
      'Escuela de piano en Valencia para todas las edades desde los 8 años. Clases presenciales individuales, técnica clásica, preparación ABRSM.',
    locale: 'es_ES',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${notoSerif.variable} ${manrope.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Saltar al contenido principal
        </a>
        {children}
      </body>
    </html>
  )
}
