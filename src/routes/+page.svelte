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
	<a href={content.cta.btn.action} class="btn btn-alt">{content.cta.btn.label}</a>
</section>
<Pitch content={pitches} />

<style>
	.cta {
		margin: 2rem 0;
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
