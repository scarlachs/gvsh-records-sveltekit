<script lang="ts">
	import { onMount } from "svelte";
	import { animateFadeIn } from "$lib/ts/utils";
	import type { HTMLAttributes } from "svelte/elements";

	let { children }: HTMLAttributes<HTMLDivElement> = $props();

	let trigger: HTMLElement;

	onMount(() => {
		animateFadeIn(trigger);
	});
</script>

<svelte:head>
	<meta name="robots" content="noindex, nofollow" />
	<meta name="format-detection" content="telephone=no" />
</svelte:head>

<section
	class="container motion-safe:translate-y-[100px] motion-safe:opacity-0"
	bind:this={trigger}
>
	<div
		class="prose prose-slate mb-16 pt-16 dark:prose-invert prose-headings:hyphens-auto prose-headings:[word-break:break-word] prose-a:hyphens-none prose-a:[word-break:break-word] md:mb-24 [&_*[id]]:scroll-mt-20"
	>
		{@render children?.()}
	</div>
</section>
