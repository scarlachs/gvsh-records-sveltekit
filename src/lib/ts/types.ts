type ListItem = {
	label: string;
	link: string;
	rel?: string;
};

type TransitionProps = {
	url: string;
};

type LogoProps = {
	wordmark?: boolean;
};

export type Group<T> = {
	key: string;
	children?: Group<T>[];
	items?: T[];
};

export type Record = {
	sex: string;
	group: string;
	class: string;
	discipline: string;
	weight: number | null;
	name: string | null;
	date: string | null;
	location: string | null;
	club: string | null;
};

export type { ListItem, TransitionProps, LogoProps };
