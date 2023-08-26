import { checkboxAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

// eslint-disable-next-line @typescript-eslint/unbound-method -- False positive
const { definePartsStyle, defineMultiStyleConfig } =
	createMultiStyleConfigHelpers(checkboxAnatomy.keys);

const baseStyle = definePartsStyle((props) => ({
	// define the part you're going to style
	container: {},
	label: {},
	control: {
		// _checked: {
		// 	borderColor: 'orange.500',
		// 	background: 'orange.500',
		// },
	},
	icon: {},
}));

export const checkboxTheme = defineMultiStyleConfig({
	baseStyle,
});
