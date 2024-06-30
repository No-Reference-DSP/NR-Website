export const metadata = {
  title: 'No Reference Website',
  description: 'Showcase for all builds',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div>
        <h1>Created in /Layout</h1>
        <p>This will be generated in each of the files throughout the app</p>
        </div>
      
        {children}
      </body>
    </html>
  )
}

