<script>
	import site from '$lib/data/site';
</script>

<section class="hours">
	<h3>Hours of Operation</h3>
	<p>
		{site.hours}
	</p>
</section>

<style>
	section {
		background: hsl(var(--blue));
		border-radius: var(--radius);
		box-shadow: var(--shadow);
		padding: 1rem;
		text-align: center;
	}

	h3 {
		font-family: var(--heading);
		text-align: center;
		letter-spacing: 1px;
		margin: 1em auto;
		text-shadow: 1px 1px 1px hsl(var(--dark) / 0.25);
		max-width: 70%;
	}

	p {
		max-width: 70%;
		margin: 1em auto;
	}
</style>
