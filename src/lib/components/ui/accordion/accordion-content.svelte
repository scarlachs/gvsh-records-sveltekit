<script lang="ts">
	import { Accordion as AccordionPrimitive, type WithoutChild } from "bits-ui";
	import { cn } from "$lib/ts/utils.js";

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: WithoutChild<AccordionPrimitive.ContentProps> = $props();
</script>

<AccordionPrimitive.Content
	bind:ref
	class={cn(
		"motion-safe:data-[state=closed]:animate-accordion-up motion-safe:data-[state=open]:animate-accordion-down overflow-hidden",
		className
	)}
	{...restProps}
>
	<div class="pt-0 pb-4">
		{@render children?.()}
	</div>
</AccordionPrimitive.Content>
