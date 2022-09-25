<script>
	import Header from '$lib/header/Header.svelte';
	import Reviews from '$lib/reviews/Reviews.svelte';
	import Map from '$lib/map/Map.svelte';
	import Footer from '$lib/footer/Footer.svelte';
	import '../app.css';
	import Hours from '../lib/hours/Hours.svelte';

	export let data;
</script>

<Header slug={data.routeId} />
<div>
	<main>
		<slot />
	</main>
	<aside>
		<Reviews />
		<Map />
		<Hours />
	</aside>
</div>
<Footer />

<style>
	div {
		display: flex;
		align-items: flex-start;
		max-width: 1200px;
		margin: 0 auto;
		gap: 4rem;
	}

	aside {
		display: flex;
		flex-flow: column;
		gap: 5em;
		padding: 2rem 0;
		max-width: 350px;
	}
</style>
