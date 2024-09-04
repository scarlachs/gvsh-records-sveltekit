<script lang="ts">
	import * as Accordion from "$lib/components/ui/accordion";
	import Section from "./Section.svelte";

	const wendwebProjects: { label: string; link: string }[] = [
		{
			label: "NETFOX AG",
			link: "https://www.netfox.de"
		},
		{
			label: "Alerds-Stiftung",
			link: "https://www.alerds-stiftung.de"
		},
		{
			label: "TRICOR Packaging & Logistics AG",
			link: "https://www.tricor.de"
		},
		{
			label: "wendweb GmbH",
			link: "https://www.wendweb.de"
		},
		{
			label: "STEINBERG.GÄRTEN e.K.",
			link: "https://www.steinberg-gaerten.de"
		},
		{
			label: "SCHWARTAUER WERKE GmbH & Co. KG - Individuelle Etiketten konfigurieren",
			link: "https://www.schwartau-professional.de/beratung-service/individuelle-etiketten-fuer-portionsglaeser-konfigurieren#c51"
		}
	];
</script>

<Section id="about">
	<Accordion.Root class="mx-auto w-full max-w-2xl">
		<Accordion.Item value="item-1">
			<Accordion.Trigger>Wie es anfing</Accordion.Trigger>
			<Accordion.Content>
				<p class="mb-2">
					Bereits 2010 lernte ich im Schulunterricht der 7. Klasse HTML und CSS kennen.
					Das war der Anfang einer jahrelangen Leidenschaft. 2014 habe ich für mein Hobby,
					die Fotografie, meine erste eigene Website erstellt. Dadurch sammelte ich
					Erfahrungen mit JavaScript und Bootstrap. Seit 2023 ist die Website mit
					SvelteKit und TailwindCSS umgesetzt.
				</p>
				<p class="mb-2">
					2020 durfte ich für meinen Bruder, der als Fitness Coach selbstständig ist, eine
					Website entwickeln und konnte meine Erfahrungen in Bootstrap und TypeScript
					vertiefen. Seit 2024 ist die Website mit NextJS und TailwindCSS umgesetzt.
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
					Als Frontend-Entwickler bei der wendweb GmbH in Hannover habe ich von 08/2021
					bis 06/2024 unter anderem folgende Projekte umgesetzt, die mit TYPO3, Bootstrap,
					SCSS und TypeScript entstanden sind:
				</p>
				<ul class="mb-4 list-inside list-disc">
					{#each wendwebProjects as project}
						<li>
							<a
								class="underline hover:no-underline"
								href={project.link}
								rel="noopener"
								target="_blank"
							>
								{project.label}
							</a>
						</li>
					{/each}
				</ul>
				<p>
					Seit 07/2024 bin ich bei der Bytediver GmbH angestellt und freue mich darauf,
					hier zukünftig weitere Projekte zeigen zu dürfen.
				</p>
			</Accordion.Content>
		</Accordion.Item>
	</Accordion.Root>
</Section>
