<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.postcss';
</script>

<div class="w-full h-12 fixed top-0">
    <Header />
</div>

<main class="pt-12 w-screen min-h-screen bg-gradient-to-tr from-blueGray-200 to-blueGray-50">

    <div class="mt-12 h-full w-full max-w-7xl mx-auto flex flex-col justify-between">
        <slot>
        </slot>
        <footer class="py-4 flex justify-center">
            <p class="text-blueGray-400">by <a href="https://nostrorom.com" class="text-blueGray-600 hover:text-red-700">nosdev</a></p>
        </footer>
    </div>
</main>


