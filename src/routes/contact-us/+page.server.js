import { redirect } from '@sveltejs/kit';
import { formDataToObject } from './formDataToObject';

export const prerender = false;

export function load({ url }) {
	const status = url.searchParams.get('status');
	return { status };
}

export const actions = {
	default: async ({ request }) => {
		const body = formDataToObject(await request.formData());

		const res = await fetch(`${import.meta.env.VITE_API_URL}/api/forms`, {
			method: 'POST',
			headers: {
				accept: 'application/json',
				'content-type': 'application/json',
				origin: request.headers.get('origin'),
				authorization: import.meta.env.VITE_FORMS_KEY
			},
			body: JSON.stringify(body)
		});

		throw redirect(303, `/contact-us?status=${res.status}`);
	}
};
