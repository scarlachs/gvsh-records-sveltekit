<script lang="ts">
	import { cn } from "$lib/ts/utils";
	import type { HTMLAttributes } from "svelte/elements";

	let { class: className, children, ...restProps }: HTMLAttributes<HTMLHeadingElement> = $props();
</script>

<h1 class={cn("text-2xl font-bold md:text-3xl", className)} {...restProps}>
	{@render children?.()}
</h1>
