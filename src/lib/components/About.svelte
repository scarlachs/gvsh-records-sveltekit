<script lang="ts">
	import * as Accordion from "$lib/components/ui/accordion";
	import type { IdProps, ListItem } from "$lib/ts/types";
	import Section from "$lib/components/Section.svelte";

	const wendwebProjects: ListItem[] = [
		{
			label: "Fachklinik für Rehabilitation und Akutmedizin | DianaKlinik",
			link: "https://www.diana-klinik.de"
		},
		{
			label: "Ihr Partner für maßgeschneiderte IT-Lösungen | NETFOX AG",
			link: "https://www.netfox.de"
		},
		{
			label: "Pflegekräfte & alternative Wohnformen für Senioren | Alerds-Stiftung",
			link: "https://www.alerds-stiftung.de"
		},
		{
			label: "TRICOR Packaging & Logistics AG",
			link: "https://www.tricor.de"
		},
		{
			label: "Digitalagentur für TYPO3 & Shopware aus Hannover | wendweb GmbH",
			link: "https://www.wendweb.de"
		},
		{
			label: "Gartengestaltung in Hannover & Region | STEINBERG.GÄRTEN e.K.",
			link: "https://www.steinberg-gaerten.de"
		},
		{
			label: "Individuellen Etiketten | SCHWARTAUER WERKE GmbH & Co. KG",
			link: "https://www.schwartau-professional.de/beratung-service/individuelle-etiketten-fuer-portionsglaeser-konfigurieren#c51"
		}
	];

	const bytediverProjects: (ListItem & { stack?: string })[] = [
		{
			label: "Abteilung Digital",
			link: "https://www.abteilung-digital.de",
			stack: "TYPO3, Tailwind CSS, TypeScript"
		}
	];

	let { id }: IdProps = $props();
</script>

<Section {id}>
	<Accordion.Root type="single" class="mx-auto w-full max-w-2xl">
		<Accordion.Item value="item-1">
			<Accordion.Trigger>Wie es anfing</Accordion.Trigger>
			<Accordion.Content>
				<p class="mb-2">
					Bereits 2010 lernte ich im Schulunterricht der 7. Klasse HTML und CSS kennen.
					Das war der Anfang einer jahrelangen Leidenschaft. 2014 habe ich für mein Hobby,
					die Fotografie, meine erste eigene Website erstellt. Dadurch sammelte ich
					Erfahrungen mit JavaScript und Bootstrap. Seit 2023 ist die Website mit
					SvelteKit und Tailwind&nbsp;CSS umgesetzt.
				</p>
				<p class="mb-2">
					2020 durfte ich für meinen Bruder, der als Fitness Coach selbstständig ist, eine
					Website entwickeln und konnte meine Erfahrungen in Bootstrap und TypeScript
					vertiefen. Seit 2024 ist die Website mit Next.js und Tailwind&nbsp;CSS
					umgesetzt.
				</p>
				<p>
					Von 2017 bis 2021 studierte ich Informatik. Seit August 2021 bin ich
					hauptberuflich als Frontend-Entwickler tätig.
				</p>
			</Accordion.Content>
		</Accordion.Item>
		<Accordion.Item value="item-2">
			<Accordion.Trigger>Wie ich meine Freizeit verbringe</Accordion.Trigger>
			<Accordion.Content>
				<p class="mb-2">
					In meiner Freizeit bin ich gerne sportlich aktiv. Sei es auf dem Fahrrad, im
					Fitnessstudio, bei einem Spaziergang (zum Sonnenaufgang) oder einer Wanderung in
					der Natur, ob am Berg oder See. Im See schwimme ich im Sommer und bade im
					Winter.
				</p>
				<p>Nachts beobachte ich den Nachthimmel und verliere mich in dem Moment.</p>
			</Accordion.Content>
		</Accordion.Item>
		<Accordion.Item value="item-3">
			<Accordion.Trigger>Meine beruflichen Erfahrungen</Accordion.Trigger>
			<Accordion.Content>
				<p class="mb-2">
					Seit Juli 2024 sind bei der Bytediver GmbH unter anderem folgende Projekte
					entstanden:
				</p>
				<ul class="mb-4 list-inside list-disc">
					{#each bytediverProjects as project}
						<li>
							<p>
								<a
									class="underline hover:no-underline"
									href={`${project.link}?ref=pascalschaar`}
									rel="noopener nofollow"
									target="_blank"
								>
									{project.label}
								</a>
								{#if project.stack}- {project.stack}{/if}
							</p>
						</li>
					{/each}
				</ul>
				<p class="mb-2">
					Zuvor war ich bei der wendweb GmbH beschäftigt und habe dort von August 2021 bis
					Juni 2024 unter anderem folgende Projekte mit TYPO3, Bootstrap, SCSS und
					TypeScript umgesetzt:
				</p>
				<ul class="list-inside list-disc">
					{#each wendwebProjects as project}
						<li>
							<a
								class="underline hover:no-underline"
								href={`${project.link}?ref=pascalschaar`}
								rel="noopener nofollow"
								target="_blank"
							>
								{project.label}
							</a>
						</li>
					{/each}
				</ul>
			</Accordion.Content>
		</Accordion.Item>
	</Accordion.Root>
</Section>
