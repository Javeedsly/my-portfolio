import Image from 'next/image';

export default function HomePage() {
  return (
    <div>
      {/* Hero Bölməsi */}
      <section className="text-center py-20">
        <Image
          src="/profile.jpg" 
          alt="Mənim Şəklim"
          width={150}
          height={150}
          className="rounded-full mx-auto mb-4"
        />
        <h1 className="text-4xl font-bold mb-2">Salam, Mən [Süleymanlı Cavid]</h1>
        <h2 className="text-2xl text-gray-600 mb-4">Backend Developer / DevOps</h2>
        <p className="max-w-xl mx-auto mb-6">
          []
        </p>
        <a 
          href="/cv.pdf" 
          download
          className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          upload CV
        </a>
      </section>

      {}
    </div>
  );
}