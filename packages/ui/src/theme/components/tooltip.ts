import { defineStyle, defineStyleConfig } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

// define the base component styles
const baseStyle = {
	borderRadius: 'base',
};

// define custom sizes
const sizes = {
	sm: defineStyle({
		fontSize: 'xs',
		py: '1',
		px: '2',
		maxW: '320px',
	}),
	md: defineStyle({
		fontSize: 'sm',
		py: '2',
		px: '3',
		maxW: '320px',
	}),
	lg: defineStyle({
		fontSize: 'md',
		py: '2',
		px: '4',
		maxW: '350px',
	}),
};

const ghostVariant = defineStyle((props) => ({
	fontWeight: 'semibold',
	bg: mode('whiteAlpha.600', 'blackAlpha.700')(props),
	color: mode(`inherit`, `gray.300`)(props),
	boxShadow: 'subtle',
	backdropFilter:
		'blur(20.5px) saturate(180%) brightness(0.75) contrast(0.75)',
}));

// define custom variants
const variants = {
	ghost: ghostVariant,
};

// export the component theme
export const tooltipTheme = defineStyleConfig({
	baseStyle,
	sizes,
	variants,
	defaultProps: {
		size: 'sm',
		variant: 'ghost',
	},
});
