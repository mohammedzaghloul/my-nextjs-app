import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white p-6">
      <div className="relative w-64 h-64 mb-8">
        <Image
          src="/img.jpg"
          alt="Mohammed Zaghloul"
          fill
          className="object-cover rounded-full border-8 border-white shadow-2xl"
          sizes="(max-width: 256px) 100vw, 256px"
          priority
        />
      </div>
      
      <h1 className="text-5xl font-bold text-gray-800 mb-4 text-center">
        Mohammed Zaghloul
      </h1>
      
      <p className="text-xl text-gray-600 text-center max-w-md mb-12">
        Student | Backend Developer
      </p>
      

      <div className="text-gray-500 text-center">
        <p>.Net | C# | LINQ | EF | MVC | API |</p>
      </div>
    </div>
  );
}