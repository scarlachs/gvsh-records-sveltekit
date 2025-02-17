<script lang="ts">
	import "~/app.css";
	import "@fontsource-variable/montserrat";
	import { onMount } from "svelte";
	import { page } from "$app/state";
	import ViewTransition from "$lib/navigation.svelte";
	import PageTransition from "$lib/transition.svelte";
	import { ModeWatcher } from "mode-watcher";
	import Header from "$lib/components/Header.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import gsap from "gsap";
	import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
	import type { HTMLAttributes } from "svelte/elements";

	let { children }: HTMLAttributes<HTMLDivElement> = $props();

	let viewTransitionAPI = $state(false);

	if (typeof window !== "undefined") {
		gsap.registerPlugin(ScrollTrigger);
	}

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

<svelte:head>
	{#if page.data.title}
		<meta name="title" content="{page.data.title} | Pascal Schaar" />
		<title>{page.data.title} | Pascal Schaar</title>
		<meta property="og:title" content="{page.data.title} | Pascal Schaar" />
	{/if}

	{#if page.data.description}
		<meta name="description" content={page.data.description} />
		<meta property="og:description" content={page.data.description} />
	{/if}

	<meta property="og:type" content="website" />
	<meta property="og:url" content={page.url.href} />
	<meta property="og:locale" content="de_DE" />

	<meta name="url" content={page.url.href} />
	<link rel="canonical" href={page.url.href} />

	<meta name="generator" content="SvelteKit v2.5.26" />
</svelte:head>

<ViewTransition />

<ModeWatcher />

<Header />

<main>
	{#if !viewTransitionAPI}
		<PageTransition url={page.url.pathname}>
			{@render children?.()}
		</PageTransition>
	{:else}
		{@render children?.()}
	{/if}
</main>

<Footer />
