<script>
	import Contact from '$lib/contact/Contact.svelte';

	export let data;

	const content = {
		page: {
			title: 'Contact Us'
		}
	};

	// TODO -> Handle errors
</script>

<section class="contact">
	{#if data.status}
		<p class="status">
			{#if data.status === '200'}
				<em> Your message has been received, thank you! </em>
			{:else}
				<em>
					An error occurred, please try again in a few minutes.
					<!-- <a href={`${import.meta.env.VITE_API_URL}/api/errors?status=${data.status}`}>
						click here to let Kyle know</a
					>. -->
				</em>
			{/if}
		</p>
	{/if}
	<h1>{content.page.title}</h1>
	<p>
		Questions, concerns and feedback welcome! Let us know how our service was. We want to know what
		our customers think and how we can improve to better serve you.
	</p>
	<Contact />
</section>

<style>
	section {
		background: hsl(var(--dark-blue) / 0.75);
		padding: 1rem 2rem;
		border-radius: var(--radius);
	}

	h1 {
		font-family: var(--heading);
		letter-spacing: 1px;
	}

	.status {
		margin: 1em auto;
		text-align: center;
		width: 80%;
	}
</style>
