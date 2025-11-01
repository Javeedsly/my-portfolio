import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Mənim Portfoliom
        </Link>
        <div className="space-x-4">
          <Link href="/" className="hover:text-gray-300">Ana Səhifə</Link>
          <Link href="/about" className="hover:text-gray-300">Haqqımda</Link>
          <Link href="/projects" className="hover:text-gray-300">Layihələrim</Link>
          <Link href="/contact" className="hover:text-gray-300">Əlaqə</Link>
        </div>
      </div>
    </nav>
  );
}