<script lang="ts">
	import { siteTitle } from '$lib/config';
	let { data } = $props();
</script>

<svelte:head>
	<title>{siteTitle}</title>
	<meta name="description" content="A blog about tech, programming, marketing and weekend projects." />
</svelte:head>

<data.Homepage />