import { redirect } from '@sveltejs/kit';
import { formDataToObject } from './formDataToObject';

export const prerender = false;

export const actions = {
	default: async ({ request }) => {
		const body = formDataToObject(await request.formData());

		const res = await fetch('http://127.0.0.1:5173/api/forms', {
			method: 'POST',
			headers: {
				accept: 'application/json',
				'content-type': 'application/json',
				authorization: `Bearer ${import.meta.env.VITE_FORMS_KEY}`,
				origin: request.headers.get('origin')
			},
			body: JSON.stringify(body)
		});

		// TODO: Handle ret
		console.log(res.status);

		throw redirect(303, '/contact-us');
	}
};
