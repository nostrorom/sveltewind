<script lang="ts">
	import '../app.css';
	import { browser } from '$app/environment';
	import Header from '$lib/Header.svelte';

	if (browser) {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}
</script>

<main
	class="w-screen min-h-screen bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400"
>
	<header class="h-12">
		<Header />
	</header>
	<div class="pt-12">
		<slot />
	</div>
</main>
