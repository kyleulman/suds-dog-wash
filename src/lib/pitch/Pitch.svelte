<script>
	const content = [
		{
			heading: 'Self-service Bathing',
			body: 'Bring your dog and leave the mess, no appointment necessary!',
			cta: {
				btn: {
					label: 'Learn more',
					action: '/self-service'
				}
			},
			img: {
				src: '/self-service-dog-wash.jpg',
				alt: 'Self-service dog wash.'
			}
		},
		{
			heading: 'Full-service Bathing and Grooming',
			body: 'Professional grooming at an affordable price.',
			cta: {
				btn: {
					label: 'Learn more',
					action: '/full-service'
				}
			},
			img: {
				src: '/woman-dog-smile.jpg',
				alt: 'Woman next to dog smiling.'
			}
		},
		{
			heading: 'FURminator',
			body: 'The vet-approved shedding treatment.',
			cta: {
				btn: {
					label: 'Learn more',
					action: '/furminator'
				}
			}
		}
	];
</script>

<section class="pitch">
	{#each content as article}
		<div>
			<article>
				<h3>
					{article.heading}
				</h3>
				<p>
					{article.body}
				</p>
				<a class="btn" href={article.cta.btn.action}>{article.cta.btn.label}</a>
			</article>
			{#if article.img}
				<figure>
					<img src={article.img.src} alt={article.img.alt} />
				</figure>
			{/if}
		</div>
	{/each}
</section>

<style>
	section {
		margin: 2rem 0;
		background: hsl(var(--blue) / 0.75);
		padding: 2rem;
		border-radius: var(--radius);
		box-shadow: var(--shadow);
	}

	section > div {
		margin: 4rem 0;
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		gap: 2rem;
	}

	section > div > * {
		flex: 1;
	}

	section > div:nth-child(even) > article {
		order: 1;
	}

	section > div:last-of-type {
		text-align: center;
	}

	img {
		border-radius: var(--radius);
		box-shadow: var(--shadow);
	}

	h3 {
		margin: 0;
		font-size: 2em;
		font-family: var(--heading);
	}
</style>
