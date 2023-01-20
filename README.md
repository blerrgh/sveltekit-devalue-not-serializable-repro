# sveltekit-devalue-not-serializable-repro
Reproduction for https://github.com/sveltejs/kit/issues/8523

# sveltekit-devalue-not-serializable-repro
Reproduction for https://github.com/sveltejs/kit/issues/8523

Steps to reproduce:

Clone repo

`$ npm install`

`$ npm run dev`

Go to http://localhost:5173/, refresh, click the buttons, wait until dependencies are optimized:
```
11:14:32 AM [vite] ✨ new dependencies optimized: svelte-headless-table
11:14:32 AM [vite] ✨ optimized dependencies changed. reloading
```

You might get errors at this point, but if not, update package.json and pin devalue to 4.2.2:

```
"overrides": {
		"devalue": "4.2.2"
	}
```	

`$ npm install`

Make sure devalue has updated

`$ npm list devalue`
```
`-- @sveltejs/kit@1.2.1
  `-- devalue@4.2.2 overridden
```

`$ npm run dev`

Again, refresh and click buttons until you see 
```
11:18:36 AM [vite] ✨ new dependencies optimized: svelte-headless-table
11:18:36 AM [vite] ✨ optimized dependencies changed. reloading
```

Then, fail() and throw() should produce errors.

