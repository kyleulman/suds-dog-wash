export const prerender = false;

export function load({ url }) {
	const status = url.searchParams.get('status');
	return { status };
}
