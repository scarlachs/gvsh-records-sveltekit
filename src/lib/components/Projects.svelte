<script lang="ts">
	import type { Project as TProject } from "$lib/ts/types";
	import Project from "$lib/components/Project.svelte";
	import PortfolioPhotography from "$lib/images/projects/website-portfolio-photography.png?enhanced";
	import PortfolioDeveloper from "$lib/images/projects/website-portfolio-developer.png?enhanced";
	import LandingpagePersonalCoach from "$lib/images/projects/website-landingpage-personal-coach.png?enhanced";
	import Section from "$lib/components/Section.svelte";
	import type { HTMLAttributes } from "svelte/elements";
	import { cn } from "../ts/utils";

	const projects: TProject[] = [
		{
			text: {
				title: "Portfolio: Fotografie",
				copy: "Eine Website, die meine Leidenschaft als Fotograf übersichtlich darstellt. Einfache Nutzerführung und ein exklusiver Model-Login.",
				website: "https://www.pascalschaar.com",
				usedStack: ["sveltekit", "typescript", "tailwindcss", "shadcn-svelte"]
			},
			image: {
				file: PortfolioPhotography
			}
		},
		{
			text: {
				title: "Landingpage: Entwicklung",
				copy: "Willkommen in meiner Welt des Codes! Diese Website betrachtest du bereits. Wahlweise im Light- oder Dark-Mode.",
				website: "https://www.schaar.dev",
				github: "https://github.com/scarlachs/dev-portfolio-sveltekit",
				usedStack: ["sveltekit", "typescript", "tailwindcss", "shadcn-svelte", "gsap"]
			},
			image: {
				file: PortfolioDeveloper
			}
		},
		{
			text: {
				title: "Landingpage: Personal Trainer",
				copy: "Ganzheitliches Training für ein positives Lebensgefühl. Im individuellen 1:1 Personal Coaching für Körper und Geist.",
				website: "https://marcel.fit",
				usedStack: ["nextjs", "typescript", "tailwindcss", "shadcn", "storyblok"]
			},
			image: {
				file: LandingpagePersonalCoach
			}
		}
	];

	let { id, ...restProps }: HTMLAttributes<HTMLElement> = $props();
</script>

<Section {id} class={cn("overflow-clip", restProps.class)} {...restProps}>
	{#each projects as project, index}
		<Project {project} {index} />
	{/each}
</Section>
