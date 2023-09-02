import { type Props } from 'react-rnd';

export const windowsContextDefaultValues: WindowsContext = {
	windows: {} as WindowsContext['windows'],
	focusedWindow: null,
	addWindow: () => {},
	closeWindow: () => {},
	focusWindow: () => {},
	minimize: {
		on: () => {},
		off: () => {},
	},
};

export const initialWindowPosition: Props['default'] = {
	x: 300,
	y: -800,
	width: 800,
	height: 'auto',
};
