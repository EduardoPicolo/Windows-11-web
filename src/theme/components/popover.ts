import { popoverAnatomy as parts } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const { definePartsStyle, defineMultiStyleConfig } =
	createMultiStyleConfigHelpers(parts.keys);

// const baseStyle = definePartsStyle({
// 	content: {
// 		bg: 'whiteAlpha.50',
// 		backdropFilter: 'blur(36px)',
// 		boxShadow: 'subtle',
// 	},
// });

const ghost = definePartsStyle((props) => ({
	content: {
		bg: mode('whiteAlpha.600', 'blackAlpha.600')(props),
		backdropFilter: 'blur(20.5px) saturate(180%)',
		transform: 'auto-gpu',
		boxShadow: 'subtle',

		_light: {
			borderColor: 'blackAlpha.200',
		},
	},
	// header: {
	// 	bg: mode('whiteAlpha.400', 'blackAlpha.400')(props),
	// },
	// footer: {
	// 	bg: mode('whiteAlpha.400', 'blackAlpha.400')(props),
	// },
}));

export const popoverTheme = defineMultiStyleConfig({
	// baseStyle,
	variants: {
		ghost,
	},
	defaultProps: {
		variant: 'ghost',
	},
});
