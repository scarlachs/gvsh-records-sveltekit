<script>
	const title = "Impressum | Pascal Schaar";
</script>

<svelte:head>
	<meta name="robots" content="noindex, nofollow" />
	<meta name="format-detection" content="telephone=no" />

	<meta name="title" content={title} />
	<title>{title}</title>

	<meta property="og:title" content={title} />
</svelte:head>

<h1>Impressum</h1>

<p>
	Pascal Schaar<br />
	Bornwiese 2<br />
	21391 Reppenstedt
</p>

<h2>Kontakt</h2>
<p>
	{@html "E-Mail: in<!-- @wn -->fo<!-- .qmd- -->@sc<!-- $d;@ -->haa<!-- .com -->r.dev"}
</p>

<h2>Umsatzsteuer-ID</h2>
<p>
	Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
	DE315467726
</p>

<h2>Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
<p>
	Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
	Verbraucherschlichtungsstelle teilzunehmen.
</p>

<p>
	Quelle: <a
		href="https://www.e-recht24.de/impressum-generator.html"
		target="_blank"
		rel="noopener">https://www.e-recht24.de/impressum-generator.html</a
	>
</p>
