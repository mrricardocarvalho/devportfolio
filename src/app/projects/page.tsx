import Link from 'next/link';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: 'Business Central Extension',
    description: 'A custom extension for inventory management in Business Central.',
    technologies: ['AL', 'Business Central'],
    github: 'https://github.com/mrricardocarvalho/bc-extension',
  },
  {
    title: 'Portfolio Website',
    description: 'This portfolio site built with Next.js and Tailwind CSS.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/mrricardocarvalho/devportfolio',
    demo: 'https://mrricardocarvalho.github.io/devportfolio',
  },
  // Add more projects
];

export const metadata = {
  title: 'Projects - Ricardo Carvalho',
  description: 'Portfolio of personal and professional projects by Ricardo Carvalho.',
  openGraph: {
    title: 'Projects - Ricardo Carvalho',
    description: 'Portfolio of personal and professional projects.',
    url: 'https://mrricardocarvalho.github.io/devportfolio/projects',
  },
};

export default function Projects() {
  return (
    <>
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Projects</h1>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <div key={index} className="border p-4 rounded shadow">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-600 mb-2">{project.description}</p>
              <p className="text-sm mb-2">
                <span className="font-medium">Technologies:</span>{' '}
                {project.technologies.join(', ')}
              </p>
              <div className="flex space-x-4">
                {project.github && (
                  <Link href={project.github} className="text-blue-500 hover:underline">
                    GitHub
                  </Link>
                )}
                {project.demo && (
                  <Link href={project.demo} className="text-blue-500 hover:underline">
                    Live Demo
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}