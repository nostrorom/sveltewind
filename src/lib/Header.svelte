<script lang="ts">
	import { page } from '$app/stores';
	import Icon from '$lib/Icon.svelte';
</script>

<header class="flex w-full h-full md:px-2 lg:px-4 bg-blueGray-100 justify-between items-center">
	<div class="h-full">
		<a href="/">
			<Icon icon="github" />
		</a>
	</div>

	<nav class="h-full">
		<ul class="flex space-x-2 uppercase text-blueGray-500 h-full">
			<li class="h-full">
				<a class="" sveltekit:prefetch href="/">
					<div
						class="h-full px-4 flex items-center border-b border-blueGray-500 border-opacity-0 hover:text-red-700 hover:border-red-500"
						class:border-opacity-100={$page.path === '/'}
					>
						Home
					</div>
				</a>
			</li>
			<li class="h-full">
				<a class="" sveltekit:prefetch href="/about">
					<div
						class="h-full px-4 flex items-center border-b border-blueGray-500 border-opacity-0 hover:text-red-700 hover:border-red-500"
						class:border-opacity-100={$page.path === '/about'}
					>
						About
					</div>
				</a>
			</li>
		</ul>
	</nav>

	<div class="h-full text-blueGray-400 hover:text-red-700 p-2">
		<a href="https://github.com/Nostrorom?tab=repositories" target="_blank">
			<Icon icon="github" />
		</a>
	</div>
</header>
