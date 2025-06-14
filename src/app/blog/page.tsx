import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

interface BlogPost {
  slug: string;
  frontmatter: { title: string; date: string; tags: string[] };
}

async function getPosts() {
  try {
    const files = await fs.readdir('src/content/blog');
    const posts = await Promise.all(
      files
        .filter((file) => file.endsWith('.md'))
        .map(async (file) => {
          const slug = file.replace('.md', '');
          const fileContent = await fs.readFile(path.join('src/content/blog', file), 'utf-8');
          const { data } = matter(fileContent);
          const formattedDate = data.date
            ? new Date(data.date).toISOString().split('T')[0]
            : new Date().toISOString().split('T')[0]; // Fallback to current date
          return {
            slug,
            frontmatter: { ...data, date: formattedDate } as BlogPost['frontmatter'],
          };
        })
    );
    return posts;
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}

export const metadata = {
  title: 'Blog - Ricardo Carvalho',
  description: 'Blog posts about Microsoft 365 Business Central development.',
  openGraph: {
    title: 'Blog - Ricardo Carvalho',
    description: 'Blog posts about Microsoft 365 Business Central development.',
    url: 'https://mrricardocarvalho.github.io/devportfolio/blog',
  },
};

export default async function Blog() {
  const posts = await getPosts();
  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <div className="grid gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="border p-4 rounded shadow hover:bg-gray-50"
          >
            <h2 className="text-xl font-semibold mb-2">{post.frontmatter.title}</h2>
            <p className="text-gray-600 mb-2">{post.frontmatter.date}</p>
            <p className="text-sm">
              <span className="font-medium">Tags:</span> {post.frontmatter.tags.join(', ')}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}