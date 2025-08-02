import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'QuantumEdgeX - Digital Transformation & Technology Solutions',
  description: 'Unlock new possibilities and scale your business with our tech expertise and business intelligence. Leading provider of cloud services, DevOps engineering, data analytics, and full stack development.',
  keywords: 'digital transformation, cloud services, DevOps, data analytics, full stack development, business intelligence',
  authors: [{ name: 'QuantumEdgeX' }],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}