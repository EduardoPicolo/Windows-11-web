type Process = import('@/components/Apps/apps').Process;

type WindowProps = import('@/components/Window').WindowProps;

interface WindowsProviderProps {
	children: React.ReactNode;
}

interface WindowState {
	isFocused: boolean;
	isMinimized: boolean;
	isMaximized: boolean;
	anchorEl?: HTMLElement | null;
}

interface AddWindowOptions {
	isFocused?: boolean;
	isMinimized?: boolean;
	isMaximized?: boolean;
}

interface WindowsContext {
	windows: Record<Process, Record<number, App & WindowState>>;
	onAddWindow: (app: App, options?: AddWindowOptions) => void;
	onCloseWindow: (processName: Process, id: number) => void;
}

interface AddWindow {
	type: 'ADD_WINDOW';
	payload: {
		app: App;
		options?: AddWindowOptions;
	};
}

interface CloseWindow {
	type: 'CLOSE_WINDOW';
	payload: {
		processName: Process;
		id: number;
	};
}

interface MinimizeWindow {
	type: 'MINIMIZE_WINDOW';
	payload: {
		processName: Process;
		id: number;
	};
}

interface MaximizeWindow {
	type: 'MAXIMIZE_WINDOW';
	payload: {
		processName: Process;
		id: number;
	};
}

type Actions =
	| AddWindow
	| CloseWindow
	| MinimizeWindow
	| MaximizeWindow;
