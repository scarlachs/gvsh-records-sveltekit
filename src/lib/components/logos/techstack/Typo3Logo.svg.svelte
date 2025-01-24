<script lang="ts">
	import type { SVGAttributes } from "svelte/elements";
	import { cn, randomAlphaNumeric } from "$lib/ts/utils";
	import type { LogoProps } from "$lib/ts/types";

	const id = `typo3-${randomAlphaNumeric()}`;
	let { wordmark, ...restProps }: LogoProps = $props();

	type $$Props = SVGAttributes<SVGElement>;
</script>

<svg
	width="40"
	height="40"
	viewBox="0 0 40 40"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	aria-labelledby={id}
	{...restProps}
	class={cn(restProps.class, "text-[#000000] dark:text-[#FF8700]")}
>
	<title {id}>TYPO3</title>
	<path
		d="M29.7385 27.3796C29.194 27.5445 28.6275 27.6254 28.0585 27.6196C23.0585 27.6196 15.6085 9.97963 15.6085 4.11963C15.6085 1.94963 16.1185 1.22963 16.8385 0.619629C10.6685 1.33963 3.25853 3.61963 0.838533 6.47963C0.234681 7.47045 -0.0547043 8.62102 0.00853323 9.77963C0.00853323 18.9396 9.78853 39.7796 16.6885 39.7796C19.8785 39.7796 25.2585 34.5296 29.6885 27.4296"
		fill="#FF8700"
	></path>
	<path
		d="M26.5184 0C32.8984 0 39.2884 1 39.2884 4.63C39.2884 11.94 34.6484 20.79 32.2884 20.79C28.0684 20.79 22.8184 9.06 22.8184 3.19C22.8184 0.51 23.8184 0 26.5284 0"
		fill="#FF8700"
	></path>
</svg>
