import './globals.css';

import type { Metadata } from 'next';

import { ThemeRegistry } from '@/theme/ThemeRegistry';

export const metadata: Metadata = {
  title: 'Socialize',
  description: 'Generated with MUI',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <ThemeRegistry>
        <body>{children}</body>
      </ThemeRegistry>
    </html>
  );
}
