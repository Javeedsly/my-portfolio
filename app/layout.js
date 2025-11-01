import './globals.css';
import Navbar from '@/components/Navbar'; 
import Footer from '@/components/Footer'; 

export const metadata = {
  title: 'Mənim Portfoliom',
  description: 'Next.js ilə yaradıldı',
};

export default function RootLayout({ children }) {
  return (
    <html lang="az">
      <body>
        <Navbar /> {}
        <main className="container mx-auto p-4">
          {children} 
        </main>
        <Footer /> {}
      </body>
    </html>
  );
}