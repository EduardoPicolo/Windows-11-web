import { type Props } from 'react-rnd';

export const windowsContextDefaultValues: WindowsContext = {
	windows: {} as WindowsContext['windows'],
	focusedWindow: null,
	addWindow: () => undefined,
	closeWindow: () => undefined,
	focusWindow: () => undefined,
	minimize: {
		on: () => undefined,
		off: () => undefined,
	},
};

export const initialWindowPosition: Props['default'] = {
	x: 300,
	y: -800,
	width: 800,
	height: 'auto',
};
