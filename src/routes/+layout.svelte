<script>
	import Header from '$lib/header/Header.svelte';
	import Reviews from '$lib/reviews/Reviews.svelte';
	import Map from '$lib/map/Map.svelte';
	import Footer from '$lib/footer/Footer.svelte';
	import '../app.css';
	import Hours from '../lib/hours/Hours.svelte';
	import site from '$lib/data/site.json';
</script>

<svelte:head>
	<title>{site.title}</title>
	<meta name="description" content={site.description} />
</svelte:head>

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
	<Footer />
</div>

<style>
	.main {
		display: grid;
		grid-template-columns: 2fr 1fr;
		max-width: 1200px;
		margin: 0 auto;
		gap: 4rem;
		padding: 0 2rem;
	}

	main {
		max-width: 715px;
		margin: 0 auto;
	}

	aside {
		align-self: start;
		display: flex;
		flex-flow: column;
		gap: 5em;
		max-width: 350px;
	}

	@media (max-width: 1200px) {
		main {
			grid-column: 1 / 3;
		}

		aside {
			grid-column: 1 / 3;
			flex-flow: row wrap;
			align-items: flex-start;
			justify-content: center;
			max-width: 100%;
		}
	}
</style>
