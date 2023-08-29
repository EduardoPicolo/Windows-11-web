import { type Props } from 'react-rnd';

export const windowsContextDefaultValues: WindowsContext = {
	windows: {} as WindowsContext['windows'],
	onAddWindow: () => {},
	onCloseWindow: () => {},
};

export const initialWindowPosition: Props['default'] = {
	x: 300,
	y: -800,
	width: 800,
	height: 'auto',
};

export function windowReducer(
	state: WindowsContext,
	action: Actions
) {
	switch (action.type) {
		case 'ADD_WINDOW': {
			const { app, options } = action.payload;

			const process = app.processName;
			const id = Date.now();

			const newWindow = {
				...app,
				isFocused: options?.isFocused ?? true,
				isMinimized: options?.isMinimized ?? false,
				isMaximized: options?.isMaximized ?? false,
			};

			return {
				...state,
				windows: {
					...state.windows,
					[process]: {
						...state.windows[process],
						[id]: newWindow,
					},
				},
			};
		}

		case 'CLOSE_WINDOW': {
			const { processName, id } = action.payload;

			console.log('CLOSE_WINDOW:', processName, id);

			/**
			 * Remove the window from the windows object and check if there
			 * are any windows left for the Process, if not, remove the
			 * executable from the windows object.
			 */

			// Do not delete dynamically computed property keys.
			const { [id]: _removedWindow, ...windows } =
				state.windows[processName];

			if (Object.keys(windows).length === 0) {
				const { [processName]: _removedProcess, ...newWindows } =
					state.windows;

				return {
					...state,
					windows: newWindows as WindowsContext['windows'],
				};
			}

			return {
				...state,
				windows: {
					...state.windows,
					[processName]: windows,
				},
			};
		}

		default: {
			return state;
		}
	}
}
