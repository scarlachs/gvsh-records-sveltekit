import type { Picture } from "vite-imagetools";
import type { Snippet } from "svelte";

type Stack =
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
	| "astro"
	| "react"
	| "nextjs"
	| "typo3"
	| "storyblok"
	| "gsap";

type ChildrenProps = {
	children?: Snippet;
};

type ClassProps = {
	class?: string | null;
};

type ButtonProps = ClassProps & ChildrenProps;

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

type IdProps = {
	id: string;
};

type SectionProps = {
	id?: string;
} & ClassProps &
	ChildrenProps;

type TransitionProps = {
	url: string;
} & ChildrenProps;

type TechstackProps = {
	items: Stack[];
} & IdProps;

type TechstackLogoProps = {
	item: Stack;
	class?: string;
} & LogoProps;

type LogoProps = {
	wordmark?: boolean;
	[key: string]: any;
};

export type {
	Stack,
	ClassProps,
	ChildrenProps,
	ButtonProps,
	ListItem,
	Project,
	ProjectProps,
	IdProps,
	SectionProps,
	TransitionProps,
	TechstackProps,
	TechstackLogoProps,
	LogoProps
};
