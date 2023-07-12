import './globals.css';
import localFont from 'next/font/local';
import type { Metadata } from 'next';

const roboto = localFont({
  src: [
    { path: './fonts/Roboto-Regular.ttf', weight: '400', style: 'normal' },
    { path: './fonts/Roboto-Bold.ttf', weight: '700', style: 'normal' },
  ],
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'Frontend Mentor | Newsletter sign-up',
  description: 'Join 60,000+ product managers receiving monthly updates.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${roboto.variable} font-sans`}>
      <head>
        <link rel="icon" type="image/png" href="/images/favicon.png" />
      </head>
      <body className="bg-white desktop:bg-gray-400">{children}</body>
    </html>
  );
}
