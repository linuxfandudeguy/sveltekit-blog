<!-- This is the global layout file; it "wraps" every page on the site. (Or more accurately: is the parent component to every page component on the site.) -->
<script lang="ts">
	
	import { store } from '$lib/assets/js/store.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import { siteTitle, siteURL } from '$lib/config.js';
	import "../app.css";
	let { data, children } = $props();
	/**
	 * Updates the global store with the current path. (Used for highlighting
	 * the current page in the nav, but could be useful for other purposes.)
	 **/
	$effect(() => {
		store.currentPage = data.path;
	});
</script>

<svelte:head>
	<link rel="stylesheet" href="/css/prism.css" />
	<link
		rel="alternate"
		type="application/rss+xml"
		title={siteTitle}
		href="http://{siteURL}/api/rss.xml"
	/>
</svelte:head>



<!--
	The below markup is used on every page in the site. The <slot> is where the page's
	actual contents will show up.
-->
<div class="layout container px-4">
	<Header />
	{#key data.path}
		<main id="main" tabindex="-1">
			{@render children?.()}
		</main>
	{/key}
	<Footer />
</div>
