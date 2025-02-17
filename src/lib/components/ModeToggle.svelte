<script lang="ts">
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
	import { buttonVariants } from "$lib/components/ui/button/index.js";
	import Sun from "lucide-svelte/icons/sun";
	import Moon from "lucide-svelte/icons/moon";
	import { resetMode, setMode } from "mode-watcher";
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger class={buttonVariants({ variant: "ghost", size: "icon" })}>
		<Sun class="scale-100 motion-safe:transition-all dark:scale-0" />
		<Moon class="absolute scale-0 motion-safe:transition-all dark:scale-100" />
		<span class="sr-only">Hell-/Dunkelmodus wechseln</span>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content align="end">
		<DropdownMenu.Item onclick={() => setMode("light")}><span>Hell</span></DropdownMenu.Item>
		<DropdownMenu.Item onclick={() => setMode("dark")}><span>Dunkel</span></DropdownMenu.Item>
		<DropdownMenu.Item onclick={() => resetMode()}><span>System</span></DropdownMenu.Item>
	</DropdownMenu.Content>
</DropdownMenu.Root>
