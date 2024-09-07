export const prerender = true;

/** @type {import('./$types').LayoutServerLoad} */
export const load = async () => {
	return {
		head: {
			title: "Frontend Entwickler",
			description:
				"Ich bin Frontend-Entwickler und zeige hier eine Auswahl meiner bisherigen Projekte. ⇒ Jetzt dein Projekt anfragen."
		}
	};
};
