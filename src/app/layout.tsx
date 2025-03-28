import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({ weight: ['400', '700'], style: 'normal', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ChatAI',
  description: 'ChatAI Is here to help you with all your questions.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/favicon.png' />
      </head>
      <body className={poppins.className}>
        <div className='bottom-blur'>
          <div />
        </div>

        {children}
      </body>
    </html>
  );
}
