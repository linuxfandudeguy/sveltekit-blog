<script lang="ts">
	let { posts = [] } = $props();
</script>

{#each posts as post}
	<article class="mb-5">
		<a href="/blog/{post.slug}" class="font-bold">
			{post.title}
		</a>
		<br />
		{post.excerpt}
		<div class="text-sm text-gray-500">Published on {post.date} - 
			{#each post.categories as category, index}
				<a href="/blog/category/{category}/" class="text-gray-500">
					{category}
				</a>
				{index < post.categories.length - 1 ? ', ' : ''}
			{/each}
		</div>
	</article>
{/each}
