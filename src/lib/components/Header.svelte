<script>
	import { siteTitle } from '$lib/config';
	import { navItems } from '$lib/config';
</script>

<header class="pt-5">
	<div class="container mx-auto">
		<a href="/" class="text-2xl font-bold">
			{siteTitle}
		</a>

		<nav>
			{#each navItems as item, index}
				<a href={item.route}>{item.title}</a> {index < navItems.length - 1 ? ' - ' : ''}
			{/each}
		</nav>
	</div>
</header>
<hr />
