<script lang="ts">
	import { cn } from "$lib/ts/utils";

	let className: string | undefined | null = undefined;

	export { className as class };
</script>

<div class={cn("flex flex-wrap items-center gap-4", className)}>
	<slot />
</div>
