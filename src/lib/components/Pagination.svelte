<script lang="ts">
	import { postsPerPage } from '$lib/config';

	type Props = {
		currentPage: number;
		totalPosts: number;
		path?: string;
	};
	let { currentPage, totalPosts, path = '/blog/page' } : Props = $props();

	let pagesAvailable = $derived(Math.ceil(totalPosts / postsPerPage));
	

	const isCurrentPage = (page) => page == currentPage;
	const pagebutton = "px-3 py-2 border hover:bg-yellow-500 hover:text-zinc-900 rounded-md";
</script>

<!-- For some reason, the pagination wasn't re-rendering properly during navigation without the #key block -->
{#key currentPage}
	{#if pagesAvailable > 1}
		<nav aria-label="Pagination navigation" class="my-10">
			{#if currentPage > 1}
				<a href="{path}/{currentPage - 1}" aria-label="Previous page" class={pagebutton}>&lt;-</a>
			{/if}
			{#if currentPage < pagesAvailable}
			<a href="{path}/{currentPage + 1}" aria-label="Next page" class={pagebutton}>-&gt;</a>
			{/if}
		</nav>
	{/if}
{/key}
