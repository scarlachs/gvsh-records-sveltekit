<script lang="ts">
	import { Accordion as AccordionPrimitive, type WithoutChild } from "bits-ui";
	import ChevronDown from "lucide-svelte/icons/chevron-down";
	import { cn } from "$lib/ts/utils.js";

	let {
		ref = $bindable(null),
		class: className,
		level = 3,
		children,
		...restProps
	}: WithoutChild<AccordionPrimitive.TriggerProps> & {
		level?: AccordionPrimitive.HeaderProps["level"];
	} = $props();
</script>

<AccordionPrimitive.Header {level} class="flex">
	<AccordionPrimitive.Trigger
		bind:ref
		class={cn(
			"group flex flex-1 items-center justify-between rounded-md py-4 text-lg hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground motion-safe:transition-all",
			className
		)}
		{...restProps}
	>
		{@render children?.()}
		<ChevronDown
			class="size-5 shrink-0 text-muted-foreground group-hover:text-foreground group-data-[state=open]:rotate-180 motion-safe:transition-transform motion-safe:duration-200"
		/>
	</AccordionPrimitive.Trigger>
</AccordionPrimitive.Header>
