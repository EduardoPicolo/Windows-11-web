import React from 'react';

import { StartMenu } from './index';

describe('<StartMenu />', () => {
	it('renders', () => {
		// see: https://on.cypress.io/mounting-react
		cy.mount(<StartMenu />);
	});
});
