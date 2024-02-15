<script>
	export let data;
</script>

<svelte:head>
	<title>SSR</title>
</svelte:head>

<section>
	<p>This page is server-side rendered. {data.ts}</p>
</section>
