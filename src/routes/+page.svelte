<script>
    import { createTable } from 'svelte-headless-table';

	/** @type {import('./$types').ActionData} */
	export let form;
</script>

<h1>Fail/Throw Test</h1>

Form: {JSON.stringify(form)}

<form method="POST" action="?/test_fail">
	<button>Test fail()</button>
</form>

<form method="POST" action="?/test_throw">
	<button>Test throw()</button>
</form>