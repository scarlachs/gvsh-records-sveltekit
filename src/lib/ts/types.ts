import type { Picture } from "vite-imagetools";

type stack =
	| "html"
	| "css"
	| "tailwindcss"
	| "shadcn"
	| "shadcn-svelte"
	| "bootstrap"
	| "scss"
	| "javascript"
	| "typescript"
	| "sveltekit"
	| "webpack"
	| "astro"
	| "react"
	| "nextjs"
	| "typo3"
	| "storyblok";

type ProjectText = {
	title: string;
	copy: string;
	website: string;
	github?: string;
	usedStack: stack[];
};

type ProjectImage = {
	file: Picture;
	alt?: string;
};

type Project = { text: ProjectText; image: ProjectImage };

export type { Project };
