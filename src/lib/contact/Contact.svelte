<form action="">
	<div>
		<label for="name" class="required">Name</label>
		<input type="text" id="name" name="name" required />
	</div>
	<div>
		<label for="email" class="required">Email</label>
		<input type="email" id="email" name="email" required />
	</div>
	<div>
		<label for="subject" class="required">Subject</label>
		<input type="text" id="subject" name="subject" required />
	</div>
	<div>
		<label for="message" class="required">Message</label>
		<textarea name="message" id="message" cols="30" rows="10" required />
	</div>
	<div>
		<button class="btn" type="submit">Submit</button>
	</div>
</form>

<style>
	form {
		display: flex;
		flex-flow: column;
		gap: 1rem;
	}

	form > div {
		display: flex;
		flex-flow: column;
	}

	input,
	textarea {
		font-family: inherit;
		font-size: inherit;
		border: 0;
		border-radius: 1em;
		padding: 0.25em 0.5em;
	}

	button[type='submit'] {
		align-self: center;
	}
</style>
