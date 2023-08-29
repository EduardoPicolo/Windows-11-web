import { type Props } from 'react-rnd';

export const windowsContextDefaultValues: WindowsContext = {
	windows: {} as WindowsContext['windows'],
	addWindow: () => {},
	closeWindow: () => {},
};

export const initialWindowPosition: Props['default'] = {
	x: 300,
	y: -800,
	width: 800,
	height: 'auto',
};
