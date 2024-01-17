import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.scss';

const openSans = Open_Sans({ subsets: ['latin'], variable: '--var-openSans' })

export const metadata: Metadata = {
  title: 'Calendar',
  description: 'Technical task',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={openSans.className}>{children}</body>
    </html>
  )
}
