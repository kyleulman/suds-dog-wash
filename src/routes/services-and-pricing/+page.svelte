<script>
	import site from '$lib/data/site';
	import Page from '$lib/page/Page.svelte';

	const content = {
		page: {
			title: 'Services & Pricing'
		},
		blocks: [
			{
				heading: 'Self-service Wash',
				body: [
					`<i>Bring your dog and leave the mess, no appointment necessary!</i>`,
					`With ramp entry tubs and hydraulic lift grooming tables, our bathing system requires virtually no lifting or bending. We provide all necessary grooming supplies including a variety of all-natural shampoos, aprons, towels, brushes & combs, forced air dog dryers, ear cleaner, and colognes.`,

					`<ul>
					<li>Small (under 20 lbs) — $13</li>
					<li>Medium (20-60 lbs) — $16</li>
					<li>Large (60-100 lbs) — $19</li>
					<li>X-Large (over 100 lbs) — $23</li>
				</ul>`
				]
			},
			{
				heading: 'Full-service Bathing & Nail Clipping',
				body: [
					`With ramp entry tubs and hydraulic lift grooming tables, our bathing system requires virtually no lifting or bending. We provide all necessary grooming supplies including a variety of all-natural shampoos, aprons, towels, brushes & combs, forced air dog dryers, ear cleaner, and colognes.`,
					`Flea & tick, oatmeal anti-itch, medicated, tearless, and other specialty shampoos — $2 extra`,
					`Nail clipping — $10`,
					`<b>Free nail clipping on Valentine's Day (February 14th)</b>`,
					`Please call <a href=${site.phone}>${site.phone}</a> for an appointment.`
				]
			},
			{
				heading: 'Professional Grooming',
				body: [
					`As seasoned ‘all breed’ dog groomers, we prefer to limit our work load each day to ensure your dog gets plenty of attention and is groomed thoroughly. Our upbeat attitude and awesome energy makes Sudslingers a welcoming and fun place to visit. You’ll enjoy great grooming at great prices!`,
					`Please call <a href=${site.phone}>${site.phone}</a> for an appointment.`,
					`<i>Prices will vary depending on the size and breed of your dog.</i>`
				]
			},
			{
				heading: 'FURminator Shedless Treatment',
				body: [``, `<a href="/furminator">Read more here</a>`]
			}
		]
	};
</script>

<Page {content} />
