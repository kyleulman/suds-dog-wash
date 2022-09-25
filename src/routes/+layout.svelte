<script>
	import Header from '$lib/header/Header.svelte';
	import Reviews from '$lib/reviews/Reviews.svelte';
	import Map from '$lib/map/Map.svelte';
	import '../app.css';
</script>

<Header />
<div>
	<main>
		<slot />
	</main>
	<aside>
		<Reviews />
		<Map />
	</aside>
</div>

<footer />

<style>
	div {
		display: flex;
		max-width: 1200px;
		margin: 0 auto;
		gap: 4rem;
	}

	aside {
		display: flex;
		flex-flow: column;
		justify-content: flex-start;
		gap: 5em;
		padding: 2rem 0;
		max-width: 350px;
	}

	footer {
		margin: 2rem;
	}
</style>
