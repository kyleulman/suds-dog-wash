export function validate(values, requiredFields) {
	let validation = {};

	for (const field in values) {
		const value = values[field];

		// * If field is required and the field value is empty,
		// * add a required message to the validation object.
		if (requiredFields.includes(field) && !value) {
			validation[field] = 'is required.';
			continue;
		}

		// * Check for validators and validate when possible.
		// * If the validator returns false, add the corresponding
		// * validation message to to the validation object.
		if (Object.keys(validators).includes(field) && validators[field](value) === false) {
			validation[field] = messages[field];
		}
	}

	if (Object.keys(validation).length > 0) return validation;

	return undefined;
}

const validators = {
	username: (username) => new RegExp(/^[a-z0-9_-]{3,16}$/, 'igm').test(username),
	email: (email) => new RegExp(/^([a-z0-9_.+-]+)@([da-z.-]+)\.([a-z.]{2,63})$/, 'gm').test(email),
	password: (password) =>
		new RegExp(
			/(?=(.*[0-9]))(?=.*[\\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/,
			'gm'
		).test(password)
};

const messages = {
	username: 'may include only letters, "_", and "–", and must range 3 to 16 characters.',
	email: 'must be a valid email address (ex: kyle@ulman.digital).',
	password:
		'must include 1 lowercase letter, 1 uppercase letter, 1 number, 1 special character and be at least 8 characters long.'
};
