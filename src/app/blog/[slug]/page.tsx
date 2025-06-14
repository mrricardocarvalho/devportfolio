import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import PrismClient from '@/components/PrismClient';
import Utterances from '@/components/Utterances';

interface BlogPostProps {
  frontmatter: { title: string; date: string; tags: string[] };
  content: string;
}

export async function generateStaticParams() {
  try {
    const files = await fs.readdir('src/content/blog');
    return files
      .filter((file) => file.endsWith('.md'))
      .map((file) => ({
        slug: file.replace('.md', ''),
      }));
  } catch (error) {
    console.error('Error reading blog directory:', error);
    return [];
  }
}

async function getPost(slug: string): Promise<BlogPostProps> {
  try {
    const filePath = path.join(process.cwd(), 'src/content/blog', `${slug}.md`);
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const { data, content } = matter(fileContent);
    const formattedDate = new Date(data.date).toISOString().split('T')[0];
    return {
      frontmatter: { ...data, date: formattedDate } as BlogPostProps['frontmatter'],
      content,
    };
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
    throw error;
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { frontmatter } = await getPost(params.slug);
  return {
    title: `${frontmatter.title} - Ricardo Carvalho`,
    description: `Blog post about ${frontmatter.title}`,
    openGraph: {
      title: frontmatter.title,
      description: `Blog post about ${frontmatter.title}`,
      url: `https://mrricardocarvalho.github.io/devportfolio/blog/${params.slug}`,
    },
  };
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const { frontmatter, content } = await getPost(params.slug);
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">{frontmatter.title}</h1>
      <p className="text-gray-600 mb-4">{frontmatter.date}</p>
      <p className="text-sm mb-4">
        <span className="font-medium">Tags:</span> {frontmatter.tags.join(', ')}
      </p>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a: ({ href, children }) => (
            <a href={href} className="text-blue-500 hover:underline">
              {children}
            </a>
          ),
          code: ({ node, className, children }) => {
            const isBlock = className?.includes('language-');
            return (
              <code
                className={`bg-gray-100 p-1 rounded ${className || ''} ${
                  isBlock ? 'block my-2' : ''
                }`}
              >
                {children}
              </code>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
      <PrismClient />
      <Utterances />
    </article>
  );
}