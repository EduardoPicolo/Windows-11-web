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

			_dark: {
				background:
					'radial-gradient(circle at center -32px,#21232c,#181a22 40%) no-repeat',
				backgroundSize: 'contain',
			},
		},
	}),
};
