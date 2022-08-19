<script lang="ts">
	import { page } from '$app/stores';
	import Icon from '$lib/Icon.svelte';

	const switchDarkmode = (): void => {
		if (localStorage.theme === 'light') {
			localStorage.theme = 'dark';
			document.documentElement.classList.add('dark');
		} else {
			localStorage.theme = 'light';
			document.documentElement.classList.remove('dark');
		}
	};
</script>

<header
	class="flex h-full w-full justify-between items-center px-4 py-2 bg-neutral-200 dark:bg-neutral-800"
>
	<div>Svelte</div>
	<nav>
		<ul class="flex h-full space-x-4">
			<li class="h-full hover:text-amber-500">
				<a class="" sveltekit:prefetch href="/">
					<div class="" class:text-emerald-600={$page.url.pathname === '/'}>Home</div>
				</a>
			</li>
			<li class="h-full hover:text-amber-500">
				<a class="" sveltekit:prefetch href="/about">
					<div class="" class:text-fuchsia-600={$page.url.pathname === '/about'}>About</div>
				</a>
			</li>
		</ul>
	</nav>

	<button on:click={switchDarkmode} class="p-1">
		<Icon icon="darkmode" size="h-4 w-4 hover:text-amber-500" />
	</button>
</header>
