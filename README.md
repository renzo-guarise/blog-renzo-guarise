# AI Blog

A personal blog about Artificial Intelligence, built with Next.js and deployed on GitHub Pages.

## Features

- Modern, responsive design with Tailwind CSS
- Static site generation for optimal performance
- Blog posts with Markdown support
- About page
- Automatic deployment to GitHub Pages

## Getting Started

### Prerequisites

- Node.js 20.x or later
- npm 10.x or later

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/renzo-guarise.git
cd renzo-guarise
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at http://localhost:3000

### Building for Production

To create a production build:

```bash
npm run build
```

The static files will be generated in the `out` directory.

## Deployment

The blog is automatically deployed to GitHub Pages when changes are pushed to the main branch. The deployment is handled by GitHub Actions.

To deploy manually:

1. Update the `basePath` in `next.config.ts` to match your repository name
2. Push your changes to the main branch
3. The GitHub Action will automatically build and deploy your site

Your blog will be available at `https://yourusername.github.io/renzo-guarise`

## Adding Content

### Blog Posts

1. Create a new Markdown file in `src/content/blog`
2. Add the frontmatter with title, date, and description
3. Write your blog post content in Markdown
4. The post will automatically appear in the blog listing

### Updating About Page

Edit `src/app/about/page.tsx` to update your personal information and background.

## Customization

- Update the site title and description in `src/app/layout.tsx`
- Modify the design by editing the Tailwind CSS classes
- Add new features by creating new components in `src/components`

## License

This project is licensed under the MIT License - see the LICENSE file for details.
