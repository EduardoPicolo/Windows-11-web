'use client';

import React, {
	createContext,
	useContext,
	useLayoutEffect,
	useState,
} from 'react';
import type DragSelect from 'dragselect';

interface ProviderProps {
	children: React.ReactNode;
	settings?: ConstructorParameters<typeof DragSelect>[0];
}

const Context = createContext<DragSelect | null>(null);

function DragSelectProvider({
	children,
	settings = {},
}: ProviderProps) {
	const [ds, setDS] = useState<DragSelect | null>(null);

	useLayoutEffect(() => {
		const loadDs = async () => {
			const { default: DragSelect } = await import('dragselect');

			const newDs = new DragSelect({
				area: document?.getElementsByTagName('main')[0],
				selectables: document?.getElementsByClassName?.(
					'desktop-icon'
				) as unknown as HTMLElement[],
				refreshMemoryRate: 1000,
			});

			setDS((prevState) => {
				if (prevState) return prevState;

				return newDs;
			});
		};

		void loadDs();

		return () => {
			if (ds) {
				ds.stop();
				setDS(null);
			}
		};
	}, [ds]);

	useLayoutEffect(() => {
		ds?.setSettings(settings);
	}, [ds, settings]);

	return <Context.Provider value={ds}>{children}</Context.Provider>;
}

function useDragSelect() {
	const context = useContext(Context);

	return context;
}

export { DragSelectProvider, useDragSelect };
