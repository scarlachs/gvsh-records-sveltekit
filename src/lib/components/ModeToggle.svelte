<script lang="ts">
	import { resetMode, setMode } from "mode-watcher";
	import * as DropdownMenu from "./ui/dropdown-menu/index.js";
	import { Button } from "./ui/button/index.js";
	import { Moon, Sun } from "svelte-radix";
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
