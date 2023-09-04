import { Theme } from '@chakra-ui/react';

export const fonts: Theme['fonts'] = {
	// body: 'var(--body-font)',
	// heading: 'var(--heading-font)',
	body: 'var(--body-font), -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
	heading:
		'var(--body-font) -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
} as Theme['fonts'];

export const fontSizes = {
	xs: '0.8rem',
	sm: '0.875rem',
	// md: '0.935rem',
} as Partial<Theme['fontSizes']>;
