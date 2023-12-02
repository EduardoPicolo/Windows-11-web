import React from 'react';

import { StartMenu } from './index';

describe('<StartMenu />', () => {
	it('renders', () => {
		const spy = cy.stub().as('onClose');

		cy.mount(<StartMenu onClose={spy} />);
	});
});
