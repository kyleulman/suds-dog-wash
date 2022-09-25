<script>
	import Hero from '$lib/hero/Hero.svelte';

	const content = {
		cta: {
			flavor: 'A clean, shiny pup and lots of extra hugs, guaranteed!',
			btn: {
				label: 'Call Today',
				action: 'tel:9107932449'
			}
		}
	};
</script>

<Hero />
<section class="cta">
	<h2>{content.cta.flavor}</h2>
	<a href={content.cta.btn.action} class="btn btn-alt">{content.cta.btn.label}</a>
</section>

<style>
	.cta {
		margin: 1rem 0;
		display: flex;
		align-items: center;
		gap: 2rem;
		padding: 2rem 4rem;
		background-color: hsl(var(--blue));
		box-shadow: 0em 0em 1em hsl(var(--light) / 0.25);
		border-radius: var(--radius);
	}
	.cta {
		font-size: 1.5em;
	}

	.cta h2 {
		font-family: var(--heading);
		letter-spacing: 2px;
	}

	.cta .btn-alt {
		box-shadow: 0rem 0rem 2em hsl(var(--light));
	}
</style>
