import './globals.css'
import style from './layout.module.css'
import type { Metadata } from 'next'
import Header from './(header)/Header'
import { Inter } from 'next/font/google'
import Footer from './(footer)/Footer'
import CopyRight from './(footer)/CopyRight'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: "%s | 学生団体ALOHA",
    default: "学生団体ALOHA",
  },
  description: 'ALOHAは、難関大への進学を目指す沖縄の高校生を応援する東大発の学生団体です。',
  authors: [{name: "学生団体ALOHA"}],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className={style.inter_className}>
          {children}
          <Footer />
          <CopyRight />
        </div>
        <Analytics />
      </body>
    </html>
  )
}
