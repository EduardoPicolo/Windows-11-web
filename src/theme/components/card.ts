import { cardAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const { definePartsStyle, defineMultiStyleConfig } =
	createMultiStyleConfigHelpers(cardAnatomy.keys);

const baseStyle = definePartsStyle({
	// define the part you're going to style
	container: {},
	header: {},
	body: {},
	footer: {},
});

const elevated = definePartsStyle((props) => ({
	container: {
		backgroundColor: mode(
			'whiteAlpha.700',
			'var(--chakra-colors-chakra-body-bg)'
		)(props),
		borderWidth: mode('0px', '1px')(props),
		borderColor: mode('gray.200', 'whiteAlpha.300')(props),
	},
}));

const outline = definePartsStyle((props) => ({
	container: {
		backgroundColor: 'transparent',
		borderColor: mode('gray.300', 'whiteAlpha.300')(props),
	},
}));

const radio = definePartsStyle((props) => ({
	container: {
		position: 'relative',
		background: mode('white', 'inherit')(props),
		borderWidth: '2px',
		borderColor: mode('gray.200', 'whiteAlpha.300')(props),
		borderRadius: 'md',
		cursor: 'pointer',
		boxShadow: 'none',
		transition: 'all 0.2s',

		_hover: {
			bg: mode('white', 'whiteAlpha.50')(props),
			borderColor: mode('gray.300', 'whiteAlpha.200')(props),
		},

		_checked: {
			borderColor: `${props.colorScheme}.500`,
		},
		_groupChecked: {
			borderColor: `${props.colorScheme}.500`,
		},

		_disabled: {
			opacity: 0.4,
			cursor: 'not-allowed',
			borderColor: mode('gray.300', 'gray.600')(props),
		},
		_groupDisabled: {
			opacity: 0.4,
			cursor: 'not-allowed',
			borderColor: mode('gray.300', 'gray.600')(props),
		},
	},
}));

const ghost = definePartsStyle((props) => ({
	container: {
		backgroundColor: mode('whiteAlpha.600', 'blackAlpha.700')(props),
		backdropFilter: 'blur(20.5px) saturate(180%)',
		border: '1px solid whiteAlpha.300',
		borderColor: 'whiteAlpha.400',
	},
	footer: {
		background: mode('whiteAlpha.400', 'whiteAlpha.100')(props),
		borderBottomRadius: 'xl',
	},
}));

const form = definePartsStyle((props) => ({
	container: {
		borderWidth: mode('0', '1px')(props),
		borderColor: mode('gray.300', 'whiteAlpha.300')(props),
		borderRadius: 'lg',
		backgroundColor: mode('white', 'transparent')(props),
		boxShadow: mode('subtle', 'none')(props),
	},
}));

export const cardTheme = defineMultiStyleConfig({
	baseStyle,
	variants: {
		elevated,
		outline,
		radio,
		form,
		ghost,
	},
	defaultProps: {
		variant: 'ghost',
	},
});
