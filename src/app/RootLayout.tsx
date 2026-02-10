import './globals.css'
import { type Metadata } from 'next'
import { MainHeader } from './MainHeader';
import { MainFooter } from './MainFooter';

export const metadata: Metadata = {
  title: 'Weather History',
  description: 'Weather History',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: '/public/favicon.ico',
  },
}

export function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className="dark">
      <body className="grid grid-rows-[min-content_1fr_min-content] ">
        <MainHeader />
        {children}
        <MainFooter />
      </body>
    </html>
  );
}
