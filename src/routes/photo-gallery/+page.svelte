<script>
	export let data;

	const content = {
		page: {
			title: 'Photo Gallery'
		},
	};
</script>

<section class="photo-gallery">
	<h1>Photo Gallery</h1>
	{#if data}
	<div class="gallery">
		{#each data.resources as photo}
			<figure>
				<a href={photo.secure_url} target="_blank">
					<img src={photo.secure_url} alt={photo.alt} />
				</a>
			</figure>
		{/each}
	</div>
	{/if}
</section>

<style>
	h1 {
		font-family: var(--heading);
	}

	.gallery {
		display: grid;
		gap: 1em;
		grid-template-columns: repeat(2, 1fr);
		align-items: start;
	}

	@media (max-width: 600px) {
		.gallery {
			grid-template-columns: 1fr;
		}
	}
</style>
