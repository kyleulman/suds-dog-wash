<script>
	import site from '$lib/data/site';
</script>

<footer>
	<p>&copy; {new Date().getFullYear()} {site.company}</p>

	<address>
		<p>{site.address.street}</p>
		<p>{site.address.city}, {site.address.state} {site.address.zip}</p>
	</address>
	<a href={`tel:${site.phone}`}>{site.phone}</a>
	<ul>
		{#each site.social_links as link}
			<li>
				<a href={link.href}><img src={link.src} alt={link.alt} /></a>
			</li>
		{/each}
	</ul>
	<p>Website by <a href="https://ulman.digital">Ulman Digital</a></p>
</footer>

<style>
	footer {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		justify-content: space-between;
		gap: 2rem;
		margin: 1rem auto;
		padding: 2rem;
		background: hsl(var(--dark-blue));
		max-width: 1200px;
		width: 100%;
		border-radius: var(--radius);
		box-shadow: var(--shadow);
	}

	address {
		font-style: normal;
		/* text-align: center; */
	}

	address p {
		margin: 0;
	}

	ul {
		display: flex;
		gap: 1em;
		padding: 0;
		margin: 0;
		list-style-type: none;
	}

	ul img {
		width: 1em;
		filter: drop-shadow(0px 0px 1px hsl(0 0% 0% / 0.5));
	}
</style>
