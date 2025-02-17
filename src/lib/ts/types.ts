import type { Picture } from "vite-imagetools";
import type { Snippet } from "svelte";

type Stack =
	| "astro"
	| "bootstrap"
	| "css"
	| "gsap"
	| "html"
	| "javascript"
	| "nextjs"
	| "react"
	| "scss"
	| "shadcn"
	| "shadcn-svelte"
	| "storyblok"
	| "sveltekit"
	| "tailwindcss"
	| "typescript"
	| "typo3";

type ListItem = {
	label: string;
	link: string;
};

type ProjectText = {
	title: string;
	copy: string;
	website: string;
	github?: string;
	usedStack: Stack[];
};

type ProjectImage = {
	file: Picture;
	alt?: string;
};

type Project = {
	text: ProjectText;
	image: ProjectImage;
};

type ProjectProps = {
	project: Project;
	index: number;
};

type TransitionProps = {
	url: string;
};

type TechstackProps = {
	items: Stack[];
};

type TechstackLogoProps = {
	item: Stack;
} & LogoProps;

type LogoProps = {
	wordmark?: boolean;
};

export type {
	Stack,
	ListItem,
	Project,
	ProjectProps,
	TransitionProps,
	TechstackProps,
	TechstackLogoProps,
	LogoProps
};
