import { defineStyleConfig } from '@chakra-ui/react';

export const desktopIconTheme = defineStyleConfig({
	baseStyle: (props) => ({
		position: 'relative',
		height: 'fit-content',
		p: 2,
		fontSize: 'sm',
		textAlign: 'center',
		borderRadius: 'md',
		_hover: {
			background: 'hoverBg',
		},

		'&.ds-selected': {
			_before: {
				content: '""',
				position: 'absolute',
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				borderRadius: 'md',
				background: 'blue.500',
				opacity: 0.33,
				zIndex: -1,
			},
		},
	}),
	sizes: {},
	// Two variants: rounded and smooth
	variants: {},
	// The default variant value
	defaultProps: {},
});
