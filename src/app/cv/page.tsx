import Link from 'next/link';

export const metadata = {
  title: 'CV - Ricardo Carvalho',
  description: 'Professional CV of Ricardo Carvalho, Senior Microsoft 365 Business Central Developer.',
  openGraph: {
    title: 'CV - Ricardo Carvalho',
    description: 'Professional CV of Ricardo Carvalho.',
    url: 'https://mrricardocarvalho.github.io/devportfolio/cv',
  },
};

export default function CV() {
  return (
    <>
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Curriculum Vitae</h1>
        <div className="grid gap-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Experience</h2>
            <div className="mb-4">
              <h3 className="text-xl font-medium">Senior Business Central Developer, [Company Name]</h3>
              <p className="text-gray-600">[Dates, e.g., 2020-Present]</p>
              <ul className="list-disc pl-5">
                <li>Developed custom extensions using AL.</li>
                <li>Led integration projects with Microsoft 365.</li>
              </ul>
            </div>
            {/* Add more experience entries as needed */}
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Education</h2>
            <div className="mb-4">
              <h3 className="text-xl font-medium">[Degree, e.g., BSc Computer Science], [University]</h3>
              <p className="text-gray-600">[Dates, e.g., 2015-2019]</p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Skills</h2>
            <ul className="list-disc pl-5">
              <li>Microsoft 365 Business Central, AL Programming</li>
              <li>Web Development (React, Next.js, TypeScript)</li>
              <li>SEO, Tailwind CSS</li>
            </ul>
          </div>
          <Link
            href="/cv.pdf"
            className="inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
            download
          >
            Download CV (PDF)
          </Link>
        </div>
      </section>
    </>
  );
}