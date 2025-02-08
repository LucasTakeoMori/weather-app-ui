import type { Metadata } from 'next'
 
import { Spline_Sans } from 'next/font/google'
import './globals.css'

const splieSans = Spline_Sans({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Previsão do Tempo',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={` ${splieSans.className} antialiased min-h-screen `}
      >
        {children}
      </body>
    </html>
  )
}