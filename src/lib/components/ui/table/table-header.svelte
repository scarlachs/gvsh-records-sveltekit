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

<thead
	bind:this={ref}
	data-slot="table-header"
	class={cn("bg-table-row-even", className)}
	{...restProps}
>
	{@render children?.()}
</thead>
