'use client'

import { useState, useEffect } from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import { initNativeBridge } from './utils/nativeBridge';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  const [bridgeInitialized, setBridgeInitialized] = useState(false);

  useEffect(() => {
    // Initialize the native bridge without OneSignal callback
    initNativeBridge();
    setBridgeInitialized(true);
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Wooltari Web App</title>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
