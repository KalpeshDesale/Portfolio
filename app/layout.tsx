import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type React from 'react';
import DynamicBackground from './components/DynamicBackground';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kalpesh Desale',
  description:
    'Portfolio of Kalpesh Desale, a senior frontend developer specializing in React.js and TypeScript',
  generator: 'v0.dev',
  icons: {
    icon: '/kd_logo.png', // Path to your favicon in the public folder
    shortcut: '/kd_logo.png',
    apple: '/kd_logo.png', // Optional, for Apple devices
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body
        className={`${inter.className} bg-gray-50 text-gray-900 overflow-x-hidden`}
      >
        <DynamicBackground />
        {children}
      </body>
    </html>
  );
}

import './globals.css';
