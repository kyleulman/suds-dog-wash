<script>
	import Contact from '$lib/contact/Contact.svelte';

	export let form;

	const content = {
		page: {
			title: 'Contact Us'
		}
	};
</script>

<section class="contact">
	{#if form?.success} <div id="cool">{@html form.success}
		<button class="btn" on:click={() => { document.querySelector("#cool").style.display = "none" }}>Cool!</button>
	</div> {:else} <div id="heya">
		<p>Heya! Since this is just a demo for now, form submissions aren't configured to go anywhere yet. To try the form out, enter some information below and it will be securely validated and returned to this page.</p>
		<button class="btn" on:click={() => { document.querySelector("#heya").style.display = "none" }}>Gotcha</button>
	</div> {/if}

	<h1>{content.page.title}</h1>
	<p>
		Questions, concerns and feedback welcome! Let us know how our service was. We want to know what
		our customers think and how we can improve to better serve you.
	</p>
	<Contact status={form?.status} />
</section>

<style>
	section {
		position: relative;
		background: hsl(var(--dark-blue) / 0.75);
		padding: 1rem 2rem;
		border-radius: var(--radius);
	}

	h1 {
		font-family: var(--heading);
		letter-spacing: 1px;
	}

	div {
		max-width: 300px;
		position: absolute;
		background:hsl(var(--dark));
		padding: 1rem;
	}
</style>
