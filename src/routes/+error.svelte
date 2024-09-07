<script lang="ts">
	import Button from "$lib/components/ui/button/button.svelte";
	import { page } from "$app/stores";
</script>

<svelte:head>
	<meta name="title" content="{$page.status} | Pascal Schaar" />

	<title>{$page.status} | Pascal Schaar</title>

	<meta property="og:title" content="{$page.status} | Pascal Schaar" />

	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<section class="container flex min-h-96 items-center">
	<div class="pt-16">
		<h1 class="mb-5 text-3xl font-bold lg:text-5xl">
			{$page.status}: {$page.status === 404 ? "Seite nicht gefunden" : $page.error?.message}
		</h1>
		{#if $page.status === 404}
			<p class="mb-10 text-lg">Leider existiert die von dir gesuchte Seite nicht.</p>
			<Button href="/" variant="secondary">Zur Startseite</Button>
		{/if}
	</div>
</section>
