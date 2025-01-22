<script lang="ts">
	import type { TechstackProps } from "$lib/ts/types";
	import Section from "$lib/components/Section.svelte";
	import * as Carousel from "$lib/components/ui/carousel/index.js";
	import AutoScroll from "embla-carousel-auto-scroll";
	import TechstackLogo from "$lib/components/logos/TechstackLogo.svelte";

	let { id, items }: TechstackProps = $props();
</script>

<Section {id}>
	<Carousel.Root
		opts={{
			align: "start",
			loop: true
		}}
		plugins={[
			AutoScroll({
				speed: 0.8,
				startDelay: 0,
				stopOnInteraction: false,
				stopOnMouseEnter: true
			})
		]}
	>
		<Carousel.Content class="-ml-8 items-center lg:-ml-20">
			{#each items as item}
				<Carousel.Item class="basis-auto pl-8 lg:pl-20">
					<span class="text-4xl font-semibold">
						<TechstackLogo {item} class="h-6 w-auto lg:h-12" wordmark={true} />
					</span>
				</Carousel.Item>
			{/each}
		</Carousel.Content>
		<div class="overlay"></div>
	</Carousel.Root>
</Section>

<style lang="postcss">
	.overlay {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		background-image: linear-gradient(
			90deg,
			hsl(var(--background)) 3%,
			hsl(var(--background) / 0) 25%,
			hsl(var(--background) / 0) 75%,
			hsl(var(--background)) 97%
		);
		pointer-events: none;
		z-index: 99;
	}
</style>
