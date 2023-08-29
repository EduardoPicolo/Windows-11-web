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

	/**
	 * `onAddWindow` is a function that adds a new window to the windows
	 * state.
	 */
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
		[]
	);

	const onMinimizeWindow = useCallback(
		(processName: Process, id: number) => {
			dispatch({
				type: 'MINIMIZE_WINDOW',
				payload: {
					processName,
					id,
				},
			});
		},
		[]
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
		[]
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
		[]
	);

	return {
		state,
		onAddWindow,
		onMinimizeWindow,
		onMaximizeWindow,
		onCloseWindow,
	};
}
