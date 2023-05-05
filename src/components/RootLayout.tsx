import { interFont } from '@/lib/next-fonts';
import type { ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return <div className={`${interFont.variable} font-inter`}>{children}</div>;
}
