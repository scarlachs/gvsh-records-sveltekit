<script lang="ts">
	import Sun from "lucide-svelte/icons/sun";
	import Moon from "lucide-svelte/icons/moon";
	import { resetMode, setMode } from "mode-watcher";
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
	import { Button } from "$lib/components/ui/button/index.js";
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger asChild let:builder>
		<Button builders={[builder]} variant="ghost" size="icon">
			<Sun class="size-5 scale-100 motion-safe:transition-all dark:scale-0" />
			<Moon class="absolute size-5 scale-0 motion-safe:transition-all dark:scale-100" />
			<span class="sr-only">Farbmodus umschalten</span>
		</Button>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content align="end">
		<DropdownMenu.Item on:click={() => setMode("light")}>Light</DropdownMenu.Item>
		<DropdownMenu.Item on:click={() => setMode("dark")}>Dark</DropdownMenu.Item>
		<DropdownMenu.Item on:click={() => resetMode()}>System</DropdownMenu.Item>
	</DropdownMenu.Content>
</DropdownMenu.Root>
