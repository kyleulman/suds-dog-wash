<script>
	export let content;
</script>

<section class="pitch">
	{#each content as article}
		<div>
			<article>
				<h3>
					{article.heading}
				</h3>
				<p>
					{@html article.body}
				</p>
				{#if article.btn}
					<a class="btn" href={article.btn.action}>{article.btn.label}</a>
				{/if}
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
