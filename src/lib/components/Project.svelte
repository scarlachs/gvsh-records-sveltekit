<script lang="ts">
	import type { ProjectProps } from "$lib/ts/types";
	import ButtonGroup from "$lib/components/ButtonGroup.svelte";
	import { buttonVariants } from "$lib/components/ui/button";
	import ExternalLink from "lucide-svelte/icons/external-link";
	import GithubBrands from "svelte-awesome-icons/GithubBrands.svelte";
	import TechstackLogo from "$lib/components/logos/TechstackLogo.svelte";
	import { onMount } from "svelte";
	import { animateFadeIn } from "$lib/ts/utils";

	let { project, index }: ProjectProps = $props();

	let trigger: HTMLElement;
	let text: HTMLElement;
	let image: HTMLElement;

	onMount(() => {
		[text, image].forEach((target) => {
			animateFadeIn(trigger, target);
		});
	});
</script>

<div
	class="mb-16 grid gap-5 last:mb-0 md:mb-24 md:grid-cols-2 md:items-center md:gap-10"
	bind:this={trigger}
>
	<div
		class={`motion-safe:opacity-0 max-md:motion-safe:translate-y-[100px]${index % 2 === 1 ? " order-2 md:motion-safe:translate-x-[100px] lg:pe-16" : " max-md:order-2 md:motion-safe:-translate-x-[100px] lg:ps-16"}`}
		bind:this={text}
	>
		{#if project.text.usedStack && project.text.usedStack.length > 0}
			<ul class="mb-2.5 flex items-center gap-4">
				{#each project.text.usedStack as item}
					<li>
						<TechstackLogo
							{item}
							class={`size-6${item === "gsap" ? " w-auto" : " lg:size-8"}`}
						/>
					</li>
				{/each}
			</ul>
		{/if}
		<h2 class="text-2xl font-bold md:text-3xl lg:text-4xl">{project.text.title}</h2>
		<p class="mt-2.5 text-balance">{project.text.copy}</p>
		<ButtonGroup class="mt-5">
			<a
				href={`${project.text.website}?ref=schaar.dev`}
				class={buttonVariants({ variant: "default" })}
				target="_blank"
				rel="noopener"
			>
				Projekt ansehen
				<ExternalLink />
			</a>
			{#if project.text.github}
				<a
					href={project.text.github}
					rel="noopener"
					target="_blank"
					class={buttonVariants({ variant: "secondary" })}
					>Code ansehen
					<GithubBrands />
				</a>
			{/if}
		</ButtonGroup>
	</div>
	<div
		class={`aspect-[1.6530612245] w-full motion-safe:opacity-0 max-md:motion-safe:translate-y-[100px]${index % 2 === 1 ? " order-1 md:motion-safe:-translate-x-[100px]" : " md:motion-safe:translate-x-[100px]"}`}
		bind:this={image}
	>
		<enhanced:img
			class="h-auto w-full"
			src={project.image.file}
			alt={project.image.alt ? project.image.alt : `Website ${project.text.website}`}
			sizes="(max-width: 639.98px) calc(100vw - 2rem), (max-width: 767.98px) 576px, (max-width: 1023.98px) 332px, (max-width: 1279.98px) 460px, (max-width: 1399.98px) 588px, 648px"
		/>
	</div>
</div>
