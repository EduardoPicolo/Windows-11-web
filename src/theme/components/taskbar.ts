import { defineStyleConfig } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

export const taskbarTheme = defineStyleConfig({
	baseStyle: (props) => ({
		display: 'grid',
		gridTemplateColumns: 'minmax(0, 1fr) 1fr minmax(0, 1fr)',
		width: '100%',
		alignItems: 'center',
		py: 1,
		px: 4,
		background: mode('whiteAlpha.700', 'blackAlpha.600')(props),
		backdropFilter:
			'blur(20.5px) saturate(180%) brightness(0.75) contrast(0.75)',
		zIndex: 1,

		_dark: {
			borderTop: '1px solid',
			borderColor: 'whiteAlpha.300',
		},
	}),
	sizes: {},
	// Two variants: rounded and smooth
	variants: {},
	// The default variant value
	defaultProps: {},
});
