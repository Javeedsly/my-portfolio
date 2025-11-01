import Image from 'next/image';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="text-center py-20">
        {/* NOTE: You are referencing "/profile.jpg", but this file was not uploaded.
          Make sure to add "profile.jpg" to your /public folder.
        */}
        <Image
          src="/profile.jpg" 
          alt="My Profile Picture"
          width={150}
          height={150}
          className="rounded-full mx-auto mb-4"
          priority
        />
        <h1 className="text-4xl font-bold mb-2">Hello, I'm Süleymanlı Cavid</h1>
        <h2 className="text-2xl text-gray-600 mb-4">Backend Developer / DevOps</h2>
        <p className="max-w-xl mx-auto mb-6">
          {/* This description was empty. I've added a placeholder.
            
          */}
          Welcome to my personal portfolio. I specialize in building robust backend systems and optimizing cloud infrastructure.
        </p>
        <a 
          href="/cv.pdf" 
          download
          className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          {/* "upload CV" was translated to "Download CV" as it's more accurate for a user action.
            
          */}
          Download CV
        </a>
      </section>

      {/* You can add more sections here (e.g., Projects, Skills, Contact) */}
    </div>
  );
}