<script lang="ts">
	import Section from "$lib/components/Section.svelte";
	import Headline1 from "$lib/components/typography/Headline1.svelte";
	import Headline2 from "$lib/components/typography/Headline2.svelte";
	import Headline3 from "$lib/components/typography/Headline3.svelte";
	import Headline4 from "$lib/components/typography/Headline4.svelte";
	import recordsRaw from "$lib/data/records.json";
	import type { Record as TRecord } from "$lib/ts/types";
	import { groupByMultipleToArray } from "$lib/ts/utils";
	import Link from "@lucide/svelte/icons/link";
	import X from "@lucide/svelte/icons/x";
	import RotateCcw from "@lucide/svelte/icons/rotate-ccw";
	import * as Table from "$lib/components/ui/table/index.js";
	import * as Popover from "$lib/components/ui/popover/index.js";
	import { Badge } from "$lib/components/ui/badge/index.js";
	import { Button, buttonVariants } from "$lib/components/ui/button/index.js";
	import { Checkbox } from "$lib/components/ui/checkbox/index.js";
	import { Label } from "$lib/components/ui/label/index.js";

	const records: TRecord[] = recordsRaw;

	const n18: Record<string, string> = {
		sex: "Geschlecht",
		group: "Altersklasse",
		class: "Gewichtsklasse",
		discipline: "Disziplin",
		name: "Name",
		year: "Jahr",
		location: "Ort",
		club: "Verein"
	};

	const uniqueValues = {
		sex: [...new Set(records.map((r) => r.sex))].filter(Boolean),
		group: [...new Set(records.map((r) => r.group))].filter(Boolean),
		class: [...new Set(records.map((r) => r.class))]
			.filter(Boolean)
			.sort((a, b) => Number(b) - Number(a)),
		discipline: [...new Set(records.map((r) => r.discipline))],
		name: [...new Set(records.map((r) => r.name))].filter(Boolean).sort(),
		year: [...new Set(records.map((r) => (r.date ? new Date(r.date).getFullYear() : null)))]
			.filter(Boolean)
			.sort((a, b) => Number(b) - Number(a)),
		location: [...new Set(records.map((r) => r.location))].filter(Boolean).sort(),
		club: [...new Set(records.map((r) => r.club))].filter(Boolean).sort()
	};

	let activeFilters: Record<keyof typeof uniqueValues, string[]> = $state({
		sex: [],
		group: [],
		class: [],
		discipline: [],
		name: [],
		year: [],
		location: [],
		club: []
	});

	const filteredRecords = $derived(
		records.filter((record) => {
			return Object.entries(activeFilters).every(([key, values]) => {
				if (!values.length) return true;
				if (key === "year") {
					values.sort((a, b) => Number(b) - Number(a));
					return values.includes(
						record.date ? new Date(record.date).getFullYear().toString() : ""
					);
				}
				return values.includes(record[key as keyof TRecord]?.toString() || "");
			});
		})
	);

	const groups = $derived(
		groupByMultipleToArray(filteredRecords, ["sex", "group", "discipline"])
	);

	const addFilter = (category: keyof typeof uniqueValues, value: string): void => {
		activeFilters[category] = [...(activeFilters[category] || []), value];
		activeFilters = activeFilters;
	};

	const removeFilter = (category: keyof typeof uniqueValues, value: string): void => {
		activeFilters[category] = activeFilters[category]?.filter((v) => v !== value) || [];
		activeFilters = activeFilters;
	};

	const isFilterSelected = (
		category: keyof typeof uniqueValues,
		value: string
	): boolean | undefined => {
		return activeFilters[category]?.includes(value) ? true : undefined;
	};
</script>

<Section class="pt-16 md:pt-20">
	<Headline1 class="mb-8">Liste der Rekorde im GVSH im Kraftdreikampf</Headline1>
	<div class="prose prose-stone dark:prose-invert">
		<p>Es zählen nur angemeldete Rekordversuche auf einer LM. DM Versuche zählen immer.</p>
		<p>
			Diese Liste entstand privat und nicht im Auftrag vom GVSH. Diese Website steht in keinem
			Zusammenhang zum GVSH.
		</p>
		<p>Großen Dank an Peter Svend Guhlke für die Bereitstellung dieser Daten.</p>
	</div>
