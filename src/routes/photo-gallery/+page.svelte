<script>
	export let data;

	const content = {
		page: {
			title: 'Photo Gallery'
		},
		photos: data.resources
	};
</script>

<section class="photo-gallery">
	<h1>Photo Gallery</h1>
	<div class="gallery">
		{#each content.photos as photo}
			<figure>
				<a href={photo.secure_url} target="_blank">
					<img src={photo.secure_url} alt={photo.alt} />
				</a>
			</figure>
		{/each}
	</div>
</section>

<style>
	h1 {
		font-family: var(--heading);
	}

	.gallery {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}

	.gallery img {
		aspect-ratio: 1/1;
		object-fit: cover;
	}
</style>
