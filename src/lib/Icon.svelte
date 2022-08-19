<script lang="ts">
	export let icon: string;
	export let size: string = 'h-6 w-6';
</script>

<div class="flex items-center justify-center">
	{#if icon === 'copy'}
		<svg xmlns="http://www.w3.org/2000/svg" class="{size} fill-current" viewBox="0 0 20 20">
			<path
				d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z"
			/>
			<path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
		</svg>
	{:else if icon === 'view'}
		<svg xmlns="http://www.w3.org/2000/svg" class="{size} fill-current" viewBox="0 0 20 20">
			<path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
			<path
				fill-rule="evenodd"
				d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
				clip-rule="evenodd"
			/>
		</svg>
	{:else if icon === 'darkmode'}
		<svg class="{size} fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
			><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
				d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 64V448C362 448 448 362 448 256C448 149.1 362 64 256 64z"
			/></svg
		>
	{/if}
</div>
