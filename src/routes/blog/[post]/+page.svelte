<!-- This file renders each individual blog post for reading. Be sure to update the svelte:head below -->
<script lang="ts">
	import { siteTitle } from '$lib/config';
	let { data } = $props();

	const { title, excerpt, date, updated, coverImage, coverWidth, coverHeight, categories } =
		data.meta;
	const { PostContent } = data;
</script>

<svelte:head>
	<!-- Be sure to add your image files and un-comment the lines below -->
	<title>{siteTitle} {title}</title>
	<meta data-key="description" name="description" content={excerpt} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
	<meta name="twitter:title" content={title} />
	<meta property="og:description" content={excerpt} />
	<meta name="twitter:description" content={excerpt} />
	<!-- <meta property="og:image" content="https://yourdomain.com/image_path" /> -->
	<meta property="og:image:width" content={coverWidth} />
	<meta property="og:image:height" content={coverHeight} />
	<!-- <meta name="twitter:image" content="https://yourdomain.com/image_path" /> -->
</svelte:head>

	<!-- You might want to add an alt frontmatter attribute. If not, leaving alt blank here works, too. -->
	{#if coverImage}
		<img
			class="w-full object-cover object-center"
			src={coverImage}
			alt=""
			style={`aspect-ratio: ${coverWidth} / ${coverHeight};`}
		/>
	{/if}
<article class="post">


	<h1>{title}</h1>

	<PostContent />

	{#if categories}
		<hr />
		<aside class="post-footer">
			Posted in
			{#each categories as category, index}
				<a href="/blog/category/{category}/">
					{category}
				</a>
				{index < categories.length - 1 ? ', ' : ''}
			{/each}
		</aside>
		<div class="meta font-light">
			Published:
			{date}
			{#if updated && date!=updated}
			- Updated:
			{updated}
			{/if}
		</div>
		<hr />
	{/if}
</article>
