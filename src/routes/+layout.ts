import posthog from "posthog-js";
import type { LayoutLoad } from "./$types";
import { browser, dev } from "$app/environment";
// import { PUBLIC_POSTHOG_HOST, PUBLIC_POSTHOG_KEY } from "$env/static/public";

export const prerender = true;

export const load = (async () => {
	// if (!dev && browser) {
	// 	posthog.init(PUBLIC_POSTHOG_KEY, {
	// 		api_host: PUBLIC_POSTHOG_HOST,
	// 		person_profiles: "identified_only",
	// 		capture_pageview: false,
	// 		capture_pageleave: false
	// 	});
	// }
}) satisfies LayoutLoad;
