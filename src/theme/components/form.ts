import { type Theme } from '@chakra-ui/react';
import type { StyleFunctionProps } from '@chakra-ui/styled-system';
import { mode } from '@chakra-ui/theme-tools';

const activeLabelStyles = {
	transform: 'scale(0.85) translateY(-24px)',
};

export const formTheme = {
	variants: {
		floating: (props: StyleFunctionProps) => ({
			container: {
				_focusWithin: {
					label: {
						...activeLabelStyles,
					},
				},
				'input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label':
					{
						...activeLabelStyles,
					},
				label: {
					top: 0,
					left: 0,
					zIndex: 2,
					position: 'absolute',
					backgroundColor: mode('white', 'gray.700')(props),
					color: mode('gray.500', 'gray.400')(props),
					pointerEvents: 'none',
					mx: 3,
					px: 1,
					my: 2,
					transformOrigin: 'left top',
				},
			},
		}),
	},
} as Partial<Theme['components']['Form']>;
