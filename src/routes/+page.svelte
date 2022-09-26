<script>
	import site from '$lib/data/site';
	import Hero from '$lib/hero/Hero.svelte';
	import Pitch from '$lib/pitch/Pitch.svelte';

	const content = {
		cta: {
			flavor: 'A clean, shiny pup and lots of extra hugs, guaranteed!',
			btn: {
				label: 'Call Today',
				action: `tel:${site.phone}`
			}
		}
	};

	const pitches = [
		{
			heading: 'Self-service Bathing',
			body: 'Bring your dog and leave the mess, no appointment necessary!',
			btn: {
				label: 'Learn more',
				action: '/self-service'
			},
			img: {
				src: '/self-service-dog-wash.jpg',
				alt: 'Self-service dog wash.'
			}
		},
		{
			heading: 'Full-service Bathing and Grooming',
			body: 'Professional grooming at an affordable price.',
			btn: {
				label: 'Learn more',
				action: '/full-service'
			},
			img: {
				src: '/woman-dog-smile.jpg',
				alt: 'Woman next to dog smiling.'
			}
		},
		{
			heading: 'FURminator',
			body: 'The vet-approved shedding treatment.',
			btn: {
				label: 'Learn more',
				action: '/furminator'
			}
		}
	];
</script>

<Hero />
<section class="cta">
	<h2>{content.cta.flavor}</h2>
	<div>
		<a href={content.cta.btn.action} class="btn btn-alt">{content.cta.btn.label}</a>
	</div>
</section>
<Pitch content={pitches} />

<style>
	.cta {
		margin: 2rem 0;
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		gap: 2rem;
		padding: 2rem 4rem;
		background-color: hsl(var(--blue));
		box-shadow: 0em 0em 1em hsl(var(--light) / 0.25);
		border-radius: var(--radius);
		font-size: 1.5em;
	}

	@media (max-width: 700px) {
		.cta {
			flex-flow: column;
			text-align: center;
		}
	}

	.cta > div {
		text-align: center;
	}

	.cta h2 {
		flex: 1;
		font-family: var(--heading);
		letter-spacing: 2px;
	}

	@media (max-width: 500px) {
		h2 {
			font-size: 1em;
		}
	}

	.cta .btn-alt {
		box-shadow: 0rem 0rem 2em hsl(var(--light));
		justify-self: center;
	}
</style>
