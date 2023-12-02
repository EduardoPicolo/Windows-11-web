type Entries<T> = {
	[K in keyof T]: [K, T[K]];
}[keyof T][];

export const getEntries = <T extends object>(obj: T) => {
	try {
		const entries = Object.entries(obj) as Entries<T>;

		return entries;
	} catch {
		return [];
	}
};

type Values<T> = T[keyof T][];

export const getValues = <T extends object>(obj: T): Values<T> => {
	try {
		const values = Object.values(obj) as Values<T>;

		return values;
	} catch {
		return [];
	}
};

type Keys<T> = (keyof T)[];

export const getKeys = <T extends object>(obj: T): Keys<T> => {
	try {
		const keys = Object.keys(obj) as Keys<T>;

		return keys;
	} catch {
		return [];
	}
};
