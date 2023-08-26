import { defineStyleConfig, Theme } from '@chakra-ui/react';

export const loadingTheme = defineStyleConfig({
	// The styles all Cards have in common
	baseStyle: ({ theme, colorScheme }) => ({
		position: 'relative',
		width: '320px',
		height: '320px',

		_before: {
			content: '""',
			borderRadius: '50%',
			position: 'absolute',
			inset: 0,
			boxShadow: '0 0 10px 2px rgba(0, 0, 0, 0.05) inset',
		},

		_after: {
			content: '""',
			borderRadius: '50%',
			position: 'absolute',
			inset: 0,
			boxShadow: `0 2px 0 ${
				(theme as Theme).colors[
					colorScheme as keyof Theme['colors']
				][600]
			} inset`,
			animation: 'rotate 2s linear infinite',
			'@keyframes rotate': {
				'0%': { transform: 'rotate(0)' },
				'100%': { transform: 'rotate(360deg)' },
			},
		},

		_dark: {
			_after: {
				boxShadow: `0 4px 0 ${
					(theme as Theme).colors[
						colorScheme as keyof Theme['colors']
					][500]
				} inset`,
			},
		},
	}),
	sizes: {
		xs: {
			width: '40px',
			height: '40px',
		},
		sm: {
			width: '80px',
			height: '80px',
		},
		md: ({ theme, colorScheme }) => ({
			width: '160px',
			height: '160px',
			_after: {
				boxShadow: `0 3px 0 ${
					(theme as Theme).colors[
						colorScheme as keyof Theme['colors']
					][500]
				} inset`,
			},
		}),
		lg: ({ theme, colorScheme }) => ({
			width: '320px',
			height: '320px',
			_after: {
				boxShadow: `0 4px 0 ${
					(theme as Theme).colors[
						colorScheme as keyof Theme['colors']
					][500]
				} inset`,
			},
		}),
	},
	// Two variants: rounded and smooth
	variants: {},
	// The default variant value
	defaultProps: {
		size: 'xs',
	},
});
