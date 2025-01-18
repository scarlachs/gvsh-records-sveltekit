<script lang="ts">
	import { cn } from "$lib/ts/utils";
	import type { ButtonProps } from "$lib/ts/types";

	let { class: className = undefined, children }: ButtonProps = $props();
</script>

<div class={cn("flex flex-wrap items-center gap-4", className)}>
	{@render children?.()}
</div>
