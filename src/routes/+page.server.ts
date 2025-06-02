import type { Stack } from "$lib/ts/types";
import { shuffleArray } from "$lib/ts/utils";
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

export const load = (async ({ setHeaders }) => {
	setHeaders({
		"cache-control": "no-store"
	});

	const shuffledItems = shuffleArray(items);

	return {
		title: "Frontend Entwickler",
		description:
			"Ich bin Frontend-Entwickler und zeige hier eine Auswahl meiner bisherigen Projekte. ⇒ Jetzt dein Projekt anfragen.",
		items: shuffledItems
	};
}) satisfies PageServerLoad;
