<script>
	const reviews = [
		{
			img: {
				src: '/poodle-paw-raised.jpg',
				alt: 'Well groomed poodle with paw raised.'
			},
			body: 'I was nervous at first, but I got biscuits which made me happy and free again.',
			attribution: 'Nipper'
		},
		{
			img: {
				src: '/chocolate-lab-smile.jpg',
				alt: 'Smiling chocolate lab.'
			},
			body: 'I felt so good about my bath, I ran around the back yard and got all dirty again!',
			attribution: 'Mr. Chow'
		}
	];
</script>

<section class="reviews">
	{#each reviews as review}
		<article>
			<img src={review.img.src} alt={review.img.alt} />
			<p>
				<q> {review.body}</q>
			</p>
			<small>— {review.attribution}</small>
		</article>
	{/each}
</section>

<style>
	section {
		display: flex;
		flex-flow: column;
		gap: 5rem;
		font-size: 1.25rem;
		margin: auto;
	}

	article {
		position: relative;
		background: hsl(var(--dark-blue) / 0.5);
		padding: 2rem;
		border-radius: var(--radius);
		max-width: 350px;
		box-shadow: var(--shadow);
	}

	article:nth-of-type(even) {
		text-align: right;
	}

	article img {
		position: absolute;
		top: 60%;
		max-width: 150px;
		border-radius: 50%;
		box-shadow: 0.1em 0.1em 0.5em hsl(var(--dark) / 0.25);
	}

	article:nth-of-type(odd) img {
		right: -2rem;
	}

	article:nth-of-type(even) img {
		left: -2rem;
	}
</style>
