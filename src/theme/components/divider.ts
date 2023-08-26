import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const baseStyle = defineStyle({
	_light: {
		borderColor: 'gray.300',
	},
});

export const dividerTheme = defineStyleConfig({
	baseStyle,
});
