'use client';

import {
	createContext,
	useCallback,
	useContext,
	useMemo,
	useState,
} from 'react';
import { Box, Center, Portal } from '@chakra-ui/react';
import type { MouseEventHandler } from 'react';
import { AnimatePresence } from 'framer-motion';

import type { Process } from '@/components/Apps/apps';
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
			() => {
				onCloseWindow(processName, id);
			},
		[onCloseWindow]
	);

	const handleToggleMaximizeWindow = useCallback(
		(processName: Process, id: number): MouseEventHandler =>
			() => {
				setIsMaximazed((isMaximized) => !isMaximized)(
					processName,
					id
				);
			},
		[setIsMaximazed]
	);

	const handleMinimizeWindow = useCallback(
		(processName: Process, id: number): MouseEventHandler =>
			() => {
				setIsMinimized(true)(processName, id);
			},
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
		(process: Process, id: number) => () => {
			focusWindow(process, id);
		},
		[focusWindow]
	);

	/**
	 * Initial position is the center of the `main` element. The `y`
	 * value is negative because the Portal is appended to the end of
	 * the `body` element. The values also need to be offset by half the
	 * width/height of the window being created.
	 */
	const getInitialPosition = useCallback((appPreference: App) => {
		const viewportHeight = window.innerHeight;
		const viewportWidth = window.innerWidth;
		let width = appPreference.initialSize?.width ?? 600;
		let height = appPreference.initialSize?.height ?? 600;

		if (height > viewportHeight) height = viewportHeight - 100;
		if (width > viewportWidth) width = viewportWidth;

		const x = viewportWidth / 2 - width / 2;
		const y = (viewportHeight - 50) / 2 - height / 2;

		return {
			width,
			height,
			x,
			y,
		};
	}, []);

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

	return (
		<WindowsContext.Provider value={value}>
			<Portal appendToParentPortal={false}>
				<Box
					left="env(safe-area-inset-left, 0)"
					position="absolute"
					top="env(safe-area-inset-top, 0)"
				>
					<AnimatePresence mode="popLayout">
						{getEntries(windows).flatMap(
							([process, processWindows]) =>
								getEntries(processWindows).flatMap(([id, app]) => (
									<WindowContainer
										icon={app.icon}
										initialPosition={getInitialPosition(app)}
										isFocused={focusedWindow?.id === id}
										isMaximized={app.isMaximized}
										isMinimized={app.isMinimized}
										key={`${process}-${id}`}
										onClose={handleCloseWindow(process, id)}
										onFocus={handleFocusWindow(process, id)}
										onMaximize={handleToggleMaximizeWindow(
											process,
											id
										)}
										onMinimize={handleMinimizeWindow(process, id)}
										title={app.fullName}
									>
										{app.Window ? (
											<app.Window />
										) : (
											<Center
												draggable={false}
												h="full"
												pointerEvents="none"
												unselectable="on"
												userSelect="none"
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

	// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- context can be undefined if not used within a provider
	if (!context) {
		throw new Error(
			'useWindows must be used within a `WindowsProvider`'
		);
	}

	return context;
}
