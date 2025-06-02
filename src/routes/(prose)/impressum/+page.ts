import type { PageLoad } from "./$types";

export const load = (async () => {
	return {
		title: "Impressum",
		description: "Ich bin Frontend-Entwickler und zeige hier die Pflichtangaben im Impressum."
	};
}) satisfies PageLoad;
