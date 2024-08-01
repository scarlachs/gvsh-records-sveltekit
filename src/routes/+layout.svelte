<script lang="ts">
	import "~/app.css";
	import "@fontsource-variable/montserrat";
	import { onMount } from "svelte";
	import { page } from "$app/stores";
	import ViewTransition from "$lib/navigation.svelte";
	import PageTransition from "$lib/transition.svelte";
	import { ModeWatcher } from "mode-watcher";
	import Header from "$lib/components/Header.svelte";

	let viewTransitionAPI = false;

	onMount(() => {
		// @ts-ignore
		if (document.startViewTransition) viewTransitionAPI = true;

		console.log(
			`%c  

                                             888                   888
                                             888                   888
                                             888                   888
88888b.   8888b.  .d8888b   .d8888b  8888b.  888 .d8888b   .d8888b 88888b.   8888b.   8888b.  888d888
888 "88b     "88b 88K      d88P"        "88b 888 88K      d88P"    888 "88b     "88b     "88b 888P"
888  888 .d888888 "Y8888b. 888      .d888888 888 "Y8888b. 888      888  888 .d888888 .d888888 888
888 d88P 888  888      X88 Y88b.    888  888 888      X88 Y88b.    888  888 888  888 888  888 888
88888P"  "Y888888  88888P'  "Y8888P "Y888888 888  88888P'  "Y8888P 888  888 "Y888888 "Y888888 888
888
888
888

`,
			"font-family:monospace; color: #e88274;"
		);
	});
</script>

<ViewTransition />

<ModeWatcher />

<Header />

<main>
	{#if !viewTransitionAPI}
		<PageTransition url={$page.url.pathname}>
			<slot />
		</PageTransition>
	{:else}
		<slot />
	{/if}
</main>
