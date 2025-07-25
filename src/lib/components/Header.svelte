<script lang="ts">
	import ModeToggle from "$lib/components/ModeToggle.svelte";
	import SocialNav from "$lib/components/SocialNav.svelte";
	import Separator from "$lib/components/ui/separator/separator.svelte";
	import { buttonVariants } from "$lib/components/ui/button";
</script>

<header
	class="supports-backdrop-filter:bg-background/60 sticky top-0 z-50 overflow-clip border-b border-slate-900/10 backdrop-blur dark:border-slate-50/10"
>
	<div class="container flex items-center justify-end py-2">
		<div class="flex h-9 items-center space-x-2">
			<nav class="flex items-center" aria-label="Hauptnavigation">
				{#each ["Männer", "Frauen"] as item}
					<a href="/#{item}" class={buttonVariants({ variant: "ghost" })}>
						{item}
					</a>
				{/each}
			</nav>
			<Separator orientation="vertical" />
			<div class="flex items-center">
				<SocialNav />
				<ModeToggle />
			</div>
		</div>
	</div>
</header>
