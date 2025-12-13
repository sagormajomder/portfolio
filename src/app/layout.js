import { Noto_Sans, Space_Grotesk } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const notoSans = Noto_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata = {
  title: 'Sagor Majomder',
  description: 'Sagor Majomder Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0'
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${notoSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
