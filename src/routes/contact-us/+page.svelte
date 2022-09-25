<script>
	import Contact from '$lib/contact/Contact.svelte';

	const content = {
		page: {
			title: 'Contact Us'
		}
	};
</script>

<section class="contact">
	<h1>{content.page.title}</h1>
	<p>
		Questions, concerns and feedback welcome. Let us know how our service was. We want to know what
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
</style>
