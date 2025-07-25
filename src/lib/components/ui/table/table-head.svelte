<script lang="ts">
	import { type WithElementRef } from "bits-ui";
	import { cn } from "$lib/ts/utils.js";
	import type { HTMLThAttributes } from "svelte/elements";

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: WithElementRef<HTMLThAttributes> = $props();
</script>

<th
	bind:this={ref}
	data-slot="table-head"
	class={cn(
		"text-foreground h-10 bg-clip-padding px-2 text-left align-middle font-semibold whitespace-nowrap [&:has([role=checkbox])]:pr-0",
		className
	)}
	{...restProps}
>
	{@render children?.()}
</th>
