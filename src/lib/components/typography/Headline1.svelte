<script lang="ts">
	import { cn } from "$lib/ts/utils";
	import type { HTMLAttributes } from "svelte/elements";

	let { class: className, children, ...restProps }: HTMLAttributes<HTMLHeadingElement> = $props();
</script>

<h1 class={cn("text-3xl font-bold md:text-4xl", className)} {...restProps}>
	{@render children?.()}
</h1>
