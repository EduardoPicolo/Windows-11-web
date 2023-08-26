import { Theme } from '@chakra-ui/react';

export const fonts: Theme['fonts'] = {
	body: 'var(--body-font)',
	heading: 'var(--heading-font)',
} as Theme['fonts'];

export const fontSizes = {
	sm: '0.825rem',
} as Partial<Theme['fontSizes']>;
