<script lang="ts">
	import * as DropdownMenu from "./ui/dropdown-menu/index.js";
	import { buttonVariants } from "./ui/button/index.js";
	import Sun from "lucide-svelte/icons/sun";
	import Moon from "lucide-svelte/icons/moon";
	import { resetMode, setMode } from "mode-watcher";
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger class={buttonVariants({ variant: "ghost", size: "icon" })}>
		<Sun class="scale-100 motion-safe:transition-all dark:scale-0" />
		<Moon class="absolute scale-0 motion-safe:transition-all dark:scale-100" />
		<span class="sr-only">Farbmodus umschalten</span>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content align="end">
		<DropdownMenu.Item onclick={() => setMode("light")}>Light</DropdownMenu.Item>
		<DropdownMenu.Item onclick={() => setMode("dark")}>Dark</DropdownMenu.Item>
		<DropdownMenu.Item onclick={() => resetMode()}>System</DropdownMenu.Item>
	</DropdownMenu.Content>
</DropdownMenu.Root>
