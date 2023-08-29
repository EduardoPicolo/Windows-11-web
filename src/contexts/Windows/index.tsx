'use client';

import {
	createContext,
	isValidElement,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useReducer,
	useRef,
} from 'react';
import { Center, Portal } from '@chakra-ui/react';

import { Process } from '@/components/Apps/apps';
import { WindowContainer } from '@/components/WindowContainer';

import {
	initialWindowPosition,
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

	const mainRef = useRef<HTMLElement | null>(
		document?.getElementsByTagName('main')[0]
	);

	useEffect(() => {
		if (typeof window === 'undefined') return;

		mainRef.current = document?.getElementsByTagName('main')[0];

		console.log(
			'mainRef',
			mainRef.current?.offsetWidth,
			mainRef.current?.clientWidth
		);
	}, []);

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
			<Portal appendToParentPortal={false}>
				{Object.entries(state.windows).map(([process, windows]) =>
					Object.entries(windows).map(([id, app]) => (
						<WindowContainer
							key={id}
							title={app.fullName}
							icon={app.icon}
							isMaximized={app.isMaximized}
							isMinimized={app.isMinimized}
							onClose={handleCloseWindow(
								process as Process,
								id as unknown as number
							)}
							onMaximize={() => console.log('maximize')}
							onMinimize={() => console.log('minimize')}
							/*  Initial position is the center of the `main` element.
								The `y` value is negative because 0 is the bottom of the screen.
								The values also need to be offset by half the width/height of the window.
							*/
							initialPosition={
								mainRef.current
									? {
											x: mainRef.current.clientWidth / 2 - 400,
											y: -mainRef.current.offsetHeight + 300,
											width: 800,
											height: 'auto',
									  }
									: initialWindowPosition
							}
						>
							{isValidElement(app?.Window) ? (
								<app.Window />
							) : (
								<Center
									h="full"
									userSelect="none"
									unselectable="on"
									pointerEvents="none"
									draggable={false}
								>
									{app.icon}
								</Center>
							)}
						</WindowContainer>
					))
				)}
			</Portal>

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
