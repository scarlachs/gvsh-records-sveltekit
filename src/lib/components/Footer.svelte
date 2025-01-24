<script lang="ts">
	import { animateFadeIn, cn } from "$lib/ts/utils";
	import type { ListItem } from "$lib/ts/types";
	import SocialNav from "$lib/components/SocialNav.svelte";
	import { buttonVariants } from "$lib/components/ui/button";
	import Separator from "$lib/components/ui/separator/separator.svelte";
	import { onMount } from "svelte";

	const items: ListItem[] = [
		{
			label: "Impressum",
			link: "/impressum"
		},
		{
			label: "Datenschutz",
			link: "/datenschutz"
		}
	];

	let trigger: HTMLElement;
	let target: HTMLElement;

	onMount(() => {
		animateFadeIn(trigger, target);
	});
</script>

<footer class="container overflow-clip" bind:this={trigger}>
	<div
		class="flex items-center justify-between gap-4 py-4 motion-safe:translate-y-full motion-safe:opacity-0 max-md:flex-col-reverse md:gap-6 md:py-2.5"
		bind:this={target}
	>
		<p>Copyright &copy; {new Date().getFullYear()} Pascal Schaar</p>
		<div class="flex items-center gap-4 max-md:flex-col md:h-9 md:gap-2">
			<SocialNav />
			<Separator orientation="vertical" class="max-md:hidden" />
			<nav class="flex items-center">
				{#each items as item}
					<a
						href={item.link}
						class={cn(buttonVariants({ variant: "link" }), " text-current")}
						>{item.label}</a
					>
				{/each}
			</nav>
		</div>
	</div>
</footer>
