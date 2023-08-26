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
		bg: mode('whiteAlpha.400', 'blackAlpha.500')(props),
		backdropFilter: 'blur(20.5px) saturate(180%)',
		transform: 'auto-gpu',

		_light: {
			borderColor: 'blackAlpha.200',
		},
	},
	item: {
		bg: 'transparent',

		_focus: {
			bg: mode('blackAlpha.100', 'whiteAlpha.50')(props),
		},

		_activeLink: {
			bg: mode('blackAlpha.50', 'whiteAlpha.100')(props),
		},
	},
	divider: {
		borderColor: mode('blackAlpha.200', 'inherit')(props),
	},
}));

export const menuTheme = defineMultiStyleConfig({
	baseStyle,
	variants: {
		ghost,
	},
	defaultProps: {
		variant: 'ghost',
	},
});
