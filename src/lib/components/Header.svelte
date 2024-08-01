<script>
	import Pascal from "$lib/components/icons/pascal.svg.svelte";
	import ModeToggle from "$lib/components/ModeToggle.svelte";
	import SocialNav from "$lib/components/SocialNav.svelte";
	import Separator from "$lib/components/ui/separator/separator.svelte";
	import MainNav from "./MainNav.svelte";
</script>

<header
	class="sticky top-0 z-50 border-b border-slate-900/10 backdrop-blur supports-[backdrop-filter]:bg-slate-100/60 dark:border-slate-50/10 dark:supports-[backdrop-filter]:bg-slate-950/60"
>
	<div class="container flex items-center justify-between py-2.5">
		<a
			class="h-9 rounded-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 dark:focus-visible:ring-slate-300"
			href="/"
		>
			<Pascal class="inline-flex h-full w-auto" />
			<span class="sr-only">Pascal</span>
		</a>

		<div class="flex h-9 items-center space-x-2">
			<MainNav />

			<Separator orientation="vertical" />

			<div class="flex items-center">
				<SocialNav />
				<ModeToggle />
			</div>
		</div>
	</div>
</header>
