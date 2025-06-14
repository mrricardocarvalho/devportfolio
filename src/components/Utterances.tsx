'use client';
import { useEffect } from 'react';

export default function Utterances() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://utteranc.es/client.js';
    script.setAttribute('repo', 'mrricardocarvalho/devportfolio');
    script.setAttribute('issue-term', 'pathname');
    script.setAttribute('theme', 'github-light');
    script.setAttribute('crossorigin', 'anonymous');
    script.async = true;

    const content = document.getElementById('utterances-comments');
    if (content) content.appendChild(script);

    return () => {
      if (content) content.innerHTML = '';
    };
  }, []);

  return <div id="utterances-comments" className="mt-8" />;
}