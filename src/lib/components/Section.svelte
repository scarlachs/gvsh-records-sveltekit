<script lang="ts">
	import { cn } from "$lib/ts/utils";
	import type { HTMLAttributes } from "svelte/elements";

	let { class: className, id, children, ...restProps }: HTMLAttributes<HTMLElement> = $props();
</script>

<section class={cn("container mb-16  scroll-mt-20 md:mb-32", className)} {id} {...restProps}>
	{@render children?.()}
</section>
