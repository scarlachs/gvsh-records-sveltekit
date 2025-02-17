<script lang="ts">
	import type { SVGAttributes } from "svelte/elements";
	import { randomAlphaNumeric } from "$lib/ts/utils";

	const id = `shadcn-svelte-${randomAlphaNumeric()}`;
	let { ...restProps }: SVGAttributes<SVGElement> = $props();
</script>

<svg
	width="256"
	height="256"
	viewBox="0 0 256 256"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	aria-labelledby={id}
	{...restProps}
>
	<title {id}>shadcn-svelte</title>
	<line
		x1="208"
		y1="128"
		x2="128"
		y2="208"
		fill="none"
		stroke="#EB4F27"
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width="32"
	></line>
	<line
		x1="192"
		y1="40"
		x2="40"
		y2="192"
		fill="none"
		stroke="#EB4F27"
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width="32"
	></line>
</svg>
