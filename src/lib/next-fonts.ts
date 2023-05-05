import { Inter, Poppins } from 'next/font/google';

export const poppinsFont = Poppins({
  weight: ['600', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export const interFont = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});
