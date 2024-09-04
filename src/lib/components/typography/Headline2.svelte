<script lang="ts">
	import { cn } from "$lib/ts/utils";

	let className: string | undefined | null = undefined;

	export { className as class };
</script>

<h1 class={cn("text-2xl font-bold md:text-3xl", className)}>
	<slot />
</h1>
