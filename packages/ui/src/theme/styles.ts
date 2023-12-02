import type { StyleFunctionProps, Theme } from '@chakra-ui/react';

export const styles: Theme['styles'] = {
	global: (props: StyleFunctionProps) => ({
		html: {
			scrollBehavior: 'smooth',
		},
		body: {
			backgroundImage:
				'linear-gradient(135deg, #f5f7fa 0%, #e5efff 100%)',
			backgroundSize: 'cover',
			backgroundAttachment: 'fixed',
			minBlockSize: '100vh',
			userSelect: 'none',
			WebkitFontSmoothing: 'antialiased',
			MozOsxFontSmoothing: 'grayscale',
			overflow: 'hidden',

			_dark: {
				background: '#000',
			},

			'.moveable-control-box': {
				zIndex: '1',

				'& .moveable-line': {
					background: 'transparent',
				},

				// Select the moveable control box that has a html attribute of data-able-groupable="true"
				'&[data-able-groupable="true"]': {
					'> .moveable-line': {
						background: 'blue.500',
					},
				},
			},

			'.selecto-selection': {
				zIndex: '1',
				background: 'rgba(0, 120, 215, 0.4)',
				border: '1px solid',
				borderColor: 'blue.500',
			},
		},
	}),
};
