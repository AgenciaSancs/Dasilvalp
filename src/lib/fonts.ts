import { Oswald } from 'next/font/google';
import localFont from 'next/font/local';

export const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  weight: ['500', '700'],
});

export const futura = localFont({
  src: [
    {
      path: '../fonts/FuturaPT-Book.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/FuturaPT-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/FuturaPT-Heavy.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-futura',
});
