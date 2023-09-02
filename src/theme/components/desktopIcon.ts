import { defineStyleConfig } from '@chakra-ui/react';

export const desktopIconTheme = defineStyleConfig({
	baseStyle: (props) => ({
		position: 'relative',
		height: 'fit-content',
		padding: 2,
		color: 'white',
		fontSize: 'sm',
		fontWeight: 'medium',
		textAlign: 'center',
		textTransform: 'capitalize',
		textShadow: '0px 1px 2px #000, 0px 1px 2px #000',
		borderRadius: 'md',
		_hover: {
			backgroundColor: 'hoverBg',
		},
		transition: 'background 0.2s ease-in-out',

		filter: 'brightness(1.1) contrast(1.1) saturate(1.05)',
		p: {
			filter: 'contrast(1.2)',
		},

		'&.selected': {
			_before: {
				content: '""',
				position: 'absolute',
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				borderRadius: 'md',
				background: 'hoverBg',
				opacity: 0.75,
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
