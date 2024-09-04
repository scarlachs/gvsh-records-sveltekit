<script>
	import { links } from "$lib/ts/constants";
	import { Calendar, ChatBubble } from "svelte-radix";
	import ButtonGroup from "./ButtonGroup.svelte";
	import Headline2 from "./typography/Headline2.svelte";
	import { buttonVariants } from "./ui/button";
	import Section from "./Section.svelte";
</script>

<Section id="contact">
	<div class="mx-auto max-w-2xl md:text-center">
		<Headline2>Zeit für einen Kaffee?</Headline2>
		<p class="mt-2.5 text-balance">
			Du möchtest über neue Projekte sprechen? Lass uns zusammenkommen und gemeinsam
			besprechen, wie wir sie Wirklichkeit werden lassen.
		</p>
		<ButtonGroup class="mt-5 md:justify-center">
			<a href={links.calcom} rel="noopener" class={buttonVariants({ variant: "default" })}
				>Kaffee-Date vereinbaren<Calendar class="ml-2 size-4" /></a
			>
			<a href={links.whatsapp} rel="noopener" class={buttonVariants({ variant: "secondary" })}
				>Text-Chat starten<ChatBubble class="ml-2 size-4" /></a
			>
		</ButtonGroup>
	</div>
</Section>
