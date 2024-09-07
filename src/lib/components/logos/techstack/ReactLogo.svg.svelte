<script lang="ts">
	import type { SVGAttributes } from "svelte/elements";
	import { cn } from "$lib/ts/utils";

	type $$Props = SVGAttributes<SVGElement>;
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width="100%"
	height="100%"
	viewBox="-10.5 -9.45 21 18.9"
	fill="none"
	aria-labelledby="react"
	{...$$restProps}
	class={cn($$restProps.class, "text-[#087EA4] dark:text-[#149ECA]")}
>
	<title id="react">React</title>
	<circle cx="0" cy="0" r="2" fill="currentColor"></circle>
	<g stroke="currentColor" stroke-width="1" fill="none">
		<ellipse rx="10" ry="4.5"></ellipse>
		<ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
		<ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
	</g>
</svg>
