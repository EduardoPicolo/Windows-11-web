type Process = import('@/components/Apps/apps').Process;

interface WindowsProviderProps {
	children: React.ReactNode;
}

/**
 * The shape of all running {@link Process}es. The key is the process
 * name, and the value is a Record of the window id and the
 * {@link WindowState}.
 */
type Windows = Record<Process, Record<number, App & WindowState>>;

interface WindowsContext {
	windows: Windows;
	focusedWindow: {
		process: Process;
		id: number;
	} | null;
	addWindow: (app: App, options?: WindowState) => void;
	closeWindow: (processName: Process, id: number) => void;
	focusWindow: (processName: Process, id: number) => void;
	minimize: {
		on: (processName: Process, id: number) => void;
		off: (processName: Process, id: number) => void;
	};
}

interface WindowState {
	isMinimized: boolean;
	isMaximized: boolean;
	anchorEl?: HTMLElement | null;
}

interface AddWindowAction {
	type: 'ADD_WINDOW';
	payload: {
		app: App;
		options?: Partial<WindowState>;
	};
}

interface CloseWindowAction {
	type: 'CLOSE_WINDOW';
	payload: {
		processName: Process;
		id: number;
	};
}

interface MinimizeWindowAction {
	type: 'MINIMIZE_WINDOW';
	payload: {
		processName: Process;
		id: number;
		value: boolean;
	};
}

interface MaximizeWindowAction {
	type: 'MAXIMIZE_WINDOW';
	payload: {
		processName: Process;
		id: number;
	};
}

type WindowsActions =
	| AddWindowAction
	| CloseWindowAction
	| MinimizeWindowAction
	| MaximizeWindowAction;

type WindowsReducerActionHandler<T extends WindowsActions> = (
	state: Windows,
	action: T
) => Windows;
