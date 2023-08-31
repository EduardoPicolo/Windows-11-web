import { Reducer, useCallback, useReducer } from 'react';

import { windowReducer } from '@/contexts/Windows/windowsReducer';

interface UseWindowsReducerProps {
	reducer?: Reducer<Windows, WindowsActions>;
	initialState?: Windows;
}

const initialState: Windows = {} as Windows;

/**
 * `useWindowsReducer` is a custom hook for managing the state of
 * Process's windows.
 */
export function useWindowsReducer(props?: UseWindowsReducerProps) {
	const [state, dispatch] = useReducer(
		props?.reducer ?? windowReducer,
		props?.initialState ?? initialState
	);

	const onAddWindow = useCallback(
		(app: App, options?: Partial<WindowState>) => {
			dispatch({
				type: 'ADD_WINDOW',
				payload: {
					app,
					options,
				},
			});
		},
		[dispatch]
	);

	const setIsMinimized = useCallback(
		(value: boolean) => (processName: Process, id: number) => {
			dispatch({
				type: 'MINIMIZE_WINDOW',
				payload: {
					processName,
					id,
					value,
				},
			});
		},
		[dispatch]
	);

	const onMaximizeWindow = useCallback(
		(processName: Process, id: number) => {
			dispatch({
				type: 'MAXIMIZE_WINDOW',
				payload: {
					processName,
					id,
				},
			});
		},
		[dispatch]
	);

	const onCloseWindow = useCallback(
		(processName: Process, id: number) => {
			dispatch({
				type: 'CLOSE_WINDOW',
				payload: {
					processName,
					id,
				},
			});
		},
		[dispatch]
	);

	return {
		state,
		dispatch,
		onAddWindow,
		onMaximizeWindow,
		onCloseWindow,
		setIsMinimized,
	};
}
