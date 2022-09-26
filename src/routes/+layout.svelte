<script>
	import Header from '$lib/header/Header.svelte';
	import Reviews from '$lib/reviews/Reviews.svelte';
	import Map from '$lib/map/Map.svelte';
	import Footer from '$lib/footer/Footer.svelte';
	import '../app.css';
	import Hours from '../lib/hours/Hours.svelte';
</script>

<Header />
<div class="main">
	<main>
		<slot />
	</main>
	<aside>
		<Reviews />
		<Map />
		<Hours />
	</aside>
</div>
<div class="footer">
	<Footer />
</div>

<style>
	.main {
		display: flex;
		align-items: flex-start;
		max-width: 1200px;
		margin: 0 auto;
		gap: 4rem;
		padding: 0 2rem;
	}

	aside {
		display: flex;
		flex-flow: column;
		gap: 5em;
		padding: 2rem 0;
		max-width: 350px;
	}

	.footer {
		display: flex;
		justify-content: center;
		padding: 0 2rem;
	}
</style>
