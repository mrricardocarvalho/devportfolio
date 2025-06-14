'use client';
import { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import '@/lib/prism-al';

export default function PrismClient() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return null;
}