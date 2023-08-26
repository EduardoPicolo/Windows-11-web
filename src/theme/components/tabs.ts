import { tabsAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
	createMultiStyleConfigHelpers(tabsAnatomy.keys);

// define the base component styles
const baseStyle = definePartsStyle({
	// define the part you're going to style
	root: {
		overflowX: 'clip',
	},
	tablist: {
		overflowX: ['auto', 'auto', 'visible'],
		scrollbarWidth: 'none',
		'::-webkit-scrollbar': {
			display: 'none',
		} /* Chrome, Safari, Opera */,
		// '-ms-overflow-style': 'none' /* IE and Edge */,
		// 'scrollbar-width': 'none' /* Firefox */,
		WebkitOverflowScrolling: 'touch',
	},
});

const lineVariant = definePartsStyle((props) => {
	return {
		tab: {
			transition: 'all 0.2s',
			_focusVisible: {
				boxShadow: 'none',
			},
			_before: {
				content: '""',
				height: 'calc(100% - 14px)',
				position: 'absolute',
				top: '50%',
				bottom: '50%',
				transform: 'translateY(-50%)',
				left: 0,
				right: 0,
				mx: '4px',
				borderRadius: 'full',
				transition: 'all 0.2s',
			},

			_hover: {
				_before: {
					bg: 'hoverBg',
				},
			},

			_active: {
				bg: 'unset',
				_hover: {
					_before: {
						bg: 'transparent',
					},
				},
			},
		},
	};
});

const variants = {
	line: lineVariant,
};

// export the component theme
export const tabsTheme = defineMultiStyleConfig({
	variants,
	baseStyle,
});
