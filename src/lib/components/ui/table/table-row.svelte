<script lang="ts">
	import { type WithElementRef } from "bits-ui";
	import { cn } from "$lib/ts/utils.js";
	import type { HTMLAttributes } from "svelte/elements";

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLTableRowElement>> = $props();
</script>

<tr
	bind:this={ref}
	data-slot="table-row"
	class={cn(
		"hover:[&,&>svelte-css-wrapper]:[&>th,td]:bg-table-row-hover data-[state=selected]:bg-muted even:bg-table-row-even motion-safe:transition-colors",
		className
	)}
	{...restProps}
>
	{@render children?.()}
</tr>
