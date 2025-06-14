'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-gray-800 text-white py-4">
      <nav className="max-w-5xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-teal-500">
          Home
        </Link>
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        <ul className={`md:flex space-x-8 absolute md:static top-16 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent p-4 md:p-0 ${isOpen ? 'block' : 'hidden'}`}>
          <li>
            <Link href="/cv" className="hover:text-blue-500" aria-label="View CV">
              CV
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-yellow-500" aria-label="View Projects">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-coral-500" aria-label="Read Blog">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}