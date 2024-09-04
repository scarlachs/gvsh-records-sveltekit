<script lang="ts">
	import { buttonVariants } from "./ui/button";

	const items: { label: string; anchor: string }[] = [
		{
			label: "Projekte",
			anchor: "projects"
		},
		{
			label: "Über mich",
			anchor: "about"
		},
		{
			label: "Kontakt",
			anchor: "contact"
		}
	];
</script>

<nav class="flex items-center max-sm:hidden" aria-label="Main Navigation">
	{#each items as item}
		<a href="/#{item.anchor}" class={buttonVariants({ variant: "ghost" })}>{item.label}</a>
	{/each}
</nav>
