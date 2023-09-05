import Header from '@/components/header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hunter x Hunter - Cards Game',
  description: 'A cards game based on Hunter x Hunter anime.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body 
        className={`${inter.className} bg-gray-50 relative`}
      >
        <div 
          className='bg-green-500 bg-opacity-10 absolute -z-10 h-[50%] w-[50%] rounded-full blur-[10rem] '
        ></div>

        <Header />
        {children}
      </body>
    </html>
  )
}
