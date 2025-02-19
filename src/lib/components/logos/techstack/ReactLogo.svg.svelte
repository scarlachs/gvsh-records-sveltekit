<script lang="ts">
	import type { SVGAttributes } from "svelte/elements";
	import { cn, randomAlphaNumeric } from "$lib/ts/utils";

	const id = `react-${randomAlphaNumeric()}`;
	let { ...restProps }: SVGAttributes<SVGElement> = $props();
</script>

<svg
	width="100%"
	height="100%"
	viewBox="-10.5 -9.45 21 18.9"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	aria-labelledby={id}
	{...restProps}
	class={cn(restProps.class, "text-[#087ea4] dark:text-[#58c4dc]")}
>
	<title {id}>React</title>
	<circle cx="0" cy="0" r="2" fill="currentColor"></circle>
	<g stroke="currentColor" stroke-width="1" fill="none">
		<ellipse rx="10" ry="4.5"></ellipse>
		<ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
		<ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
	</g>
</svg>
