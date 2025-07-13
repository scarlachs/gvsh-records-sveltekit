<script lang="ts">
	import Section from "$lib/components/Section.svelte";
	import Headline1 from "$lib/components/typography/Headline1.svelte";
	import Headline2 from "$lib/components/typography/Headline2.svelte";
	import Headline3 from "$lib/components/typography/Headline3.svelte";
	import Headline4 from "$lib/components/typography/Headline4.svelte";
	import * as Table from "$lib/components/ui/table/index.js";
	import recordsRaw from "$lib/data/records.json";
	import type { Record } from "$lib/ts/types";
	import { groupByMultipleToArray } from "$lib/ts/utils";
	import Link from "@lucide/svelte/icons/link";

	const records: Record[] = recordsRaw;

	const groups = groupByMultipleToArray(records, ["sex", "group", "discipline"]);
</script>

<Section class="pt-16 md:pt-20">
	<Headline1 class="mb-8">Liste der Rekorde im GVSH im Kraftdreikampf</Headline1>
	<div class="prose prose-stone dark:prose-invert">
		<p>Es zählen nur angemeldete Rekordversuche auf einer LM. DM Versuche zählen immer.</p>
		<p>
			Diese Liste entstand privat und nicht im Auftrag vom GVSH. Diese Website steht in keinem
			Zusammenhang zum GVSH.
		</p>
		<p>Großes Dank an Peter Svend Guhlke zur Bereitstellung dieser Daten.</p>
	</div>
</Section>

{#each groups as { key: sex, children: ageGroups }, i}
	<Section>
		<Headline2 class="bg-background group/h2 flex scroll-mt-20 items-center gap-2" id={sex}>
			{sex}
			<a class="hidden group-hover/h2:block" href="/#{sex}">
				<Link
					class="size-5 text-stone-700 hover:text-stone-950 dark:text-stone-300 dark:hover:text-stone-50"
				/>
			</a>
		</Headline2>

		{#if ageGroups}
			{#each ageGroups as { key: age, children: classGroups }, j}
				<Headline3
					class="bg-background group/h3 mt-8 flex scroll-mt-20 items-center gap-2"
					id="{sex}-{age}"
				>
					{age}
					<a class="hidden group-hover/h3:block" href="/#{sex}-{age}">
						<Link
							class="size-5 text-stone-700 hover:text-stone-950 dark:text-stone-300 dark:hover:text-stone-50"
						/>
					</a>
				</Headline3>

				{#if classGroups}
					{#each classGroups as { key: discipline, items: classGroup }, k}
						<Headline4
							class="bg-background group/h4 mt-4 flex scroll-mt-20 items-center gap-2"
							id="{sex}-{age}-{discipline}"
						>
							{discipline}
							<a
								class="hidden group-hover/h4:block"
								href="/#{sex}-{age}-{discipline}"
							>
								<Link
									class="size-5 text-stone-700 hover:text-stone-950 dark:text-stone-300 dark:hover:text-stone-50"
								/>
							</a>
						</Headline4>

						{#if classGroup}
							<Table.Root class="mt-1">
								<!-- <Table.Caption>A list of your recent invoices.</Table.Caption> -->
								<Table.Header>
									<Table.Row>
										<Table.Head>Klasse</Table.Head>
										<Table.Head>Gewicht</Table.Head>
										<Table.Head>Name</Table.Head>
										<Table.Head>Datum</Table.Head>
										<Table.Head>Ort</Table.Head>
										<Table.Head>Verein</Table.Head>
									</Table.Row>
								</Table.Header>
								<Table.Body>
									{#each classGroup as item}
										{@const date = item.date ? new Date(item.date) : null}
										{@const options: Intl.DateTimeFormatOptions = {
											year: "numeric",
											month: "2-digit",
											day: "2-digit"
										}}
										<Table.Row>
											<Table.Cell>{item.class} kg</Table.Cell>
											<Table.Cell>
												{item.weight
													? `${item.weight?.toString().replaceAll(".", ",")} kg`
													: "-"}
											</Table.Cell>
											<Table.Cell>{item.name ? item.name : "-"}</Table.Cell>
											<Table.Cell>
												{date
													? date.toLocaleDateString("de-DE", options)
													: "-"}
											</Table.Cell>
											<Table.Cell>
												{item.location ? item.location : "-"}
											</Table.Cell>
											<Table.Cell>
												{item.club ? item.club : "-"}
											</Table.Cell>
										</Table.Row>
									{/each}
								</Table.Body>
							</Table.Root>
						{/if}
					{/each}
				{/if}
			{/each}
		{/if}
	</Section>
{/each}
