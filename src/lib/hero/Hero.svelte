<script>
	const content = {
		heading: "Welcome to Wilmington's <em>1<small>st</small></em> Self-service dog wash!",
		body: [
			`Thanks for stopping by! Did you know that clean dogs get more love? It’s a fact. Muddy, dirty, sandy, stinky… we can help. `,
			`Give us a call today for professional grooming and full-service bathing, or drop by any time for our self-service option!`
		],
		img: {
			src: '/kid-washing-dog.jpg',
			alt: 'Kid washing dog.'
		}
	};
</script>

<section class="hero">
	<figure>
		<img src={content.img.src} alt={content.img.alt} />
		<div class="heading">
			<h1>
				{@html content.heading}
			</h1>
		</div>
	</figure>
	<article>
		{#each content.body as body}
			<p>{body}</p>
		{/each}
	</article>
</section>

<style>
	section {
		flex: 2;
		margin: 1rem 0;
	}

	figure {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		margin: 0;
	}

	img {
		border-radius: var(--radius);
		box-shadow: var(--shadow);
		height: 400px;
		width: 60%;
		object-fit: cover;
	}

	.heading {
		position: absolute;
		left: 0;
		max-width: 400px;
		background: hsl(var(--light));
		padding: 2rem;
		border-radius: var(--radius);
		display: flex;
		justify-content: center;
		align-items: center;
		box-shadow: var(--shadow);
	}

	h1 {
		position: relative;
		margin: 0;
		font-family: var(--heading);
		max-width: 250px;
		letter-spacing: 1px;
		color: hsl(var(--red));
		z-index: 1;
	}

	article {
		padding: 2rem;
		margin: 2rem 0;
		color: hsl(var(--dark));
		background: hsl(var(--light));
		border-radius: var(--radius);
		box-shadow: var(--shadow);
	}

	article p:first-child {
		margin-top: 0;
	}
	article p:last-child {
		margin-bottom: 0;
	}
</style>
