<script lang="ts">
	import AstroLogo from "$lib/components/logos/techstack/AstroLogo.svelte";
	import BootstrapLogo from "$lib/components/logos/techstack/BootstrapLogo.svg.svelte";
	import CssLogo from "$lib/components/logos/techstack/CssLogo.svg.svelte";
	import HtmlLogo from "$lib/components/logos/techstack/HtmlLogo.svg.svelte";
	import JavascriptLogo from "$lib/components/logos/techstack/JavascriptLogo.svg.svelte";
	import NextjsLogo from "$lib/components/logos/techstack/NextjsLogo.svg.svelte";
	import ReactLogo from "$lib/components/logos/techstack/ReactLogo.svg.svelte";
	import ScssLogo from "$lib/components/logos/techstack/ScssLogo.svg.svelte";
	import ShadcnLogo from "$lib/components/logos/techstack/ShadcnLogo.svg.svelte";
	import ShadcnSvelteLogo from "$lib/components/logos/techstack/ShadcnsvelteLogo.svg.svelte";
	import StoryblokLogo from "$lib/components/logos/techstack/StoryblokLogo.svg.svelte";
	import SveltekitLogo from "$lib/components/logos/techstack/SveltekitLogo.svg.svelte";
	import TailwindcssLogo from "$lib/components/logos/techstack/TailwindcssLogo.svg.svelte";
	import TypescriptLogo from "$lib/components/logos/techstack/TypescriptLogo.svg.svelte";
	import Typo3Logo from "$lib/components/logos/techstack/Typo3Logo.svg.svelte";
	import type { TechstackLogoProps } from "$lib/ts/types";
	import type { SVGAttributes } from "svelte/elements";
	import GsapLogo from "./techstack/GsapLogo.svelte";

	let {
		item,
		class: className,
		wordmark = false,
		...restProps
	}: TechstackLogoProps & SVGAttributes<SVGElement> = $props();
</script>

{#if item === "astro"}
	<AstroLogo class={className} {wordmark} {...restProps} />
{:else if item === "bootstrap"}
	<BootstrapLogo class={className} {...restProps} />
{:else if item === "css"}
	<CssLogo class={className} {...restProps} />
{:else if item === "gsap"}
	<GsapLogo class={className} {wordmark} {...restProps} />
{:else if item === "html"}
	<HtmlLogo class={className} {...restProps} />
{:else if item === "javascript"}
	<JavascriptLogo class={className} {...restProps} />
{:else if item === "nextjs"}
	<NextjsLogo class={className} {wordmark} {...restProps} />
{:else if item === "react"}
	<ReactLogo class={className} {...restProps} />
{:else if item === "scss"}
	<ScssLogo class={className} {...restProps} />
{:else if item === "shadcn"}
	<ShadcnLogo class={className} {wordmark} {...restProps} />
{:else if item === "shadcn-svelte"}
	<ShadcnSvelteLogo class={className} {...restProps} />
{:else if item === "storyblok"}
	<StoryblokLogo class={className} {wordmark} {...restProps} />
{:else if item === "sveltekit"}
	<SveltekitLogo class={className} {wordmark} {...restProps} />
{:else if item === "tailwindcss"}
	<TailwindcssLogo class={className} {wordmark} {...restProps} />
{:else if item === "typescript"}
	<TypescriptLogo class={className} {...restProps} />
{:else if item === "typo3"}
	<Typo3Logo class={className} {...restProps} />
{/if}
