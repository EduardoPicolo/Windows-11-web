import {
	addWindow,
	closeWindow,
	maximizeWindow,
	minimizeWindow,
} from '@/contexts/Windows/actions';

export function windowReducer(
	state: Windows,
	action: WindowsActions
) {
	switch (action.type) {
		case 'ADD_WINDOW': {
			return addWindow(state, action);
		}

		case 'CLOSE_WINDOW': {
			return closeWindow(state, action);
		}

		case 'MINIMIZE_WINDOW': {
			return minimizeWindow(state, action);
		}

		case 'MAXIMIZE_WINDOW': {
			return maximizeWindow(state, action);
		}

		default: {
			return state;
		}
	}
}
