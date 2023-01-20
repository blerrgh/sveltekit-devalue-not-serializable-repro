import { fail, redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
	test_fail: async () => {
		return fail(301, { msg: "Fail() was successful" });
	},
	test_throw: () => {
		throw redirect(303, '/throw');
	},
};
