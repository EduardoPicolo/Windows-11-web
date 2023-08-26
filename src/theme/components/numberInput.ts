import { numberInputAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const { definePartsStyle, defineMultiStyleConfig } =
	createMultiStyleConfigHelpers(numberInputAnatomy.keys);

const variantOutline = definePartsStyle((props) => ({
	field: {
		borderColor: mode('gray.300', 'whiteAlpha.300')(props),
		_hover: {
			borderColor: mode('gray.400', 'whiteAlpha.400')(props),
		},
		// _light: {
		// 	borderColor: 'gray.300',
		// 	background: 'whiteAlpha.900',
		// },
	},
}));

const variantFilled = definePartsStyle((props) => ({
	field: {
		background: mode('whiteAlpha.900', 'whiteAlpha.50')(props),
		border: '1px solid',
		borderColor: mode('gray.300', 'whiteAlpha.100')(props),
		_hover: {
			background: mode('whiteAlpha.700', 'whiteAlpha.100')(props),
			borderColor: mode('gray.400', 'whiteAlpha.200')(props),
		},
	},
}));

const variants = {
	outline: variantOutline,
	filled: variantFilled,
};

export const numberInputTheme = defineMultiStyleConfig({
	variants,
	defaultProps: {
		variant: 'filled',
	},
});
