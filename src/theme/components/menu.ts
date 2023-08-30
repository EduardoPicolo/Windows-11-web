import { menuAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const { definePartsStyle, defineMultiStyleConfig } =
	createMultiStyleConfigHelpers(menuAnatomy.keys);

// define the base component styles
const baseStyle = definePartsStyle((props) => ({
	// define the part you're going to style
	button: {
		// this will style the MenuButton component
	},
	list: {
		// this will style the MenuList component
		boxShadow: 'subtle',
	},
	item: {
		// this will style the MenuItem and MenuItemOption components

		_activeLink: {
			position: 'relative',
			bg: mode('gray.50', 'whiteAlpha.100')(props),

			_before: {
				content: '""',
				position: 'absolute',
				top: '50%',
				left: 0,
				transform: 'translateY(-50%)',
				width: '2px',
				height: '75%',
				bg: mode('blue.500', 'blue.300')(props),
			},
		},
	},
	groupTitle: {
		// this will style the text defined by the title prop
		// in the MenuGroup and MenuOptionGroup components
	},
	command: {
		// this will style the text defined by the command
		// prop in the MenuItem and MenuItemOption components
	},
	divider: {
		// this will style the MenuDivider component
	},
}));

const ghost = definePartsStyle((props) => ({
	list: {
		border: 'none',
		backgroundColor: mode('whiteAlpha.400', 'blackAlpha.600')(props),
		backgroundBlendMode: 'exclusion',
		boxShadow: 'dark-lg',
		backdropFilter: mode(
			'blur(46.5px) saturate(180%)',
			'blur(46.5px) saturate(180%) brightness(1.2) contrast(1.2)'
		)(props),
		zIndex: 3,

		// Add noise to the background
		_after: {
			content: '""',
			position: 'absolute',
			left: 0,
			top: 0,
			right: 0,
			bottom: 0,
			zIndex: -1,
			opacity: mode(0.6, 0.2)(props),
			borderRadius: 'md',
			background:
				'url(data:image/png;base64,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)',
		},

		_before: {
			content: '""',
			position: 'absolute',
			left: 0,
			top: 0,
			right: 0,
			bottom: 0,
			zIndex: -1,
			borderRadius: 'md',
			background: mode('whiteAlpha.500', 'blackAlpha.500')(props),
		},
	},
	item: {
		borderRadius: 'base',
		bg: 'transparent',

		_focus: {
			bg: mode('blackAlpha.200', 'whiteAlpha.200')(props),
		},

		_activeLink: {
			bg: mode('blackAlpha.50', 'whiteAlpha.100')(props),
		},
	},
	divider: {
		borderColor: mode('blackAlpha.100', 'whiteAlpha.300')(props),
	},
}));

const sizes = {
	sm: definePartsStyle({
		list: {
			minWidth: 'fit-content',
			p: 1.5,
		},
		item: {
			fontSize: 'md',
			svg: {
				minW: '18px',
				minH: '18px',
			},
		},
		icon: {
			justifyContent: 'center',
			alignItems: 'center',
		},
		command: {
			fontSize: 'xs',
		},
		divider: {
			my: 1.5,
		},
	}),
};

export const menuTheme = defineMultiStyleConfig({
	baseStyle,
	variants: {
		ghost,
	},
	sizes,
	defaultProps: {
		variant: 'ghost',
	},
});
