import type { Metadata } from 'next'
import './globals.css'
import { SmoothScroll } from '@/components/SmoothScroll'

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
    <html lang="en" className="font-sans">      
      <body className="bg-cream text-warm-800 antialiased selection:bg-medical-200 selection:text-medical-900">        
        <SmoothScroll />
        {children}
      </body>
    </html>
  )
}