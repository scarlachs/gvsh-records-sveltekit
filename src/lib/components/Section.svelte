<script lang="ts">
	import { animateFadeIn, cn } from "$lib/ts/utils";
	import type { SectionProps } from "$lib/ts/types";
	import { onMount } from "svelte";

	let { class: className = undefined, id = undefined, children }: SectionProps = $props();

	let trigger: HTMLElement;
	let target: HTMLElement;

	onMount(() => {
		animateFadeIn(trigger, target);
	});
</script>

<section class={cn("container mb-16  scroll-mt-20 md:mb-32", className)} {id} bind:this={trigger}>
	<div class="motion-safe:translate-y-[100px] motion-safe:opacity-0" bind:this={target}>
		{@render children?.()}
	</div>
</section>
