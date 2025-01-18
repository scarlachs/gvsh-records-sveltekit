<script lang="ts">
	import { cn } from "$lib/ts/utils";
	import type { SectionProps } from "$lib/ts/types";

	let { class: className = undefined, id = undefined, children }: SectionProps = $props();
</script>

<section class={cn("container mb-16 scroll-mt-20 md:mb-32", className)} {id}>
	{@render children?.()}
</section>
