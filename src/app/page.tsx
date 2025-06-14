import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Home - Ricardo Carvalho',
  description: 'Portfolio of Ricardo Carvalho, a Senior Microsoft 365 Business Central Developer.',
  openGraph: {
    title: 'Home - Ricardo Carvalho',
    description: 'Portfolio of Ricardo Carvalho, a Senior Microsoft 365 Business Central Developer.',
    url: 'https://mrricardocarvalho.github.io/devportfolio',
  },
};

export default function Home() {
  return (
    <section className="min-h-screen bg-[var(--background)] flex items-center justify-center">
      <div className="text-center">
      <Image
          src="/profile.png"
          alt="Ricardo Carvalho"
          width={128} // Set width in pixels
          height={128} // Set height in pixels
          className="rounded-full mx-auto mb-4 border-4 border-teal-500"
        />
        <h1 className="text-5xl font-bold mb-2">Ricardo Carvalho</h1>
        <p className="text-2xl mb-6 text-[var(--foreground)]">
          Senior Microsoft 365 Business Central Developer
        </p>
        <p className="text-lg mb-8 max-w-md mx-auto text-gray-400">
          Crafting custom AL extensions and modern web solutions.
        </p>
        <div className="space-x-4">
          <Link
            href="/cv"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
          >
            View CV
          </Link>
          <Link
            href="/projects"
            className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition"
          >
            See Projects
          </Link>
          <Link
            href="/blog"
            className="bg-coral-500 text-white px-6 py-3 rounded-lg hover:bg-coral-600 transition"
          >
            Read Blog
          </Link>
        </div>
      </div>
    </section>
  );
}