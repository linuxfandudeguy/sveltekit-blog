/**
 * Site Configuration
 *
 * These values are used throughout the site - in meta tags, footer, RSS feed, etc.
 * Update these values to customize your blog.
 **/

// Site Information
export const siteTitle = 'my blog;
export const siteDescription = 'A blog';
export const siteURL = 'lelelbois.netlify.app';
export const siteLink = 'https://lelelbois.netlify.app';
export const siteAuthor = 'blog';

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
