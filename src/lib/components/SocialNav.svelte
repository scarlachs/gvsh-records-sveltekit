<script lang="ts">
	import { LINK_GITHUB, LINK_LINKEDIN } from "$lib/ts/constants";
	import Github from "$lib/components/icons/github.svg.svelte";
	import { buttonVariants } from "$lib/components/ui/button";
	import LinkedIn from "$lib/components/icons/linkedin.svg.svelte";
</script>

<nav class="flex items-center" aria-label="Social Navigation">
	<a href={LINK_GITHUB} class={buttonVariants({ variant: "ghost", size: "icon" })}>
		<Github class="h-auto w-5" />
	</a>
	<a href={LINK_LINKEDIN} class={buttonVariants({ variant: "ghost", size: "icon" })}>
		<LinkedIn class="h-auto w-5" />
	</a>
</nav>
