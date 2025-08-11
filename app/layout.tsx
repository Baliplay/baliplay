import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Baliplay',
  description: 'Created with Baliplay',
  generator: 'v0.dev',
  icons: {
    icon: '/baliplay-new-favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
