<script>
	import { links } from "$lib/ts/constants";
	import { buttonVariants } from "./ui/button";
	import { GithubLogo, LinkedinLogo } from "svelte-radix";
</script>

<nav class="flex items-center" aria-label="Social Navigation">
	<a
		href={links.github}
		class={buttonVariants({ variant: "ghost", size: "icon" })}
		aria-label="Pascal on GitHub"
	>
		<GithubLogo class="size-5" />
	</a>
	<a
		href={links.linkedin}
		class={buttonVariants({ variant: "ghost", size: "icon" })}
		aria-label="Pascal on LinkedIn"
	>
		<LinkedinLogo class="size-5" />
	</a>
</nav>
