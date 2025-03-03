<script>
	import { siteAuthor } from '$lib/config';
	import { navItems } from '$lib/config';
</script>

<footer class="py-5">
	<nav>
		<a href="/">Home</a> - 
		<a href="/api/rss.xml" data-sveltekit-reload>RSS</a> - 

		{#each navItems as item, index}
			<a href={item.route}>{item.title}</a>
			{index < navItems.length - 1 ? ' - ' : ''}
		{/each}
	</nav>

	<p>&copy;{new Date().getFullYear()} {siteAuthor}</p>
</footer>
