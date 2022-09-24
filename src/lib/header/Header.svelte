<script>
	import site from '$lib/data/site.json';

	export let data = {
		show_title: true
	};
</script>

<header>
	<section class="contact">
		<ul class="contact-info">
			<li>
				<address>
					{site.address.street} <br />
					{site.address.city}, {site.address.state}
					{site.address.zip}
				</address>
			</li>
			<li><a href={`tel:${site.phone}`}>{site.phone}</a></li>
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
			</ul>
		{/if}
	</section>
	<section class="main">
		<div class="title-wrapper">
			<a href="/" class="title">
				{#if site.logo}
					<img src={site.logo.src} alt={site.logo.alt} />
					{#if data.show_title}
						<span>{site.short_title}</span>
					{/if}
				{:else}
					{site.short_title}
				{/if}
			</a>
		</div>
		<nav>
			{#each site.nav as { href, label }}
				<a {href}>{label}</a>
			{/each}
		</nav>
	</section>
</header>

<style>
	header {
		display: flex;
		padding: 2rem;
	}

	ul {
		display: flex;
		padding: 0;
		margin: 0;
		list-style: none;
	}

	address {
		font-style: normal;
	}

	.contact {
		margin: 2rem 0;
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
		line-height: 1.25;
		font-size: 0.8rem;
	}

	.contact-info {
		align-items: center;
	}

	.contact-info li:first-child {
		border-right: 1px dashed;
		padding-right: 0.75rem;
	}

	.contact-info li:last-child {
		padding-left: 0.75rem;
		white-space: nowrap;
	}

	@media (max-width: 350px) {
		.contact {
			flex-flow: column;
			text-align: center;
		}

		.contact-info {
			flex-flow: column;
			gap: 0.5rem;
		}

		.contact-info li:first-child {
			border-right: 0;
			padding-right: 0;
		}

		.contact-info li:last-child {
			padding-left: 0;
		}
	}

	.social-links {
		gap: 0.5rem;
	}

	.social-links img {
		width: 1rem;
	}

	.title {
		display: flex;
		flex-flow: column;
		gap: 0.5rem;
		max-width: 8rem;
		line-height: 1.25;
		text-decoration: none;
		font-weight: 500;
	}

	@media (max-width: 500px) {
		.title {
			align-items: center;
			gap: 1rem;
			text-align: center;
		}
	}

	.title img {
		max-width: 40rem;
		min-width: 40rem;
	}

	.main {
		margin: 1rem 0;
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		gap: 1rem;
		justify-content: space-between;
	}

	.main nav {
		display: flex;
		gap: 1rem;
	}

	@media (max-width: 500px) {
		.main {
			flex-flow: column;
		}

		.main nav {
			flex-flow: column;
			text-align: center;
		}
	}
</style>
