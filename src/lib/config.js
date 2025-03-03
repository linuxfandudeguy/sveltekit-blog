/**
 * Site Configuration
 *
 * These values are used throughout the site - in meta tags, footer, RSS feed, etc.
 * Update these values to customize your blog.
 **/

// Site Information
export const siteTitle = 'My SvelteKit Blog';
export const siteDescription = 'A blog built with SvelteKit';
export const siteURL = 'example.com';
export const siteLink = 'https://example.com';
export const siteAuthor = 'Your Name Here';

// Controls how many posts are shown per page on the main blog index pages
export const postsPerPage = 20;

// Edit this to alter the main nav menu. (Also used by the footer and mobile nav.)
export const navItems = [
	{
		title: 'Blog',
		route: '/blog'
	},
	{
		title: 'About',
		route: '/about'
	}
];
