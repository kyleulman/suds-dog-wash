<script>
	import site from '$lib/data/site';
</script>

<footer>
	<img src={site.logo.src} alt={site.logo.alt} id="logo" />
	<div id="phone">
		<h4>Call for an Appointment</h4>
		<a class="btn" href={`tel:${site.phone}`}>{site.phone}</a>
	</div>
	<div id="address">
		<h4>Stop By</h4>
		<address>
			<p>{site.address.street}</p>
			<p>{site.address.city}, {site.address.state} {site.address.zip}</p>
		</address>
	</div>
	<small id="copy">&copy; {new Date().getFullYear()} {site.company}</small>
	<div id="socials">
		<h4>Follow Us</h4>
		<ul>
			{#each site.social_links as link}
				<li>
					<a href={link.href}><img src={link.src} alt={link.alt} /></a>
				</li>
			{/each}
		</ul>
	</div>
	<small id="ud">Website by <a href="https://petcarewebsolutions.com">Paws Pro</a></small>
</footer>

<style>
	footer {
		position: relative;
		grid-column: 1 / 3;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem;
		margin: 1rem auto;
		padding: 2rem;
		background: hsl(var(--dark-blue));
		max-width: 1200px;
		width: 100%;
		border-radius: var(--radius);
		box-shadow: var(--shadow);
		place-items: center;
		text-align: center;
	}

	@media (max-width: 1200px) {
		footer {
			grid-template-columns: repeat(2, 1fr);
		}

		#logo {
			order: 2;
		}

		#address {
			order: 1;
		}

		#phone {
			order: 0;
		}

		#copy {
			order: 4;
		}

		#socials {
			order: 3;
		}

		#ud {
			order: 5;
		}
	}

	@media (max-width: 800px) {
		footer {
			grid-template-columns: 1fr;
		}

		#logo {
			order: 0;
		}

		#address {
			order: 2;
		}

		#phone {
			order: 1;
		}

		#copy {
			order: 4;
		}

		#socials {
			order: 3;
		}

		#ud {
			order: 5;
		}
	}

	footer > div {
		place-self: start center;
	}

	h4 {
		margin: 0.5em 0;
	}

	p {
		margin: 0;
	}

	address {
		font-style: normal;
	}

	ul {
		display: flex;
		justify-content: center;
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