</Section>

<Section>
	<Headline2 class="mb-4">
		Filter
		<Button
			variant="outline"
			size="icon"
			onclick={() => {
				Object.keys(activeFilters).forEach((key) => {
					activeFilters[key as keyof typeof uniqueValues] = [];
				});
				activeFilters = activeFilters;
			}}
			disabled={Object.values(activeFilters).every((arr) => arr.length === 0)}
		>
			<RotateCcw />
		</Button>
	</Headline2>
	<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
		{#each Object.entries(uniqueValues) as [category, values], i}
			<Popover.Root>
				<Popover.Trigger class={[buttonVariants({ variant: "outline" }), "justify-start"]}>
					{n18[category]}
				</Popover.Trigger>
				<Popover.Content align="start" class="max-h-100 overflow-y-auto">
					<div class="space-y-2">
						{#each values as value, j}
							{@const id = `checkbox-item-${value?.toString().replaceAll(" ", "-")}-${i}${j}`}
							<div class="flex items-center gap-3">
								<Checkbox
									{id}
									checked={isFilterSelected(
										category as keyof typeof uniqueValues,
										value?.toString()!
									)}
									onCheckedChange={(checked: any) => {
										if (checked) {
											addFilter(
												category as keyof typeof uniqueValues,
												value?.toString()!
											);
										} else {
											removeFilter(
												category as keyof typeof uniqueValues,
												value?.toString()!
											);
										}
									}}
								/>
								<Label for={id}>{value}</Label>
							</div>
						{/each}
					</div>
				</Popover.Content>
			</Popover.Root>
		{/each}
	</div>

	{#if Object.values(activeFilters).some((arr) => arr.length > 0)}
		<div class="mt-6 flex flex-wrap gap-2">
			{#each Object.entries(activeFilters) as [category, values]}
				{#each values as value}
					<Badge variant="secondary" class="flex items-center gap-1">
						{n18[category]}: {value}
						<button
							onclick={() =>
								removeFilter(category as keyof typeof uniqueValues, value)}
							class="hover:text-destructive cursor-pointer"
						>
							<X class="size-4" />
						</button>
					</Badge>
				{/each}
			{/each}
		</div>
	{/if}
</Section>

<Section>
	{#if groups.length > 0}
		{#each groups as { key: sex, children: ageGroups }}
			<Headline2 class="bg-background group/h2 flex scroll-mt-20 items-center gap-2" id={sex}>
				{sex}
				<a class="hidden group-hover/h2:block" href="/#{sex}">
					<Link
						class="size-5 text-stone-700 hover:text-stone-950 dark:text-stone-300 dark:hover:text-stone-50"
					/>
				</a>
			</Headline2>

			{#if ageGroups}
				{#each ageGroups as { key: age, children: classGroups }}
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
						{#each classGroups as { key: discipline, items: classGroup }}
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
									<Table.Header>
										<Table.Row class="">
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
											<Table.Row class="">
												<Table.Cell>{item.class} kg</Table.Cell>
												<Table.Cell>
													{item.weight
														? `${item.weight?.toString().replaceAll(".", ",")} kg`
														: "-"}
												</Table.Cell>
												<Table.Cell>
													{item.name ? item.name : "-"}
												</Table.Cell>
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
		{/each}
	{:else}
		<div class="space-y-4">
			<p>Für deine Filtereinstellungen haben wir keine Rekorde gefunden.</p>
			<Button
				variant="secondary"
				onclick={() => {
					Object.keys(activeFilters).forEach((key) => {
						activeFilters[key as keyof typeof uniqueValues] = [];
					});
					activeFilters = activeFilters;
				}}
			>
				Filter zurücksetzen
			</Button>
		</div>
	{/if}
</Section>
