import type { Metadata } from 'next'
import { Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { SmoothScroll } from '@/components/SmoothScroll'

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap'
})

const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-playfair',
  display: 'swap'
})

const mono = JetBrains_Mono({ 
  subsets: ['latin'], 
  variable: '--font-mono',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'MONITOR | Clinical Intelligence Platform',
  description: 'Cascade inference engine for physiological state analysis',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${mono.variable}`}>      
      <body className="font-sans bg-cream text-warm-800 antialiased selection:bg-medical-200 selection:text-medical-900">        
        <SmoothScroll />
        {children}
      </body>
    </html>
  )
}