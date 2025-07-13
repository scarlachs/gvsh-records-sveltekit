import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Group } from "./types";

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

export function groupByToArray<T>(array: T[], key: keyof T): Group<T>[] {
	const map = new Map<string, T[]>();

	for (const item of array) {
		const k = String(item[key]);
		if (!map.has(k)) map.set(k, []);
		map.get(k)!.push(item);
	}

	return Array.from(map.entries()).map(([groupKey, groupItems]) => ({
		key: groupKey,
		items: groupItems
	}));
}

export function groupByMultipleToArray<T>(array: T[], keys: (keyof T)[]): Group<T>[] {
	if (keys.length === 0) return [];

	const [firstKey, ...restKeys] = keys;

	const grouped = groupByToArray(array, firstKey);

	return grouped.map((group) => ({
		key: group.key,
		children: restKeys.length ? groupByMultipleToArray(group.items!, restKeys) : undefined,
		items: restKeys.length === 0 ? group.items : undefined
	}));
}
