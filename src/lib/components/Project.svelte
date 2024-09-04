<script lang="ts">
	import type { Project } from "../ts/types";
	import ButtonGroup from "./ButtonGroup.svelte";
	import AstroLogo from "./logos/techstack/AstroLogo.svelte";
	import BootstrapLogo from "./logos/techstack/BootstrapLogo.svg.svelte";
	import CssLogo from "./logos/techstack/CssLogo.svg.svelte";
	import HtmlLogo from "./logos/techstack/HtmlLogo.svg.svelte";
	import JavascriptLogo from "./logos/techstack/JavascriptLogo.svg.svelte";
	import NextjsLogo from "./logos/techstack/NextjsLogo.svg.svelte";
	import ReactLogo from "./logos/techstack/ReactLogo.svg.svelte";
	import ScssLogo from "./logos/techstack/ScssLogo.svg.svelte";
	import ShadcnLogo from "./logos/techstack/ShadcnLogo.svg.svelte";
	import ShadcnSvelteLogo from "./logos/techstack/ShadcnsvelteLogo.svg.svelte";
	import StoryblokLogo from "./logos/techstack/StoryblokLogo.svg.svelte";
	import SveltekitLogo from "./logos/techstack/SveltekitLogo.svg.svelte";
	import TailwindcssLogo from "./logos/techstack/TailwindcssLogo.svg.svelte";
	import TypescriptLogo from "./logos/techstack/TypescriptLogo.svg.svelte";
	import Typo3Logo from "./logos/techstack/Typo3Logo.svg.svelte";
	import WebpackLogo from "./logos/techstack/WebpackLogo.svg.svelte";
	import { buttonVariants } from "./ui/button";
	import { ExternalLink, GithubLogo } from "svelte-radix";

	export let project: Project;
	export let index: number;
</script>

<div class="mb-16 grid gap-5 last:mb-0 md:mb-24 md:grid-cols-2 md:items-center md:gap-10">
	<div class={index % 2 === 1 ? "order-2 lg:pe-16" : "max-md:order-2 lg:ps-16"}>
		{#if project.text.usedStack && project.text.usedStack.length > 0}
			<ul class="mb-2.5 flex gap-3">
				{#each project.text.usedStack as item}
					<li>
						{#if item === "html"}
							<HtmlLogo class="size-7" />
						{:else if item === "css"}
							<CssLogo class="size-7" />
						{:else if item === "tailwindcss"}
							<TailwindcssLogo class="size-7" />
						{:else if item === "shadcn"}
							<ShadcnLogo class="size-7" />
						{:else if item === "shadcn-svelte"}
							<ShadcnSvelteLogo class="size-7" />
						{:else if item === "bootstrap"}
							<BootstrapLogo class="size-7" />
						{:else if item === "scss"}
							<ScssLogo class="size-7" />
						{:else if item === "javascript"}
							<JavascriptLogo class="size-7" />
						{:else if item === "typescript"}
							<TypescriptLogo class="size-7" />
						{:else if item === "sveltekit"}
							<SveltekitLogo class="size-7" />
						{:else if item === "astro"}
							<AstroLogo class="size-7" />
						{:else if item === "react"}
							<ReactLogo class="size-7" />
						{:else if item === "nextjs"}
							<NextjsLogo class="size-7" />
						{:else if item === "webpack"}
							<WebpackLogo class="size-7" />
						{:else if item === "typo3"}
							<Typo3Logo class="size-7" />
						{:else if item === "storyblok"}
							<StoryblokLogo class="size-7" />
						{/if}
					</li>
				{/each}
			</ul>
		{/if}
		<h2 class="text-2xl font-bold md:text-3xl">{project.text.title}</h2>
		<p class="mt-2.5 text-balance">{project.text.copy}</p>
		<ButtonGroup class="mt-5">
			<a
				href={project.text.website}
				class={buttonVariants({ variant: "default" })}
				target="_blank"
				rel="noopener"
			>
				Projekt ansehen
				<ExternalLink class="ml-2 size-4" />
			</a>
			{#if project.text.github}
				<a
					href={project.text.github}
					rel="noopener"
					target="_blank"
					class={buttonVariants({ variant: "secondary" })}
					>Code ansehen
					<GithubLogo class="ml-2 size-4" />
				</a>
			{/if}
		</ButtonGroup>
	</div>
	<div class={index % 2 === 1 ? "order-1" : undefined}>
		<enhanced:img
			class="h-auto w-full"
			src={project.image.file}
			alt={project.image.alt ? project.image.alt : `Website ${project.text.website}`}
			sizes={"(max-width: 639.98px) calc(100vw - 2rem), (max-width: 767.98px) 576px, (max-width: 1023.98px) 332px, (max-width: 1279.98px) 460px, (max-width: 1399.98px) 588px, 648px"}
			loading={index === 0 ? undefined : "lazy"}
		/>
	</div>
</div>
