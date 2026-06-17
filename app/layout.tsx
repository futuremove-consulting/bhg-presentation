import type { Metadata } from 'next';
import '@futuremove/ui/styles';
import './globals.css';
import { TabNavigation } from '@/components/TabNavigation';
import { Header } from '@/components/Header';

export const metadata: Metadata = {
  title: 'BHG — Executive Intelligence Brief',
  description: 'FutureMove Strategic Consulting Presentation',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=DM+Serif+Display:ital@0;1&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-black text-white">
        <Header />
        <TabNavigation />
        <main className="pt-20 pb-16 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}