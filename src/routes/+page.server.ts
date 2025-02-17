import type { Stack } from "$lib/ts/types";
import type { PageServerLoad } from "./$types";

const items: Stack[] = [
	"astro",
	"bootstrap",
	"css",
	"gsap",
	"html",
	"javascript",
	"nextjs",
	"react",
	"scss",
	"shadcn",
	"storyblok",
	"sveltekit",
	"tailwindcss",
	"typescript",
	"typo3"
];

export const load: PageServerLoad = async () => {
	const shuffledItems = [...items].sort(() => Math.random() - 0.5);

	return {
		title: "Frontend Entwickler",
		description:
			"Ich bin Frontend-Entwickler und zeige hier eine Auswahl meiner bisherigen Projekte. ⇒ Jetzt dein Projekt anfragen.",
		items: shuffledItems
	};
};
