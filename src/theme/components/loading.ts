import { defineStyleConfig } from '@chakra-ui/react';

export const loadingTheme = defineStyleConfig({
	// The styles all Cards have in common
	baseStyle: ({ theme, colorScheme }) => ({
		position: 'relative',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		maxWidth: '6rem',
		marginTop: '3rem',
		marginBottom: '3rem',

		_before: {
			content: '""',
			position: 'absolute',
			width: '100%',
			borderRadius: '50%',
			animation: 'pulsOut 1.8s ease-in-out infinite',
			filter: 'drop-shadow(0 0 1rem rgba(255, 255, 255, 0.75))',

			paddingBottom: '100%',
			boxShadow: 'inset 0 0 0 1rem #fff',
			animationName: 'pulsIn',
		},

		_after: {
			content: '""',
			position: 'absolute',
			borderRadius: '50%',
			animation: 'pulsOut 1.8s ease-in-out infinite',
			filter: 'drop-shadow(0 0 1rem rgba(255, 255, 255, 0.75))',

			width: 'calc(100% - 2rem)',
			paddingBottom: 'calc(100% - 2rem)',
			boxShadow: '0 0 0 0 #fff',

			// boxShadow: `0 2px 0 ${
			// 	(theme as Theme).colors[
			// 		colorScheme as keyof Theme['colors']
			// 	][600]
			// } inset`,
			// animation: 'rotate 2s linear infinite',
			// '@keyframes rotate': {
			// 	'0%': { transform: 'rotate(0)' },
			// 	'100%': { transform: 'rotate(360deg)' },
			// },
		},

		'@keyframes pulsIn': {
			'0%': {
				boxShadow: 'inset 0 0 0 1rem #fff',
				opacity: 1,
			},
			'50%, 100%': {
				boxShadow: 'inset 0 0 0 0 #fff',
				opacity: 0,
			},
		},

		'@keyframes pulsOut': {
			'0%, 50%': {
				boxShadow: '0 0 0 0 #fff',
				opacity: 0,
			},
			'100%': {
				boxShadow: '0 0 0 1rem #fff',
				opacity: 1,
			},
		},

		// _dark: {
		// 	_after: {
		// 		boxShadow: `0 4px 0 ${
		// 			(theme as Theme).colors[
		// 				colorScheme as keyof Theme['colors']
		// 			][500]
		// 		} inset`,
		// 	},
		// },
	}),
	// sizes: {
	// 	xs: {
	// 		width: '40px',
	// 		height: '40px',
	// 	},
	// 	sm: {
	// 		width: '80px',
	// 		height: '80px',
	// 	},
	// 	md: ({ theme, colorScheme }) => ({
	// 		width: '160px',
	// 		height: '160px',
	// 		_after: {
	// 			boxShadow: `0 3px 0 ${
	// 				(theme as Theme).colors[
	// 					colorScheme as keyof Theme['colors']
	// 				][500]
	// 			} inset`,
	// 		},
	// 	}),
	// 	lg: ({ theme, colorScheme }) => ({
	// 		width: '320px',
	// 		height: '320px',
	// 		_after: {
	// 			boxShadow: `0 4px 0 ${
	// 				(theme as Theme).colors[
	// 					colorScheme as keyof Theme['colors']
	// 				][500]
	// 			} inset`,
	// 		},
	// 	}),
	// },
	// Two variants: rounded and smooth
	variants: {},
	// The default variant value
	defaultProps: {
		// size: 'xs',
	},
});
