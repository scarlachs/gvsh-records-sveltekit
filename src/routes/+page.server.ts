import type { Stack } from "$lib/ts/types";
import type { PageServerLoad } from "./$types";

const items: Stack[] = [
	"html",
	"css",
	"tailwindcss",
	"shadcn",
	"bootstrap",
	"scss",
	"javascript",
	"typescript",
	"sveltekit",
	"astro",
	"react",
	"nextjs",
	"typo3",
	"storyblok",
	"gsap"
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
