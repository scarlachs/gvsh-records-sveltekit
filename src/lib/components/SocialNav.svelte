<script lang="ts">
	import { LINK_GITHUB, LINK_LINKEDIN } from "$lib/ts/constants";
	import { buttonVariants } from "./ui/button";
	import { GithubLogo, LinkedinLogo } from "svelte-radix";
</script>

<nav class="flex items-center" aria-label="Social Navigation">
	<a
		href={LINK_GITHUB}
		class={buttonVariants({ variant: "ghost", size: "icon" })}
		aria-label="Pascal on GitHub"
	>
		<GithubLogo class="h-auto w-5" />
	</a>
	<a
		href={LINK_LINKEDIN}
		class={buttonVariants({ variant: "ghost", size: "icon" })}
		aria-label="Pascal on LinkedIn"
	>
		<LinkedinLogo class="h-auto w-5" />
	</a>
</nav>
