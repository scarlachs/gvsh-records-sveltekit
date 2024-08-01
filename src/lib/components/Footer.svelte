<script lang="ts">
	import { cn } from "../ts/utils";
	import SocialNav from "./SocialNav.svelte";
	import { buttonVariants } from "./ui/button";
	import Separator from "./ui/separator/separator.svelte";

	const items = [
		{
			label: "Impressum",
			link: "/impressum"
		},
		{
			label: "Datenschutz",
			link: "/datenschutz"
		}
	];
</script>

<footer class="container">
	<div
		class="flex items-center justify-between gap-4 py-4 max-md:flex-col-reverse md:gap-6 md:py-2.5"
	>
		<p>Copyright &copy; {new Date().getFullYear()} Pascal Schaar</p>
		<div class="flex items-center gap-4 max-md:flex-col md:h-9 md:gap-2">
			<SocialNav />
			<Separator orientation="vertical" class="max-md:hidden" />
			<nav class="flex items-center">
				{#each items as item}
					<a
						href={item.link}
						class={cn(buttonVariants({ variant: "link" }), " text-current")}
						>{item.label}</a
					>
				{/each}
			</nav>
		</div>
	</div>
</footer>
