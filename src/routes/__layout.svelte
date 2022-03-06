<script>
	import '../app.css';
	import Header from '$lib/Header.svelte';
</script>

<div class="w-full h-12 fixed top-0 bg-white dark:bg-black">
	<Header />
</div>

<main class="pt-12 w-screen h-screen bg-white dark:bg-black">
	<slot />
</main>
