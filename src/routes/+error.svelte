<script lang="ts">
	import Button from "$lib/components/ui/button/button.svelte";
	import { page } from "$app/stores";
</script>

<section class="container flex min-h-96 items-center">
	<div class="pt-16">
		<h1 class="mb-5 text-3xl font-bold lg:text-5xl">{$page.status}: Seite nicht gefunden</h1>
		<p class="mb-10 text-lg">Leider existiert die von dir gesuchte Seite nicht.</p>
		<Button href="/" variant="secondary">Zur Startseite</Button>
	</div>
</section>
