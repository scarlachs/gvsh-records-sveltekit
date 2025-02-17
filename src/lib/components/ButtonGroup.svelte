<script lang="ts">
	import { cn } from "$lib/ts/utils";
	import type { HTMLAttributes } from "svelte/elements";

	let { class: className, children }: HTMLAttributes<HTMLButtonElement> = $props();
</script>

<div class={cn("flex flex-wrap items-center gap-4", className)}>
	{@render children?.()}
</div>
