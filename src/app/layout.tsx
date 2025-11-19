import type { Metadata } from 'next';
import Script from 'next/script';
import { DM_Sans as DMSans } from 'next/font/google';
import './globals.css';
import Transition from '@/components/transition';

const dmSans = DMSans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Capital Placas',
  description: 'Crie a comunicação visual de sua empresa conosco!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17040995173"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-17040995173');
          `}
        </Script>
        <Transition>{children}</Transition>
      </body>
    </html>
  );
}
