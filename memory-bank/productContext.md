# Product Context

## Project Overview
This project aims to create a web-based portfolio website, tentatively named "DevPortfolio," to showcase the web development skills of a Senior Microsoft 365 Business Central Developer. The website will feature a modern, minimalist, and clean UI/UX, optimized for high search engine rankings, particularly on Google. It will include sections for a CV (detailing jobs, education, and skills), a portfolio of personal projects, and a blog focused on Microsoft Business Central development. Built from scratch without pre-existing templates, the site will demonstrate advanced frontend and content management skills while being hosted as a static site on GitHub Pages.

## Key Features
- **Modern, Minimalist UI/UX:**
  - Deliver a clean, responsive design with intuitive navigation, optimized for desktop and mobile devices.
  - Use animations (e.g., hover effects, smooth transitions) to showcase frontend development expertise.
- **CV Section:**
  - Display professional experience (jobs), education, training, and skills (e.g., Business Central, AL, web development).
  - Include a downloadable PDF version of the CV with schema markup for SEO.
- **Personal Projects Portfolio:**
  - Showcase personal projects with cards detailing project descriptions, technologies used, and links to live demos or GitHub repositories.
  - Implement dynamic routes for detailed project pages, pre-rendered for static export.
- **Business Central Blog:**
  - Create a blog with Markdown-based posts about Microsoft Business Central development (e.g., AL programming, extensions, best practices).
  - Include syntax highlighting for code snippets, styled links, and responsive typography for a polished look.
  - Support tags, categories, and a search feature (using a static-friendly service like Algolia DocSearch).
- **SEO Optimization:**
  - Implement meta tags, Open Graph, Twitter Cards, and a sitemap for search engine visibility.
  - Optimize for Core Web Vitals (LCP, CLS, FID) with fast load times and image optimization.
  - Use schema markup (e.g., Person, Article) to enhance Google rich snippets.
- **Static Site Compatibility:**
  - Ensure all features are compatible with GitHub Pages’ static hosting using Next.js static export.
  - Integrate third-party services (e.g., Utterances for comments) for dynamic features without a backend.
- **Accessibility:**
  - Follow WCAG guidelines to ensure the site is accessible to all users, enhancing UX and SEO.

## Technology Stack
- **Frontend:** Next.js (with static export via next export) for a React-based, SEO-friendly, and dynamic frontend.
- **Styling:** Tailwind CSS for rapid, utility-first styling to create a minimalist, custom design.
- **Blog Content:** Markdown files with react-markdown for rendering and Prism.js for syntax highlighting, stored in the project repository for static compatibility.
- **SEO Tools:** next-seo for meta tags and Open Graph, next-sitemap for generating sitemaps.
- **Third-Party Services (optional):**
  - Utterances for GitHub-based blog comments, compatible with static sites.
  - Algolia DocSearch (free tier) for blog search functionality.
- **Version Control:** Git with GitHub for code hosting and showcasing project structure.
- **Deployment:** GitHub Pages for hosting the static site, with GitHub Actions for automated build and deployment.
- **Testing:** Jest and React Testing Library for unit testing frontend components (optional, to showcase quality assurance skills).

## Timeline
- **Phase 1: Research and Planning (Week 1):**
  - Define site structure, design minimalist UI wireframes (e.g., using pen-and-paper or Figma), and set up SEO requirements.
  - Estimate: 8-10 hours.
- **Phase 2: Project Setup and Basic Pages (Weeks 2-3):**
  - Set up Next.js, Tailwind CSS, and GitHub repository.
  - Build static pages for Homepage, CV, and Projects with responsive design.
  - Allocate: 20-25 hours.
- **Phase 3: Blog Development (Weeks 4-5):**
  - Implement Markdown-based blog with react-markdown and Prism.js for styling and syntax highlighting.
  - Add dynamic routes for blog posts using getStaticPaths and getStaticProps.
  - Integrate optional features like tags or search.
  - Plan for: 15-20 hours.
- **Phase 4: SEO and Optimization (Week 6):**
  - Implement meta tags, sitemap, and schema markup with next-seo and next-sitemap.
  - Optimize images and performance for Core Web Vitals.
  - Dedicate: 10-12 hours.
- **Phase 5: Testing and Deployment (Week 7):**
  - Test responsiveness, accessibility, and SEO implementation.
  - Deploy to GitHub Pages using GitHub Actions for automated builds.
  - Gather feedback and make final tweaks.
  - Allow for: 8-10 hours.
- **Total Estimated Time:** 61-77 hours over 7 weeks.

## Risks and Assumptions
- **Risk 1:** Markdown rendering issues (e.g., unstyled links, poor visuals) as experienced in your previous project.
  - Mitigation: Use react-markdown with custom renderers and Prism.js for syntax highlighting, and design a robust blog post layout with Tailwind CSS.
- **Risk 2:** Limited interactivity due to GitHub Pages’ static nature.
  - Mitigation: Integrate static-friendly third-party services (e.g., Utterances for comments, Algolia for search) and focus on pre-rendered content.
- **Risk 3:** SEO performance not meeting expectations.
  - Mitigation: Use Google Search Console to monitor rankings, test Core Web Vitals, and iterate based on analytics.
- **Assumption 1:** You have experience with React and JavaScript, enabling quick adoption of Next.js.
  - Mitigation: If Next.js is new, allocate time for learning its static export features (tutorials available on Next.js website).
- **Assumption 2:** Users will access the site on modern browsers with JavaScript enabled.
  - Mitigation: Ensure progressive enhancement (basic HTML/CSS fallback) for accessibility and SEO.

## Stakeholders
- **Primary Users:** Potential employers, clients, or peers seeking to evaluate your web development and Business Central expertise.
- **Developer:** You, as the sole developer, responsible for building, testing, and maintaining the site.
- **Visitors:** Tech recruiters, Business Central community members, and developers interested in your blog content.
- **Sponsors:** None, as this is a personal portfolio, but future clients may emerge from site visibility.

## Footnotes
[YYYY-MM-DD HH:MM:SS] - [Summary of Change]