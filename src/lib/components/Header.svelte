<script lang="ts">
	import PascalLogo from "$lib/components/logos/PascalLogo.svg.svelte";
	import ModeToggle from "$lib/components/ModeToggle.svelte";
	import SocialNav from "$lib/components/SocialNav.svelte";
	import Separator from "$lib/components/ui/separator/separator.svelte";
	import { buttonVariants } from "$lib/components/ui/button";
</script>

<header
	class="supports-backdrop-filter:bg-background/60 sticky top-0 z-50 overflow-clip border-b border-slate-900/10 backdrop-blur dark:border-slate-50/10"
>
	<div class="container flex items-center justify-end py-2">
		<!-- <a
			class="focus-visible:ring-foreground focus-visible:ring-offset-background h-11 rounded-md focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:outline-none"
			href="/"
		>
			<PascalLogo class="inline-flex h-full w-auto" />
			<span class="sr-only">Pascal</span>
		</a> -->

		<div class="flex h-9 items-center space-x-2">
			<nav class="flex items-center max-sm:hidden" aria-label="Hauptnavigation">
				{#each ["Männer", "Frauen"] as item}
					<a href="/#{item}" class={buttonVariants({ variant: "ghost" })}>
						{item}
					</a>
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
