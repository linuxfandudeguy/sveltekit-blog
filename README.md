# Minimalistic SvelteKit Blog 👋

A clean, modern, and minimal blog template built with SvelteKit and Tailwind CSS.

## Features

- 🎉 **Fully up-to-date with SvelteKit 2 and Svelte 5!**
- ⚡️ **Super fast static site generation with hydration.** Every route is compiled down to static HTML and routed with (optional) JavaScript, thanks to the SvelteKit static adapter.
- ✍️ **Markdown support**
- 📑 **Pagination included**
- ✅ **Category pages included**
- 💬 **Posts JSON API**
- 📝 **mdsvex pre-installed**--use Svelte components inside Markdown!
- 🔎 **Basic SEO for blog posts** (strongly recommend checking that out for yourself, though)
- 📰 **RSS feed set up and ready to go** (though it could also likely benefit from some optimization); just update src/lib/config.js
- 💈 **Uses Tailwind, customize as you wish!**
- 🖼️ **Customizable cover image dimensions** - Easily set the width and height for your post cover images in each post's frontmatter

## Getting Started

1. Clone this repository
2. Install dependencies with `npm install`
3. Start development server with `npm run dev`
4. Customize the content in these files:
   - `src/homepage.md` - Main page content
   - `src/routes/about/+page.md` - About page
   - `src/lib/posts/` - Blog posts
   - `src/lib/config.js` - Site configuration

## Adding New Posts

Adding new posts is as simple as creating a new `.md` file in the `src/lib/posts` directory. Each post should include frontmatter at the top with the following properties:

```markdown
---
active: true
title: 'Your Post Title'
date: '2024-01-01'
updated: '2024-01-01'
categories:
  - 'category1'
  - 'category2'
coverImage: '/path/to/image.jpg' # or https:// URL
coverWidth: 16
coverHeight: 9
excerpt: A short description of your post
---

Your post content goes here...
```

The `active` property determines whether the post is displayed on the site. Set to `false` to hide a post.

## Customization

### Site Configuration

Edit `src/lib/config.js` to update your site's title, description, URL, author information, and navigation menu items.

### Navigation

The navigation menu can be updated in `src/lib/config.js` by modifying the `navItems` array:

```javascript
export const navItems = [
	{
		title: 'Blog',
		route: '/blog'
	},
	{
		title: 'About',
		route: '/about'
	}
	// Add more items as needed
];
```

### Pagination

Pagination settings can be adjusted in `src/lib/config.js` by changing the `postsPerPage` value.

## Building and Deploying

To build your site for production:

```bash
npm run build
```

This will generate a static site in the `build` directory that can be deployed to any static hosting service (Netlify, Vercel, GitHub Pages, etc.).

To preview the production build locally:

```bash
npm run preview
```

## Example Sites

### [Deniz Algin](https://denizalgin.com)

My personal blog

## License

[MIT](LICENSE)

---

## Key Changes from Original

This fork makes the following major changes to the original SvelteKit blog starter:

- **Updated Dependencies:** Upgraded to Svelte 5 and SvelteKit 2.15+
- **Added Tailwind CSS:** Replaced the custom CSS with Tailwind
- **Simplified UI:** Minimalistic header, footer, and post displays
- **Modern Svelte Syntax:** Using Svelte 5's `$props()` and `$derived` features
- **Post Control:** Added `active` flag to show/hide posts
- **Simplified Pagination:** Changed to just previous/next links instead of numbered pages
- **HTML Minification:** Added sveltekit-html-minifier for smaller output
- **Customizable cover image dimensions** - Easily set the width and height for your post cover images in each post's frontmatter

Thanks to the [original creator](https://github.com/josh-collinsworth/sveltekit-blog-starter) for the great work!
