import type { Theme } from '@chakra-ui/react';
import { defineStyle, defineStyleConfig } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const baseStyle = defineStyle({
	cursor: 'default',
	_hover: {
		boxShadow: 'thin',
	},
	transition: 'all 0.2s ease-out',
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
			...(theme as Theme).components.Button.variants?.solid(props),
		};
	}

	return {
		backgroundImage: mode(
			`linear-gradient(to right, ${colorScheme}.600 0%, ${colorScheme}.400  51%, ${colorScheme}.600  100%)`,
			`linear-gradient(to right, ${colorScheme}.400 0%, ${colorScheme}.300  51%, ${colorScheme}.400  100%)`
		)(props),

		color: (theme as Theme).components.Button.variants?.solid(props)
			?.color,

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

const solid = defineStyle((props) => {
	const { colorScheme, colorMode, theme } = props;

	if (colorMode === 'dark') {
		return {
			background: `${colorScheme}.300`,
		};
	}

	return {};
});

export const buttonTheme = defineStyleConfig({
	baseStyle,
	sizes: { xl },
	variants: {
		gradient,
		solid,
	},
	defaultProps: {},
});
