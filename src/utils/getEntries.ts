type Entries<T> = {
	[K in keyof T]: [K, T[K]];
}[keyof T][];

export const getEntries = <T extends object>(obj: T) =>
	Object.entries(obj) as Entries<T>;

type Values<T> = T[keyof T][];

export const getValues = <T extends object>(obj: T): Values<T> =>
	Object.values(obj) as Values<T>;
