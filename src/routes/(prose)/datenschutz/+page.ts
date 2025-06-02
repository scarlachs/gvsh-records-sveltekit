import type { PageLoad } from "./$types";

export const load = (async () => {
	return {
		title: "Datenschutz",
		description: "Ich bin Frontend-Entwickler und zeige hier die Datenschutzerklärung."
	};
}) satisfies PageLoad;
