'use client';

import {
	createContext,
	useCallback,
	useContext,
	useMemo,
	useReducer,
} from 'react';

import { Process } from '@/components/Apps/apps';
import { Window } from '@/components/Window';

import {
	windowReducer,
	windowsContextDefaultValues,
} from './helpers';

const WindowsContext = createContext<WindowsContext>(
	windowsContextDefaultValues
);

/**
 * `WindowsProvider` manages open windows, and provides a way to open
 * new windows.
 */
export function WindowsProvider(props: WindowsProviderProps) {
	const { children } = props;

	const [state, dispatch] = useReducer(
		windowReducer,
		windowsContextDefaultValues
	);

	const onAddWindow = useCallback(
		(app: App, options?: AddWindowOptions) => {
			console.log('onAddWindow', app.processName, app);
			dispatch({
				type: 'ADD_WINDOW',
				payload: {
					app,
					options,
				},
			});
		},
		[]
	);

	const onCloseWindow = useCallback(
		(processName: Process, id: number) => {
			console.log('onCloseWindow', processName, id);
			dispatch({
				type: 'CLOSE_WINDOW',
				payload: {
					processName,
					id,
				},
			});
		},
		[]
	);

	const handleCloseWindow = useCallback(
		(processName: Process, id: number) => () =>
			onCloseWindow(processName, id),
		[onCloseWindow]
	);

	console.groupCollapsed('Windows Provider');
	console.log('State:', state);
	console.groupEnd();

	const value: WindowsContext = useMemo(
		() => ({
			windows: state.windows,
			onAddWindow,
			onCloseWindow,
		}),
		[onAddWindow, onCloseWindow, state.windows]
	);

	return (
		<WindowsContext.Provider value={value}>
			{Object.entries(state.windows).map(([process, windows]) =>
				Object.entries(windows).map(([id, app]) => (
					<Window
						key={id}
						title={`${app.fullName}TESTE`}
						icon={app.icon}
						isMaximized={app.isMaximized}
						isMinimized={app.isMinimized}
						onClose={handleCloseWindow(
							process as Process,
							id as unknown as number
						)}
						onMaximize={() => console.log('maximize')}
						onMinimize={() => console.log('minimize')}
					>
						<app.window />
					</Window>
				))
			)}
			{children}
		</WindowsContext.Provider>
	);
}

/** `useWindows` */
export function useWindows() {
	const context = useContext(WindowsContext);

	if (!context) {
		throw new Error(
			'useWindows must be used within a `WindowsProvider`'
		);
	}

	return context;
}
