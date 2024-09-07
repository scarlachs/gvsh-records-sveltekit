<script lang="ts">
	import type { Project as TProject } from "../ts/types";
	import Project from "./Project.svelte";
	import PortfolioPhotography from "~/images/projects/website-portfolio-photography.png?enhanced";
	import PortfolioDeveloper from "~/images/projects/website-portfolio-developer.png?enhanced";
	import LandingpagePersonalCoach from "~/images/projects/website-landingpage-personal-coach.png?enhanced";
	import LandingpageMediaDesigner from "~/images/projects/website-landingpage-media-designer.png?enhanced";
	import Section from "./Section.svelte";

	const projects: TProject[] = [
		{
			text: {
				title: "Portfolio: Fotografie",
				copy: "Eine Website, die meine Leidenschaft als Fotograf übersichtlich darstellt. Einfache Nutzerführung und ein exklusiver Model-Login.",
				website: "https://pascal.photos",
				usedStack: ["sveltekit", "typescript", "tailwindcss"]
			},
			image: {
				file: PortfolioPhotography
			}
		},
		{
			text: {
				title: "Portfolio: Entwicklung",
				copy: "Willkommen in meiner Welt des Codes! Diese Website betrachtest du bereits. Wahlweise im Light- oder Dark-Mode.",
				website: "https://schaar.dev",
				github: "https://github.com/scarlachs/dev-portfolio-sveltekit",
				usedStack: ["sveltekit", "typescript", "tailwindcss", "shadcn-svelte"]
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
				usedStack: ["nextjs", "react", "typescript", "tailwindcss", "shadcn"]
			},
			image: {
				file: LandingpagePersonalCoach
			}
		},
		{
			text: {
				title: "Landingpage: Mediendesigner",
				copy: "",
				website: "https://www.creativestudio-lb.de",
				usedStack: ["sveltekit", "typescript", "tailwindcss", "storyblok"]
			},
			image: {
				file: LandingpageMediaDesigner
			}
		}
	];
</script>

<Section id="projects">
	{#each projects as project, index}
		<Project {project} {index} />
	{/each}
</Section>
