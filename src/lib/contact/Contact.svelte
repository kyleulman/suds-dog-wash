<script>
	export let status
</script>

<form method="POST">
	<div>
		{#if status?.name}<small class="error">Name {status.name}</small>{/if}
		<label for="name" class="required">Name</label>
		<input type="text" id="name" name="name" />
	</div>
	<div>
		{#if status?.email}<small class="error">Email {status.email}</small>{/if}
		<label for="email" class="required">Email</label>
		<input type="text" id="email" name="email" />
	</div>
	<div>
		{#if status?.subject}<small class="error">Subject {status.subject}</small>{/if}
		<label for="subject" class="required">Subject</label>
		<input type="text" id="subject" name="subject" />
	</div>
	<div>
		{#if status?.message}<small class="error">Message {status.subject}</small>{/if}
		<label for="message" class="required">Message</label>
		<textarea name="message" id="message" cols="30" rows="10" />
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
		min-width: 0;
		width: 100%;
	}

	button[type='submit'] {
		align-self: center;
	}
</style>
