import { invalid } from '@sveltejs/kit';
import { formDataToObject } from './formDataToObject';
import { validate } from './validate';

export const prerender = false;

export const actions = {
	default: async ({ request }) => {
		const body = formDataToObject(await request.formData());

		const status = validate(body, ['name', 'email', 'subject', 'message']);

		console.log(status);

		if (status) return invalid(400, { status });

		return {
			success: `<p>Your submission successfully validated! Here's what would show up in your email:</p> <b>Name:</b> <p>${body.name}</p> <b>Email:</b> <p>${body.email}</p> <b>Subject:</b> <p>${body.subject}</p> <b>Message:</b> <p>${body.message}</p>`
		};

		// ! Production only!
		// const res = await fetch(`${import.meta.env.VITE_API_URL}/api/forms`, {
		// 	method: 'POST',
		// 	headers: {
		// 		accept: 'application/json',
		// 		'content-type': 'application/json',
		// 		origin: request.headers.get('origin'),
		// 		authorization: import.meta.env.VITE_FORMS_KEY
		// 	},
		// 	body: JSON.stringify(body)
		// });
	}
};
