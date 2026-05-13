import type { Metadata } from 'next'
import { Archivo_Narrow, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const archivoNarrow = Archivo_Narrow({
  variable: '--font-archivo-narrow',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://jambike.com.br'),
  title: {
    template: '%s | Jambike Ride Wear',
    default: 'Jambike Ride Wear — Confecção Esportiva Jundiaí',
  },
  description:
    'Roupas de ciclismo de alta performance. MTB, Road, Enduro e uniformes personalizados para equipes. Feito em Jundiaí-SP desde 2008.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${archivoNarrow.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-bg-dark font-sans antialiased">{children}</body>
    </html>
  )
}
