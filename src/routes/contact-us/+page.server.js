import { redirect } from '@sveltejs/kit';
import { formDataToObject } from './formDataToObject';

export const prerender = false;

export const actions = {
	default: async ({ request }) => {
		const body = formDataToObject(await request.formData());

		body.key = import.meta.env.VITE_FORMS_KEY;

		const res = await fetch('http://127.0.0.1:5174/api/forms', {
			method: 'POST',
			headers: {
				accept: 'application/json',
				'content-type': 'application/json'
			},
			body: JSON.stringify(body)
		});

		console.log(res.status);

		throw redirect(303, '/contact-us');
	}
};
