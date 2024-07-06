import Navbar from './components/navbar'
import Footer from './components/footer'
import './globals.css'


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

