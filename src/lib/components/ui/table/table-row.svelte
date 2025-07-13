<script lang="ts">
	import { cn, type WithElementRef } from "$lib/ts/utils.js";
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
		"hover:[&,&>svelte-css-wrapper]:[&>th,td]:bg-table-row-hover data-[state=selected]:bg-muted even:bg-table-row-even transition-colors",
		className
	)}
	{...restProps}
>
	{@render children?.()}
</tr>
