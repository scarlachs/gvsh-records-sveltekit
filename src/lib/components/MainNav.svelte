<script lang="ts">
	import type { ListItem } from "$lib/ts/types";
	import { buttonVariants } from "./ui/button";

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
</script>

<nav class="flex items-center max-sm:hidden" aria-label="Main Navigation">
	{#each items as item}
		<a href="/#{item.link}" class={buttonVariants({ variant: "ghost" })}>{item.label}</a>
	{/each}
</nav>
