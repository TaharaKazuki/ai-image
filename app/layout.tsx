import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';

import './globals.css';

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-noto-sans-jp',
  preload: true,
});

export const metadata: Metadata = {
  title: 'AI SaaS Application',
  description: 'AI SaaS Application Service',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        suppressHydrationWarning
        className={`${notoSansJP.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
