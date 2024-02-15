<script>
	import { page } from '$app/stores';
</script>

<h1>{$page.status}: {$page.error.message}</h1>

<section>
	<p>This page is an error page. {new Date()}</p>
</section>
