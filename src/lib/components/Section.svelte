<script lang="ts">
	import { cn } from "$lib/ts/utils";

	let className: string | undefined | null = undefined;

	export { className as class };
	export let id: string | undefined = undefined;
</script>

<section class={cn("container mb-16 scroll-mt-20 md:mb-24", className)} {id}>
	<slot />
</section>
