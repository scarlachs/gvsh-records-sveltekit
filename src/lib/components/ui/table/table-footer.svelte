<script lang="ts">
	import { type WithElementRef } from "bits-ui";
	import { cn } from "$lib/ts/utils.js";
	import type { HTMLAttributes } from "svelte/elements";

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLTableSectionElement>> = $props();
</script>

<tfoot
	bind:this={ref}
	data-slot="table-footer"
	class={cn("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0", className)}
	{...restProps}
>
	{@render children?.()}
</tfoot>
