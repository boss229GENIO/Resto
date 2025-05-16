import '../styles/globals.css'

export const metadata = {
  title: 'Restaurant Website',
  description: 'A modern restaurant website built with Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
} 