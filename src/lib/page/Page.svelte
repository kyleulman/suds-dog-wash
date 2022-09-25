<script>
	export let content;
</script>

<section class="page">
	<h1>{content.page.title}</h1>
	{#each content.blocks as block}
		<article>
			{#if block.heading}
				<h2>{block.heading}</h2>
			{/if}
			{#each block.body as body}
				<p>{@html body}</p>
			{/each}
		</article>
		<hr />
	{/each}
</section>

<style>
	section {
		padding: 1rem 2rem;
		background: hsl(var(--dark-blue) / 0.75);
		border-radius: var(--radius);
		box-shadow: var(--shadow);
	}

	h1 {
		font-family: var(--heading);
		letter-spacing: 1px;
	}

	article {
		margin: 3rem 0;
	}

	article:first-child {
		margin-top: 0;
	}

	article:last-child {
		margin-bottom: 0;
	}

	hr {
		border: 0;
		height: 0;
		border-top: 1px dashed hsl(var(--light) / 0.5);
		border-bottom: 1px dashed hsl(var(--light) / 0.5);
	}

	hr:last-child {
		display: none;
	}
</style>
