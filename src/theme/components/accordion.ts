import { accordionAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const { definePartsStyle, defineMultiStyleConfig } =
	createMultiStyleConfigHelpers(accordionAnatomy.keys);

const baseStyle = definePartsStyle((props) => ({
	root: {
		border: '1px solid',
		borderColor: mode('blackAlpha.300', 'blackAlpha.400')(props),
		borderRadius: 'md',
		bg: mode('whiteAlpha.800', 'gray.700')(props),
		cursor: 'default',
	},
	container: {
		borderRadius: 'inherit',
	},
	button: {
		px: 6,
		py: 4,
		borderRadius: 'inherit',
		borderBottomRadius: 0,
		_hover: {
			bg: mode('blackAlpha.50', 'whiteAlpha.50')(props),
		},
		cursor: 'default',
	},
	panel: {
		px: 6,
	},
}));

export const accordionTheme = defineMultiStyleConfig({ baseStyle });
