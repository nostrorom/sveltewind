<script lang="ts">
	import { page } from '$app/stores';
	import Icon from '$lib/Icon.svelte';
	if (typeof window !== 'undefined') {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}
	const switchDarkmode = () => {
		if (localStorage.theme === 'light') {
			localStorage.theme = 'dark';
			document.documentElement.classList.add('dark');
		} else {
			localStorage.theme = 'light';
			document.documentElement.classList.remove('dark');
		}
	};
</script>

<header class="flex w-full h-full md:px-2 lg:px-4 justify-between items-center">
	<a
		class="h-6 text-slate-400 hover:text-red-700"
		href="https://github.com/Nostrorom?tab=repositories"
		target="_blank"
	>
		<Icon icon="github" />
	</a>

	<nav class="h-full">
		<ul class="flex space-x-2 uppercase text-slate-500 h-full">
			<li class="h-full">
				<a class="" sveltekit:prefetch href="/">
					<div
						class="h-full px-4 flex items-center border-b border-slate-500 border-opacity-0 hover:text-red-700 hover:border-red-500"
						class:border-opacity-100={$page.url.pathname === '/'}
					>
						Home
					</div>
				</a>
			</li>
			<li class="h-full">
				<a class="" sveltekit:prefetch href="/about">
					<div
						class="h-full px-4 flex items-center border-b border-slate-500 border-opacity-0 hover:text-red-700 hover:border-red-500"
						class:border-opacity-100={$page.url.pathname === '/about'}
					>
						About
					</div>
				</a>
			</li>
		</ul>
	</nav>

	<button
		on:click={switchDarkmode}
		class="h-full w-10 text-slate-400 hover:text-yellow-400 p-2 flex items-center justify-center"
	>
		<div class="h-6">
			<Icon icon="darkmode" />
		</div>
	</button>
</header>
