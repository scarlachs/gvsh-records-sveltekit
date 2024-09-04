import type { Button as ButtonPrimitive } from "bits-ui";
import { type VariantProps, tv } from "tailwind-variants";
import Root from "./button.svelte";

const buttonVariants = tv({
	base: "inline-flex items-center justify-center min-w-min rounded-md text-sm font-medium motion-safe:transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-foreground",
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:bg-primary/90",
			outline:
				"border-input bg-background hover:bg-accent hover:text-accent-foreground border",
			secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "size-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});

type Variant = VariantProps<typeof buttonVariants>["variant"];
type Size = VariantProps<typeof buttonVariants>["size"];

type Props = ButtonPrimitive.Props & {
	variant?: Variant;
	size?: Size;
};

type Events = ButtonPrimitive.Events;

export {
	Root,
	type Props,
	type Events,
	//
	Root as Button,
	type Props as ButtonProps,
	type Events as ButtonEvents,
	buttonVariants
};