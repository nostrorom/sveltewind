<script lang="ts">
    import Icon from '$lib/icons/Icon.svelte';
    import Loader from '$lib/Loader.svelte';

    export let action = 'click';
    export let icon:string;
    export let iconSize:string;
    export let size = 'text-base';
</script>

<button class="{size} py-1 px-3 text-blueGray-500 bg-blueGray-300 bg-opacity-60 hover:bg-red-700 hover:text-white flex rounded-sm items-center space-x-2">
    <!-- <Loader /> -->
    {#if icon}
        <Icon {icon} size={iconSize}/>
    {/if}
    <p class="pb-1">
        {action}
    </p>
</button>
