<script lang="ts">
	import PascalLogo from "$lib/components/logos/PascalLogo.svg.svelte";
	import ModeToggle from "$lib/components/ModeToggle.svelte";
	import SocialNav from "$lib/components/SocialNav.svelte";
	import Separator from "$lib/components/ui/separator/separator.svelte";
	import { onMount } from "svelte";
	import { animateFadeIn } from "$lib/ts/utils";
	import type { ListItem } from "$lib/ts/types";
	import { buttonVariants } from "$lib/components/ui/button";

	const items: ListItem[] = [
		{
			label: "Projekte",
			link: "projects"
		},
		{
			label: "Über mich",
			link: "about"
		},
		{
			label: "Kontakt",
			link: "contact"
		}
	];

	let trigger: HTMLElement;
	let target: HTMLElement;

	onMount(() => {
		animateFadeIn(trigger, target);
	});
</script>

<header
	class="sticky top-0 z-50 overflow-clip border-b border-slate-900/10 backdrop-blur supports-backdrop-filter:bg-slate-100/60 dark:border-slate-50/10 dark:supports-backdrop-filter:bg-slate-950/60"
	bind:this={trigger}
>
	<div
		class="container flex items-center justify-between py-3 motion-safe:-translate-y-full motion-safe:opacity-0"
		bind:this={target}
	>
		<a
			class="focus-visible:ring-foreground focus-visible:ring-offset-background h-9 rounded-md focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:outline-none"
			href="/"
		>
			<PascalLogo class="motion-safe:animate-logo-rotate inline-flex h-full w-auto" />
			<span class="sr-only">Pascal</span>
		</a>

		<div class="flex h-9 items-center space-x-2">
			<nav class="flex items-center max-sm:hidden" aria-label="Hauptnavigation">
				{#each items as item}
					<a href="/#{item.link}" class={buttonVariants({ variant: "ghost" })}
						>{item.label}</a
					>
				{/each}
			</nav>
			<Separator orientation="vertical" class="max-sm:hidden" />
			<div class="flex items-center">
				<SocialNav />
				<ModeToggle />
			</div>
		</div>
	</div>
</header>
