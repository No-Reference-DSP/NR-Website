import Navbar from './ui/navbar'
import Footer from './ui/footer'
import './globals.css'
import { Viewport } from 'next'

// viewport test
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1, 
  userScalable: true
}

export const metadata = {
  title: 'No Reference',
  description: 'Showcase for all builds',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='flex flex-col min-h-screen'>
          <Navbar/>
          {children}
          <Footer/>
      </body>
    </html>
  )
}

