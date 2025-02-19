<script lang="ts">
	import { links } from "$lib/ts/constants";
	import GithubBrands from "svelte-awesome-icons/GithubBrands.svelte";
	import LinkedinBrands from "svelte-awesome-icons/LinkedinBrands.svelte";
	import { buttonVariants } from "$lib/components/ui/button";
</script>

<nav class="flex items-center" aria-label="Soziale Netzwerke">
	<a
		href={links.github}
		rel="noopener"
		class={buttonVariants({ variant: "ghost", size: "icon" })}
		aria-label="Pascal auf GitHub"
	>
		<GithubBrands />
	</a>
	<a
		href={links.linkedin}
		rel="noopener"
		class={buttonVariants({ variant: "ghost", size: "icon" })}
		aria-label="Pascal auf LinkedIn"
	>
		<LinkedinBrands />
	</a>
</nav>
