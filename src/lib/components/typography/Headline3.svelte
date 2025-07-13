<script lang="ts">
	import { cn } from "$lib/ts/utils";
	import type { HTMLAttributes } from "svelte/elements";

	let { class: className, children, ...restProps }: HTMLAttributes<HTMLHeadingElement> = $props();
</script>

<h3 class={cn("text-xl font-bold md:text-2xl", className)} {...restProps}>
	{@render children?.()}
</h3>
