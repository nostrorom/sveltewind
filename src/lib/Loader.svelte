<script lang="ts">
    export let color:string;
</script>


<div class="h-6 w-6 m-auto my-0.5">
    <div class="loader h-full border-r-4 border-white rounded-full border-opacity-100" class:border-gray-500={color === 'gray'}>
    </div>
</div>

<style>
    .loader {
        -webkit-transform: translateZ(0);
        -ms-transform: translateZ(0);
        transform: translateZ(0);
        -webkit-animation: load8 1s infinite linear;
        animation: load8 1s infinite linear;
    }
    @-webkit-keyframes load8 {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
    @keyframes load8 {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
</style>