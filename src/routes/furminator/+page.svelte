<script>
	import Page from '$lib/page/Page.svelte';

	const content = {
		page: {
			title: 'FURminator'
		},
		blocks: [
			{
				body: [
					`Sick of the shedding? FURmination once every 6 weeks can reduce your dog’s shedding by up to 75%. The process includes a wash & dry, ear cleaning, nail trimming and as much brushing as your dog requires (often up to 2 hours).`,
					`Allergy sufferers may breathe easier after your pet has had the Furminator Shed-Less treatment. By reducing the amount of pet hair in your environment you are reducing the amount of dander and airborne elements that cause allergic reactions in many people.`,
					`<h2>Recommended by veterinarians</h2>`,
					`The Furminator Shed-Less Treatment has been endorsed by Veterinarians who understand the importance of maintaining a happy and healthy pet. According to veterinarians, the overall health of your pet is based, in part, on keeping your pet both clean and comfortable.`,
					`We have the lowest price on the FURminator Shed-Less Treatment in Wilmington! Want to learn more? <a href="http://furminator.com/">See the Furminator in action!</a>`
				]
			}
		]
	};
</script>

<Page {content} />
