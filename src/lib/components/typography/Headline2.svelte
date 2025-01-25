<script lang="ts">
	import { cn } from "$lib/ts/utils";
	import type { ClassProps, ChildrenProps } from "$lib/ts/types";

	let { class: className, children }: ClassProps & ChildrenProps = $props();
</script>

<h1 class={cn("text-2xl font-bold md:text-3xl", className)}>
	{@render children?.()}
</h1>
