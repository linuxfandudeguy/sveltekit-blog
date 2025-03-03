<script lang="ts">
	import Pagination from '$lib/components/Pagination.svelte';
	import PostsList from '$lib/components/PostsList.svelte';
	import { siteDescription, siteTitle } from '$lib/config';
	

	let { data } = $props();
</script>


<svelte:head>
	<title>{siteTitle} Blog</title>
	<meta data-key="description" name="description" content={siteDescription}>
</svelte:head>


<Pagination currentPage={1} totalPosts={data.total} />
<PostsList posts={data.posts} />
<Pagination currentPage={1} totalPosts={data.total} />