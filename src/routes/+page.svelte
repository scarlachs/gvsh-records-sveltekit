<script lang="ts">
	import Contact from "$lib/components/Contact.svelte";
	import Intro from "$lib/components/Intro.svelte";
	import About from "$lib/components/About.svelte";
	import Projects from "$lib/components/Projects.svelte";
	import Techstack from "$lib/components/Techstack.svelte";
	import type { PageProps } from "./$types";

	let { data }: PageProps = $props();
</script>

<Intro />

<Techstack id="techstack" items={data.items} />

<Projects id="projects" />

<About id="about" />

<Contact id="contact" />
