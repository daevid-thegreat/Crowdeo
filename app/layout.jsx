import './globals.css';
import { Providers } from "./providers";
import React from 'react';

export const metadata = {
  title: 'Crowdoe',
  description: 'Review your favourite companies',
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" className='dark'>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
