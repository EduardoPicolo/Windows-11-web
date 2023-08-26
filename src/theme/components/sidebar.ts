import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';
import { mode } from '@chakra-ui/theme-tools';

// This function creates a set of function that helps us create multipart component styles.
const helpers = createMultiStyleConfigHelpers([
	'sidebar',
	'groupList',
	'groupHeader',
	'item',
	'icon',
]);

// @see - https://chakra-ui.com/docs/styled-system/component-style#styling-multipart-components
export const sidebarTheme = helpers.defineMultiStyleConfig({
	baseStyle: (props) =>
		// console.groupCollapsed('SidebarTheme ~ props');
		// console.log(props);
		// console.groupEnd();

		({
			sidebar: {
				gridArea: 'sidebar',
				position: 'sticky',
				top: 0,
				width: '100%',
				maxWidth: 'var(--sidebar-width)',
				height: 'fit-content',
			},
			groupHeader: {
				color: mode('gray.600', 'gray.400')(props),
				fontSize: 'smaller',
				fontWeight: 'hairline',
				textTransform: 'uppercase',
			},
			groupList: {},
			item: {
				display: 'flex',
				alignItems: 'center',
				gap: 3,
				padding: 2,
				borderLeft: '2px solid',
				borderColor: 'transparent',
				borderRadius: 'base',
				color: mode('gray.700', 'gray.100')(props),
				whiteSpace: 'nowrap',

				_selected: {
					color: mode('gray.900', 'white')(props),
					// fontWeight: 'medium',
					bg: mode('blackAlpha.50', 'whiteAlpha.100')(props),
					borderColor: 'primaryDarker',
					borderLeftRadius: 0,
				},

				_hover: {
					bg: 'hoverBg',
				},
			},
			icon: {},
		}),
	sizes: {
		sm: {
			sidebar: {},
			groupHeader: {},
			groupList: {},
			item: {
				fontSize: 'sm',
				padding: 1.5,
			},
			icon: {
				display: 'none',
			},
		},
		md: {
			sidebar: {},
			groupHeader: {},
			groupList: {},
			item: {
				fontSize: 'md',
				padding: 2,
			},
			icon: {
				boxSize: 6,
			},
		},
		lg: {
			sidebar: {},
			groupHeader: {},
			groupList: {},
			item: {
				fontSize: 'lg',
				padding: 2.5,
				fontWeight: 'medium',
				gap: 3,
			},
			icon: {
				boxSize: 7,
			},
		},
	},
	variants: {
		ghost: (props) => ({
			sidebar: {
				background: 'transparent',
			},
		}),
		solid: (props) => ({
			sidebar: {
				background: mode('blackAlpha.100', 'whiteAlpha.50')(props),
			},
			item: {
				borderRadius: 0,
			},
		}),
		outline: (props) => ({
			sidebar: {
				borderRight: '1px solid',
				borderColor: mode('blackAlpha.200', 'whiteAlpha.200')(props),
				padding: 2,
			},
		}),
	},
	defaultProps: {
		size: 'md',
		variant: 'ghost',
	},
});
