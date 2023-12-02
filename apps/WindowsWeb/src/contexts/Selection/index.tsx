'use client';

import DragSelect from 'dragselect';
import React, {
	createContext,
	useContext,
	useLayoutEffect,
	useState,
} from 'react';

interface ProviderProps {
	children: React.ReactNode;
	settings?: ConstructorParameters<typeof DragSelect<HTMLElement>>[0];
}

const Context = createContext<DragSelect<HTMLElement> | null>(null);

function DragSelectProvider({
	children,
	settings = {},
}: ProviderProps) {
	const [ds, setDS] = useState<DragSelect<HTMLElement> | null>(null);

	useLayoutEffect(() => {
		setDS((prevState) => {
			if (prevState) return prevState;

			return new DragSelect({
				area: document.getElementsByTagName('main')[0],
				selectables: document.getElementsByClassName(
					'desktop-icon'
				) as unknown as HTMLElement[],
				refreshMemoryRate: 1000,
			});
		});

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
