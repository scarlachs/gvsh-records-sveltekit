import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import gsap from "gsap";

export const cn = (...inputs: ClassValue[]) => {
	return twMerge(clsx(inputs));
};

export const randomAlphaNumeric = (length: number = 14) => {
	const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	let result = "";

	Array.from({ length }).forEach(() => {
		result += chars[Math.floor(Math.random() * chars.length)];
	});

	return result;
};

export const animateFadeIn = (trigger: HTMLElement, target?: HTMLElement) => {
	gsap.to(target ? target : trigger, {
		scrollTrigger: trigger,
		opacity: 1,
		translateY: 0,
		translateX: 0,
		duration: 0.6
	});
};

export const shuffleArray = (array: any[]) => {
	let shuffled = [...array];
	for (let i = shuffled.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
};
