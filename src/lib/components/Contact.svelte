<script lang="ts">
	import Section from "$lib/components/Section.svelte";
	import Headline2 from "$lib/components/typography/Headline2.svelte";
	import ButtonGroup from "$lib/components/ButtonGroup.svelte";
	import { links } from "$lib/ts/constants";
	import { buttonVariants } from "$lib/components/ui/button";
	import CalendarDays from "lucide-svelte/icons/calendar-days";
	import MessageSquareMore from "lucide-svelte/icons/message-square-more";
	import type { HTMLAttributes } from "svelte/elements";

	let { id, ...restProps }: HTMLAttributes<HTMLElement> = $props();
</script>

<Section {id} {...restProps}>
	<div class="mx-auto max-w-2xl md:text-center">
		<Headline2>Zeit für einen Kaffee?</Headline2>
		<p class="mt-2.5 text-balance">
			Du möchtest über neue Projekte sprechen? Lass uns zusammenkommen und gemeinsam
			besprechen, wie wir sie Wirklichkeit werden lassen.
		</p>
		<ButtonGroup class="mt-5 md:justify-center">
			<a href={links.calcom} rel="noopener" class={buttonVariants({ variant: "default" })}
				><CalendarDays />Kaffee-Date vereinbaren</a
			>
			<a href={links.whatsapp} rel="noopener" class={buttonVariants({ variant: "secondary" })}
				><MessageSquareMore />Text-Chat starten</a
			>
		</ButtonGroup>
	</div>
</Section>
