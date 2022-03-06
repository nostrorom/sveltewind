<script lang="ts">
	import Icon from '$lib/Icon.svelte';
	export let action: string = 'click';
	export let icon: string = '';
	export let bgColor: string = 'bg-gray-500';
	export let textColor: string = 'text-white';
</script>

<button class="h-8 px-2 space-x-2 rounded-md shadow-md flex items-center {bgColor} {textColor}">
	{#if icon}
		<div class="py-1 h-full">
			<Icon {icon} />
		</div>
	{/if}
	<p class="text-base pr-1">
		{action}
	</p>
</button>
