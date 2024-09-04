<script>
	import ButtonGroup from "./ButtonGroup.svelte";
	import { buttonVariants } from "./ui/button";
	import FrontendDevPascal from "$lib/images/Frontend-Developer-Pascal-Schaar.jpg?enhanced";
	import Section from "./Section.svelte";
</script>

<Section class="pt-16">
	<div class="relative md:flex md:items-center md:justify-center md:gap-10">
		<div class="md:w-6/12 xl:w-5/12">
			<h1 class="mb-5 text-4xl font-bold max-md:pe-24 lg:text-5xl">Frontend-Entwickler</h1>
			<p class="mb-10 text-lg sm:max-lg:w-10/12 xl:w-11/12">
				Moin! Und willkommen in meiner Welt des Codes! Ich bin Frontend-Entwickler und zeige
				hier eine Auswahl meiner bisherigen Projekte.
			</p>
			<ButtonGroup>
				<a href="/#projects" class={buttonVariants({ variant: "default" })}
					>Aktuelle Projekte</a
				>
				<a href="/#about" class={buttonVariants({ variant: "secondary" })}>Über mich</a>
			</ButtonGroup>
		</div>
		<div class="md:w-6/12 xl:w-5/12">
			<enhanced:img
				src={FrontendDevPascal}
				alt="Ein Portrait von Pascal Schaar"
				class="img-mask h-auto w-full"
			/>
		</div>
	</div>
</Section>

<style>
	@media (min-width: 768px) {
		.img-mask {
			mask-image: url($lib/images/blob.svg);
			mask-repeat: no-repeat;
			mask-size: 100% 100%;
			mask-position: -1.5rem center;
		}
	}
</style>
