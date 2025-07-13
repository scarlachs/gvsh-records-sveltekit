<script lang="ts">
	import { cn } from "$lib/ts/utils";
	import type { ListItem } from "$lib/ts/types";
	import SocialNav from "$lib/components/SocialNav.svelte";
	import { buttonVariants } from "$lib/components/ui/button";
	import Separator from "$lib/components/ui/separator/separator.svelte";

	const items: ListItem[] = [
		{
			label: "Impressum",
			link: "https://www.schaar.dev/impressum",
			rel: "noopener"
		},
		{
			label: "Datenschutz",
			link: "https://www.schaar.dev/datenschutz",
			rel: "noopener"
		}
	];
</script>

<footer class="container overflow-clip">
	<div
		class="flex items-center justify-between gap-4 py-4 max-md:flex-col-reverse md:gap-6 md:py-2.5"
	>
		<p>
			Copyright &copy; {new Date().getFullYear()}
			<a href="https://www.schaar.dev" class="underline hover:no-underline">Pascal Schaar</a>
		</p>
		<div class="flex items-center gap-4 max-md:flex-col md:h-9 md:gap-2">
			<SocialNav />
			<Separator orientation="vertical" class="max-md:hidden" />
			<nav class="flex items-center">
				{#each items as item}
					<a
						href={item.link}
						rel={item.rel && item.rel}
						class={cn(buttonVariants({ variant: "link" }), " text-current")}
					>
						{item.label}
					</a>
				{/each}
			</nav>
		</div>
	</div>
</footer>
