<script>
	import site from '$lib/data/site.json';
</script>

<header>
	<div>
		<section class="contact">
			<ul class="contact-info">
				<li>
					<address>
						{site.address.street} <br />
						{site.address.city}, {site.address.state}
						{site.address.zip}
					</address>
				</li>
			</ul>
			{#if site.social_links}
				<ul class="social-links">
					{#each site.social_links as { href, src, alt }}
						<li>
							<a {href}>
								<img {src} {alt} />
							</a>
						</li>
					{/each}
					<li><a class="btn" href={`tel:${site.phone}`}>{site.phone}</a></li>
				</ul>
			{/if}
		</section>
		<nav>
			{#each site.nav.filter((_, i) => i < site.nav.length / 2) as { href, label }}
				<a {href}>{label}</a>
			{/each}
			<a href="/" class="title">
				{#if site.logo}
					<img src={site.logo.src} alt={site.logo.alt} />
					{#if site.show_title}
						<span>{site.short_title}</span>
					{/if}
				{:else}
					{site.short_title}
				{/if}
			</a>
			{#each site.nav.filter((_, i) => i >= site.nav.length / 2) as { href, label, isPrefetch }}
				<a {href} data-sveltekit-prefetch={isPrefetch === true ? '' : 'off'}>{label}</a>
			{/each}
		</nav>
	</div>
</header>

<style>
	ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	header {
		position: relative;
		background: linear-gradient(
			hsl(var(--dark-blue) / 0.7),
			hsl(var(--dark-blue) / 0.6),
			hsl(var(--dark-blue) / 0)
		);
	}

	header > div {
		margin: 0 auto;
		max-width: 1200px;
		padding: 1em 2em;
	}

	/* Contact Row */
	.contact {
		position: relative;
		max-width: 1200px;
		margin: 1em auto;
		display: flex;

		flex-flow: row wrap;
		align-items: center;
		justify-content: space-between;
		gap: 2em;
	}

	@media (max-width: 600px) {
		.contact {
			flex-flow: column;
			text-align: center;
		}
	}

	.contact-info {
		display: flex;
		align-items: center;
		gap: 2rem;
		font-size: 0.8em;
	}

	.contact-info address {
		font-style: normal;
		line-height: 1.25;
	}

	.social-links {
		display: flex;
		align-items: center;
		gap: 1em;
	}

	.social-links img {
		width: 1em;
		min-width: 1em;
		filter: drop-shadow(0px 0px 1px hsl(0 0% 0% / 0.5));
	}

	nav {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
		align-items: center;
		gap: 2em;
		margin: 1em 0;
	}

	@media (max-width: 1200px) {
		nav {
			flex-flow: column;
		}
	}

	nav a {
		text-decoration: none;
		font-weight: 500;
	}

	nav a:hover {
		text-decoration: underline;
	}

	nav .title {
		flex: 1;
	}

	@media (max-width: 1200px) {
		a.title {
			order: 0;
		}

		a:not(.title) {
			order: 1;
		}
	}

	nav .title img {
		width: 100%;
		min-width: 400px;
	}

	@media (max-width: 600px) {
		nav .title {
			width: 100%;
		}

		nav .title img {
			min-width: 0;
		}
	}
</style>
