export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-auto">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p>© 2025 All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <a href="https://linkedin.com/in/yourprofile" className="hover:text-teal-500">
            LinkedIn
          </a>
          <a href="https://github.com/mrricardocarvalho" className="hover:text-gray-400">
              GitHub
            </a>
        </div>
      </div>
    </footer>
  );
}