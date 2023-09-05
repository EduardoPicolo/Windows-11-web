'use client';

import {
	createContext,
	MouseEventHandler,
	useCallback,
	useContext,
	useMemo,
	useRef,
	useState,
} from 'react';
import { Box, Center, Portal } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';

import { Process } from '@/components/Apps/apps';
import { WindowContainer } from '@/components/WindowContainer';
import { useWindowsReducer } from '@/contexts/Windows/useWindowsReducer';
import { getEntries } from '@/utils/getEntries';

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
		setIsMinimized,
		setIsMaximazed,
	} = useWindowsReducer();

	const [focusedWindow, setFocusedWindow] = useState<{
		process: Process;
		id: number;
	} | null>(null);

	const handleCloseWindow = useCallback(
		(processName: Process, id: number): MouseEventHandler =>
			() =>
				onCloseWindow(processName, id),
		[onCloseWindow]
	);

	const handleToggleMaximizeWindow = useCallback(
		(processName: Process, id: number): MouseEventHandler =>
			() =>
				setIsMaximazed((isMaximized) => !isMaximized)(
					processName,
					id
				),
		[setIsMaximazed]
	);

	const handleMinimizeWindow = useCallback(
		(processName: Process, id: number): MouseEventHandler =>
			() =>
				setIsMinimized(true)(processName, id),
		[setIsMinimized]
	);

	const focusWindow = useCallback(
		(processName: Process, id: number) => {
			setFocusedWindow({
				process: processName,
				id,
			});
		},
		[]
	);

	const handleFocusWindow = useCallback(
		(process: Process, id: number) => () => focusWindow(process, id),
		[focusWindow]
	);

	/**
	 * Initial position is the center of the `main` element. The `y`
	 * value is negative because the Portal is appended to the end of
	 * the `body` element. The values also need to be offset by half the
	 * width/height of the window being created.
	 */
	const getInitialPosition = useCallback(
		(appPreference: App) => ({
			width: appPreference?.initialSize?.width ?? 600,
			height: appPreference?.initialSize?.height ?? 600,
			x:
				window.innerWidth / 2 -
				(appPreference?.initialSize?.width
					? appPreference.initialSize.width / 2
					: 300),
			y:
				window.innerHeight / 2 -
				(appPreference?.initialSize?.height
					? appPreference.initialSize.height / 2
					: 300),
		}),
		[]
	);

	const value: WindowsContext = useMemo(
		() => ({
			windows,
			focusedWindow,
			focusWindow,
			addWindow: onAddWindow,
			closeWindow: onCloseWindow,
			minimize: {
				on: setIsMinimized(true),
				off: setIsMinimized(false),
			},
		}),
		[
			windows,
			focusedWindow,
			focusWindow,
			onAddWindow,
			onCloseWindow,
			setIsMinimized,
		]
	);

	console.groupCollapsed('Windows Provider');
	console.log('Open windows:', windows);
	console.groupEnd();

	const mainRef = useRef<HTMLElement | null>(null);

	if (!mainRef.current && typeof window !== 'undefined')
		[mainRef.current] = document.querySelectorAll('main');

	return (
		<WindowsContext.Provider value={value}>
			<Portal appendToParentPortal={false}>
				<Box
					position="absolute"
					top="env(safe-area-inset-top, 0)"
					left="env(safe-area-inset-left, 0)"
				>
					<AnimatePresence mode="popLayout">
						{getEntries(windows).flatMap(
							([process, processWindows]) =>
								getEntries(processWindows).flatMap(([id, app]) => (
									<WindowContainer
										key={`${process}-${id}`}
										title={app.fullName}
										icon={app.icon}
										isMinimized={app.isMinimized}
										isMaximized={app.isMaximized}
										isFocused={focusedWindow?.id === id}
										onFocus={handleFocusWindow(process, id)}
										onMinimize={handleMinimizeWindow(process, id)}
										onMaximize={handleToggleMaximizeWindow(
											process,
											id
										)}
										onClose={handleCloseWindow(process, id)}
										initialPosition={getInitialPosition(app)}
									>
										{app?.Window ? (
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
					</AnimatePresence>
				</Box>
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
