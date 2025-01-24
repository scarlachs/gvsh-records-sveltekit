<script lang="ts">
	import { links } from "$lib/ts/constants";
	import GithubBrands from "svelte-awesome-icons/GithubBrands.svelte";
	import LinkedinBrands from "svelte-awesome-icons/LinkedinBrands.svelte";
	import { buttonVariants } from "$lib/components/ui/button";
</script>

<nav class="flex items-center" aria-label="Social Navigation">
	<a
		href={links.github}
		class={buttonVariants({ variant: "ghost", size: "icon" })}
		aria-label="Pascal on GitHub"
	>
		<GithubBrands />
	</a>
	<a
		href={links.linkedin}
		class={buttonVariants({ variant: "ghost", size: "icon" })}
		aria-label="Pascal on LinkedIn"
	>
		<LinkedinBrands />
	</a>
</nav>
