import './globals.css'
import { Inter } from 'next/font/google'
import { Navbar, Footer } from '@/components'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'The Mental Library',
  description: 'A community maintained library to promote the sharing of knowledge, tools and importance of mental health.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex gap-5 items-center flex-col`}>
				<Navbar />
				{children}
				<Footer />
			</body>
    </html>
  )
}
