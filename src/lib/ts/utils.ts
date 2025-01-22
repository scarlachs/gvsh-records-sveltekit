import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

const randomAlphaNumeric = (length: number = 14) => {
	const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	let result = "";

	Array.from({ length }).forEach(() => {
		result += chars[Math.floor(Math.random() * chars.length)];
	});

	return result;
};

const animateFadeIn = (trigger: HTMLElement, target?: HTMLElement) => {
	gsap.to(target ? target : trigger, {
		scrollTrigger: trigger,
		opacity: 1,
		translateY: 0,
		translateX: 0,
		duration: 0.6
	});
};

export { cn, randomAlphaNumeric, animateFadeIn };
