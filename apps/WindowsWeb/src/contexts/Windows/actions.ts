export const addWindow: WindowsReducerActionHandler<
	AddWindowAction
> = (state, action) => {
	const { app, options } = action.payload;

	const process = app.processName;
	const id = Date.now();

	const newWindow = {
		...app,
		isMinimized: options?.isMinimized ?? false,
		isMaximized: options?.isMaximized ?? false,
	};

	return {
		...state,
		[process]: {
			...state[process],
			[id]: newWindow,
		},
	};
};

export const closeWindow: WindowsReducerActionHandler<
	CloseWindowAction
> = (state, action) => {
	const { processName, id } = action.payload;

	console.log('CLOSE_WINDOW:', processName, id);

	if (!state[processName]) {
		return state;
	}

	/**
	 * Remove the window from the windows object and check if there are
	 * any windows left for the Process, if not, remove the executable
	 * from the windows object.
	 */

	// Do not delete dynamically computed property keys.
	const { [id]: _removedWindow, ...remainingWindows } =
		state[processName];

	/** If there are no windows left for the Process, remove the Process. */
	if (Object.keys(remainingWindows).length === 0) {
		const { [processName]: _removedProcess, ...newWindows } = state;

		return {
			...(newWindows as Windows),
		};
	}

	return {
		...state,
		[processName]: remainingWindows,
	};
};

export const minimizeWindow: WindowsReducerActionHandler<
	MinimizeWindowAction
> = (state, action) => {
	const { processName, id, value } = action.payload;

	return {
		...state,
		[processName]: {
			...state[processName],
			[id]: {
				...state[processName][id],
				isMinimized: value,
			},
		},
	};
};

export const maximizeWindow: WindowsReducerActionHandler<
	MaximizeWindowAction
> = (state, action) => {
	const { processName, id, value } = action.payload;

	return {
		...state,
		[processName]: {
			...state[processName],
			[id]: {
				...state[processName][id],
				isMaximized: value,
			},
		},
	};
};
