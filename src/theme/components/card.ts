import { cardAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const { definePartsStyle, defineMultiStyleConfig } =
	createMultiStyleConfigHelpers(cardAnatomy.keys);

const baseStyle = definePartsStyle({
	// define the part you're going to style
	container: {
		backdropFilter: 'blur(20.5px) saturate(180%)',
	},
	header: {},
	body: {},
	footer: {},
});

const ghost = definePartsStyle((props) => ({
	container: {
		backgroundColor: mode('whiteAlpha.600', 'blackAlpha.700')(props),
		border: '1px solid whiteAlpha.300',
		borderColor: 'whiteAlpha.400',
	},
	footer: {
		background: mode('whiteAlpha.400', 'whiteAlpha.100')(props),
		borderBottomRadius: 'xl',
	},
}));

const window = definePartsStyle((props) => ({
	container: {
		backgroundColor: mode('whiteAlpha.800', 'blackAlpha.700')(props),
		backdropFilter:
			'blur(30.5px) saturate(230%) brightness(0.75) contrast(0.75)',
		border: '1px solid whiteAlpha.300',
		borderColor: 'whiteAlpha.400',
	},
	header: {
		pl: 1.5,
		pr: 0,
		py: 0,
	},
	body: {
		p: 2,
	},
}));

export const cardTheme = defineMultiStyleConfig({
	baseStyle,
	variants: {
		ghost,
		window,
	},
	defaultProps: {
		variant: 'ghost',
	},
});
