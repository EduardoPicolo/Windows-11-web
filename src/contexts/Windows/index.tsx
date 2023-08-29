'use client';

import {
	createContext,
	isValidElement,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useRef,
	useState,
} from 'react';
import { Center, Portal } from '@chakra-ui/react';

import { Process } from '@/components/Apps/apps';
import { WindowContainer } from '@/components/WindowContainer';
import { useWindowsReducer } from '@/contexts/Windows/useWindowsReducer';

import { windowsContextDefaultValues } from './helpers';

const WindowsContext = createContext<WindowsContext>(
	windowsContextDefaultValues
);

/**
 * `WindowsProvider` manages open windows, and provides a way to open
 * new windows.
 */
export function WindowsProvider(props: WindowsProviderProps) {
	const { children } = props;

	const {
		state: windows,
		onAddWindow,
		onCloseWindow,
		onMaximizeWindow,
		onMinimizeWindow,
	} = useWindowsReducer();

	const [focusedWindow, setFocusedWindow] = useState<number | null>(
		null
	);

	const handleCloseWindow = useCallback(
		(processName: Process, id: number) => () =>
			onCloseWindow(processName, id),
		[onCloseWindow]
	);

	const handleMaximizeWindow = useCallback(
		(processName: Process, id: number) => () =>
			onMaximizeWindow(processName, id),
		[onMaximizeWindow]
	);

	const handleMinimizeWindow = useCallback(
		(processName: Process, id: number) => () =>
			onMinimizeWindow(processName, id),
		[onMinimizeWindow]
	);

	console.groupCollapsed('Windows Provider');
	console.log('Open windows:', windows);
	console.groupEnd();

	const mainRef = useRef<HTMLElement | null>(
		document?.getElementsByTagName('main')[0]
	);

	const handleSetFocusedWindow = useCallback(
		(id: number) => () => setFocusedWindow(id),
		[setFocusedWindow]
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

	const defaultInitialPosition = useMemo(
		() =>
			mainRef.current
				? {
						x: mainRef.current.clientWidth / 2 - 300,
						y: -mainRef.current.offsetHeight + 300,
						width: 600,
						height: 'auto',
				  }
				: {
						x: 100,
						y: -700,
						width: 600,
						height: 'auto',
				  },
		[]
	);

	const value: WindowsContext = useMemo(
		() => ({
			windows,
			addWindow: onAddWindow,
			closeWindow: onCloseWindow,
		}),
		[onAddWindow, onCloseWindow, windows]
	);

	return (
		<WindowsContext.Provider value={value}>
			<Portal appendToParentPortal={false} containerRef={mainRef}>
				{Object.entries(windows).map(([process, processWindows]) =>
					Object.entries(processWindows).map(([id, app]) => (
						<WindowContainer
							key={id}
							title={app.fullName}
							icon={app.icon}
							isMaximized={app.isMaximized}
							isMinimized={app.isMinimized}
							isFocused={focusedWindow === Number(id)}
							onClick={handleSetFocusedWindow(Number(id))}
							onClose={handleCloseWindow(
								process as Process,
								Number(id)
							)}
							onMaximize={handleMaximizeWindow(
								process as Process,
								Number(id)
							)}
							onMinimize={handleMinimizeWindow(
								process as Process,
								Number(id)
							)}
							/*  Initial position is the center of the `main` element.
								The `y` value is negative because 0 is the bottom of the screen.
								The values also need to be offset by half the width/height of the window.
							*/
							initialPosition={defaultInitialPosition}
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
