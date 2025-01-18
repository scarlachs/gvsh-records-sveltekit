<script lang="ts">
	import { cn } from "$lib/ts/utils";

	type Props = {
		class?: string | undefined | null;
		children?: import("svelte").Snippet;
	};

	let { class: className = undefined, children }: Props = $props();
</script>

<h1 class={cn("text-2xl font-bold md:text-3xl", className)}>
	{@render children?.()}
</h1>
