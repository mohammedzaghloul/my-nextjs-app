import './globals.css';
import Navbar from '@/components/Navbar';
import { ReactNode } from 'react'; // أضف هذا الاستيراد

export const metadata = {
  title: 'My Next.js App',
  description: 'A simple Next.js app with multiple pages',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}