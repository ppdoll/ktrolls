import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const geistSans = Geist({ 
  subsets: ["latin"],
  variable: "--font-geist-sans"
});
const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-geist-mono"
});

export const metadata: Metadata = {
  title: 'KR Tools - 한국인을 위한 스마트 온라인 도구 모음',
  description: 'KR Tools는 네비게이션 카피, 당근마켓 시세 계산기 등 일상에서 유용한 다양한 온라인 도구를 무료로 제공합니다. 간편하고 빠른 서비스를 경험해보세요.',
  keywords: ['온라인 도구', '네비게이션', '당근마켓', '시세 계산기', '무료 도구', 'KR Tools'],
  authors: [{ name: 'KR Tools' }],
  openGraph: {
    title: 'KR Tools - 한국인을 위한 스마트 온라인 도구 모음',
    description: 'KR Tools는 네비게이션 카피, 당근마켓 시세 계산기 등 일상에서 유용한 다양한 온라인 도구를 무료로 제공합니다.',
    url: 'https://krtools.cloud',
    siteName: 'KR Tools',
    locale: 'ko_KR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5300900783303783"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="font-sans antialiased bg-background">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
