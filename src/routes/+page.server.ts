import type { PageServerLoad } from "./$types";

export const prerender = true;

export const load = (async () => {
	return {
		title: "GVSH Rekorde Kraftdreikampf",
		description:
			"Hier findest du eine Liste aller Kraftdreikampf-Rekorde im Gewichtheber-Verband Schleswig-Holstein von 1982 e.V."
	};
}) satisfies PageServerLoad;
