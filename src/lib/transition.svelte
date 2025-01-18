<script lang="ts">
	import { fade } from "svelte/transition";
	import type { TransitionProps } from "$lib/ts/types";

	let { url, children }: TransitionProps = $props();
</script>

{#key url}
	<div class="transition" in:fade>
		{@render children?.()}
	</div>
{/key}

<style>
	.transition {
		height: 100%;
	}
</style>
