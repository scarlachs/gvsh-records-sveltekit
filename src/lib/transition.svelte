<script lang="ts">
	import type { TransitionProps } from "$lib/ts/types";

	let { url, children }: TransitionProps = $props();
</script>

{#key url}
	<div class="transition">
		{@render children?.()}
	</div>
{/key}

<style>
	.transition {
		height: 100%;
	}
</style>
