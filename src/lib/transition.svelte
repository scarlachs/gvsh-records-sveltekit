<script lang="ts">
	import { fade } from "svelte/transition";

	let url: string;

	export { url };
</script>

{#key url}
	<div class="transition" in:fade>
		<slot />
	</div>
{/key}

<style>
	.transition {
		height: 100%;
	}
</style>
