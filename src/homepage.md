# Welcome to the Minimalistic SvelteKit Blog 👋

This is a fully-featured blog template built with SvelteKit and Markdown. It includes:

- 🎉 Fully up-to-date with SvelteKit 2 and Svelte 5!
- ⚡️ Super fast static site generation with hydration. Every route is compiled down to static HTML and routed with (optional) JavaScript, thanks to the SvelteKit static adapter (pre-installed)
- ✍️ Markdown support with a pre-configured blog
- 📑 Pagination included (can customize posts per page)
- ✅ Category pages included
- 💬 Posts JSON API
- 📝 mdsvex pre-installed--use Svelte components inside Markdown!
- 🔎 Basic SEO for blog posts (strongly recommend checking that out for yourself, though)
- 📰 RSS feed set up and ready to go (though it could also likely benefit from some optimization); just update src/lib/config.js
- 💈 Uses Tailwind, customize as you wish!
- 🖼️ Customizable cover image dimensions - Easily set the width and height for your post cover images in each post's frontmatter

## Getting Started

1. Clone this repository
2. Install dependencies with `npm install`
3. Start development server with `npm run dev`
4. Customize the content in these files:
   - `src/homepage.md` - Main page content
   - `src/routes/about/+page.md` - About page
   - `src/lib/posts/` - Blog posts
   - `src/lib/config.js` - Site configuration

## Example Blogs

### [Deniz Algin](https://denizalgin.com)

My personal blog

### [Travel Blog Example](https://example.com/travel-blog)

A photo-rich travel blog with location-based categories

### [Personal Journal Example](https://example.com/journal)

A minimalist personal journal with daily entries

---

This template is open source and free to use. Feel free to customize it for your own blog!
