import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Layout from '../components/Layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Omar Dibba - Blockchain Developer',
  description: 'Portfolio of Omar Dibba, an innovative Web3, Frontend, and AI Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
