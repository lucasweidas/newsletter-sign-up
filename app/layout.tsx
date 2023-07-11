import './globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-roboto' });

export const metadata: Metadata = {
  title: 'Frontend Mentor | Newsletter sign-up',
  description: 'Join 60,000+ product managers receiving monthly updates.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/images/favicon.png" />
      </head>
      <body className={`${roboto.variable} font-sans`}>{children}</body>
    </html>
  );
}
