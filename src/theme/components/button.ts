import {
	defineStyle,
	defineStyleConfig,
	Theme,
} from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const baseStyle = defineStyle({
	cursor: 'default',
	_hover: {
		boxShadow: 'thin',
	},
});

const xl = defineStyle({
	fontSize: 'xl',
	px: '4',
	h: '14',
	borderRadius: 'md',
});

const gradient = defineStyle((props) => {
	const { colorScheme, theme } = props;

	if (colorScheme === 'gray') {
		// console.log(theme?.components?.Button?.variants.solid(props));

		return {
			...(theme as Theme)?.components?.Button?.variants?.solid(props),
		};
	}

	return {
		backgroundImage: mode(
			`linear-gradient(to right, ${colorScheme}.600 0%, ${colorScheme}.400  51%, ${colorScheme}.600  100%)`,
			`linear-gradient(to right, ${colorScheme}.400 0%, ${colorScheme}.300  51%, ${colorScheme}.400  100%)`
		)(props),

		color: (theme as Theme)?.components?.Button?.variants?.solid(
			props
		)?.color,

		backgroundSize: '200% auto',
		transition: '0.5s',
		filter: 'contrast(1.15)', // ???

		_hover: {
			backgroundPosition: 'right center',
			_disabled: {
				background: mode(
					`${colorScheme}.500`,
					`${colorScheme}.200`
				)(props),
			},
		},

		_disabled: {
			background: mode(
				`${colorScheme}.500`,
				`${colorScheme}.200`
			)(props),
		},
	};
});

const outline = defineStyle((props) => {
	const { colorScheme, theme } = props;

	switch (colorScheme) {
		case 'orange': {
			return {
				borderColor: mode('orange.500', 'orange.300')(props),
				color: mode('orange.500', 'orange.300')(props),
			};
		}

		case 'gray': {
			return {
				borderColor: mode('gray.300', 'whiteAlpha.300')(props),
			};
		}

		default: {
			return {};
		}
	}
});

export const buttonTheme = defineStyleConfig({
	baseStyle,
	sizes: { xl },
	variants: {
		gradient,
		outline,
	},
	defaultProps: {},
});
