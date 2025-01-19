'use client';

import type { Metadata } from 'next';
import { DM_Sans as DMSans } from 'next/font/google';
import './globals.css';
import Transition from '@/components/transition';

const dmSans = DMSans({ subsets: ['latin'] });

const metadata: Metadata = {
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
        <Transition>{children}</Transition>
      </body>
    </html>
  );
}
