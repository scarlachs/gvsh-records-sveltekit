<script lang="ts">
	import PascalLogo from "$lib/components/logos/PascalLogo.svg.svelte";
	import ModeToggle from "$lib/components/ModeToggle.svelte";
	import SocialNav from "$lib/components/SocialNav.svelte";
	import Separator from "$lib/components/ui/separator/separator.svelte";
	import MainNav from "$lib/components/MainNav.svelte";
	import { onMount } from "svelte";
	import { animateFadeIn } from "$lib/ts/utils";

	let trigger: HTMLElement;
	let target: HTMLElement;

	onMount(() => {
		animateFadeIn(trigger, target);
	});
</script>

<header
	class="sticky top-0 z-50 overflow-clip border-b border-slate-900/10 backdrop-blur supports-[backdrop-filter]:bg-slate-100/60 dark:border-slate-50/10 dark:supports-[backdrop-filter]:bg-slate-950/60"
	bind:this={trigger}
>
	<div
		class="container flex items-center justify-between py-2.5 motion-safe:-translate-y-full motion-safe:opacity-0"
		bind:this={target}
	>
		<a
			class="h-9 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
			href="/"
		>
			<PascalLogo class="inline-flex h-full w-auto" />
			<span class="sr-only">Pascal</span>
		</a>

		<div class="flex h-9 items-center space-x-2">
			<MainNav />
			<Separator orientation="vertical" class="max-sm:hidden" />
			<div class="flex items-center">
				<SocialNav />
				<ModeToggle />
			</div>
		</div>
	</div>
</header>
