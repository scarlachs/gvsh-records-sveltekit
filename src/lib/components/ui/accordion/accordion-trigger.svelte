<script lang="ts">
	import { Accordion as AccordionPrimitive } from "bits-ui";
	import ChevronDown from "svelte-radix/ChevronDown.svelte";
	import { cn } from "$lib/ts/utils.js";

	type $$Props = AccordionPrimitive.TriggerProps;
	type $$Events = AccordionPrimitive.TriggerEvents;

	let className: $$Props["class"] = undefined;
	export let level: AccordionPrimitive.HeaderProps["level"] = 3;
	export { className as class };
</script>

<AccordionPrimitive.Header {level} class="flex">
	<AccordionPrimitive.Trigger
		class={cn(
			"group flex flex-1 items-center justify-between rounded-md py-4 text-lg font-bold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground motion-safe:transition-all",
			className
		)}
		{...$$restProps}
		on:click
	>
		<slot />
		<ChevronDown
			class="size-5 shrink-0 text-muted-foreground group-hover:text-foreground group-data-[state=open]:rotate-180 motion-safe:transition-transform motion-safe:duration-200"
		/>
	</AccordionPrimitive.Trigger>
</AccordionPrimitive.Header>
