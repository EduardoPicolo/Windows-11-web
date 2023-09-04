import { cardAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const { definePartsStyle, defineMultiStyleConfig } =
	createMultiStyleConfigHelpers(cardAnatomy.keys);

const baseStyle = definePartsStyle((props) => ({
	// define the part you're going to style
	container: {},
	header: {},
	body: {},
	footer: {},
}));

const ghost = definePartsStyle((props) => ({
	container: {
		border: '1px solid whiteAlpha.300',
		borderColor: mode('blackAlpha.300', 'whiteAlpha.700')(props),
		backgroundColor: mode('whiteAlpha.600', 'blackAlpha.600')(props),
		backdropFilter: mode(
			'blur(46.5px) saturate(190%) brightness(1.2) contrast(0.9)',
			'blur(46.5px) saturate(220%) brightness(1.1) contrast(0.75)'
		)(props),
		backgroundBlendMode: 'exclusion',
		boxShadow: 'lg',

		// Add noise to the background
		_after: {
			content: '""',
			position: 'absolute',
			left: 0,
			top: 0,
			right: 0,
			bottom: 0,
			zIndex: -1,
			opacity: mode(0.3, 0.33)(props),
			border: '1px solid',
			borderColor: 'inherit',
			borderRadius: 'inherit',
			background:
				'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAUVBMVEWFhYWDg4N3d3dtbW17e3t1dXWBgYGHh4d5eXlzc3OLi4ubm5uVlZWPj4+NjY19fX2JiYl/f39ra2uRkZGZmZlpaWmXl5dvb29xcXGTk5NnZ2c8TV1mAAAAG3RSTlNAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAvEOwtAAAFVklEQVR4XpWWB67c2BUFb3g557T/hRo9/WUMZHlgr4Bg8Z4qQgQJlHI4A8SzFVrapvmTF9O7dmYRFZ60YiBhJRCgh1FYhiLAmdvX0CzTOpNE77ME0Zty/nWWzchDtiqrmQDeuv3powQ5ta2eN0FY0InkqDD73lT9c9lEzwUNqgFHs9VQce3TVClFCQrSTfOiYkVJQBmpbq2L6iZavPnAPcoU0dSw0SUTqz/GtrGuXfbyyBniKykOWQWGqwwMA7QiYAxi+IlPdqo+hYHnUt5ZPfnsHJyNiDtnpJyayNBkF6cWoYGAMY92U2hXHF/C1M8uP/ZtYdiuj26UdAdQQSXQErwSOMzt/XWRWAz5GuSBIkwG1H3FabJ2OsUOUhGC6tK4EMtJO0ttC6IBD3kM0ve0tJwMdSfjZo+EEISaeTr9P3wYrGjXqyC1krcKdhMpxEnt5JetoulscpyzhXN5FRpuPHvbeQaKxFAEB6EN+cYN6xD7RYGpXpNndMmZgM5Dcs3YSNFDHUo2LGfZuukSWyUYirJAdYbF3MfqEKmjM+I2EfhA94iG3L7uKrR+GdWD73ydlIB+6hgref1QTlmgmbM3/LeX5GI1Ux1RWpgxpLuZ2+I+IjzZ8wqE4nilvQdkUdfhzI5QDWy+kw5Wgg2pGpeEVeCCA7b85BO3F9DzxB3cdqvBzWcmzbyMiqhzuYqtHRVG2y4x+KOlnyqla8AoWWpuBoYRxzXrfKuILl6SfiWCbjxoZJUaCBj1CjH7GIaDbc9kqBY3W/Rgjda1iqQcOJu2WW+76pZC9QG7M00dffe9hNnseupFL53r8F7YHSwJWUKP2q+k7RdsxyOB11n0xtOvnW4irMMFNV4H0uqwS5ExsmP9AxbDTc9JwgneAT5vTiUSm1E7BSflSt3bfa1tv8Di3R8n3Af7MNWzs49hmauE2wP+ttrq+AsWpFG2awvsuOqbipWHgtuvuaAE+A1Z/7gC9hesnr+7wqCwG8c5yAg3AL1fm8T9AZtp/bbJGwl1pNrE7RuOX7PeMRUERVaPpEs+yqeoSmuOlokqw49pgomjLeh7icHNlG19yjs6XXOMedYm5xH2YxpV2tc0Ro2jJfxC50ApuxGob7lMsxfTbeUv07TyYxpeLucEH1gNd4IKH2LAg5TdVhlCafZvpskfncCfx8pOhJzd76bJWeYFnFciwcYfubRc12Ip/ppIhA1/mSZ/RxjFDrJC5xifFjJpY2Xl5zXdguFqYyTR1zSp1Y9p+tktDYYSNflcxI0iyO4TPBdlRcpeqjK/piF5bklq77VSEaA+z8qmJTFzIWiitbnzR794USKBUaT0NTEsVjZqLaFVqJoPN9ODG70IPbfBHKK+/q/AWR0tJzYHRULOa4MP+W/HfGadZUbfw177G7j/OGbIs8TahLyynl4X4RinF793Oz+BU0saXtUHrVBFT/DnA3ctNPoGbs4hRIjTok8i+algT1lTHi4SxFvONKNrgQFAq2/gFnWMXgwffgYMJpiKYkmW3tTg3ZQ9Jq+f8XN+A5eeUKHWvJWJ2sgJ1Sop+wwhqFVijqWaJhwtD8MNlSBeWNNWTa5Z5kPZw5+LbVT99wqTdx29lMUH4OIG/D86ruKEauBjvH5xy6um/Sfj7ei6UUVk4AIl3MyD4MSSTOFgSwsH/QJWaQ5as7ZcmgBZkzjjU1UrQ74ci1gWBCSGHtuV1H2mhSnO3Wp/3fEV5a+4wz//6qy8JxjZsmxxy5+4w9CDNJY09T072iKG0EnOS0arEYgXqYnXcYHwjTtUNAcMelOd4xpkoqiTYICWFq0JSiPfPDQdnt+4/wuqcXY47QILbgAAAABJRU5ErkJggg==)',
		},

		// _before: {
		// 	content: '""',
		// 	position: 'absolute',
		// 	left: 0,
		// 	top: 0,
		// 	right: 0,
		// 	bottom: 0,
		// 	zIndex: -1,
		// 	borderRadius: 'inherit',
		// 	opacity: mode(0.1, 0.5)(props),
		// 	background: mode('whiteAlpha.100', 'gray.700')(props),
		// },
	},
	header: {
		backgroundColor: mode('transparent', 'blackAlpha.500')(props),
		borderTopRadius: 'inherit',
	},
	body: {
		backgroundColor: mode('transparent', 'blackAlpha.500')(props),
	},
	footer: {
		position: 'relative',
		borderBottomRadius: 'inherit',
		bg: mode('whiteAlpha.300', 'blackAlpha.600')(props),
		_before: {
			content: '""',
			position: 'absolute',
			left: 0,
			top: 0,
			right: 0,
			bottom: 0,
			zIndex: -1,
			borderRadius: 'inherit',
			opacity: mode(0.33, 0.2)(props),
			background: mode('whiteAlpha.300', 'gray.700')(props),
		},
	},
}));

const window = definePartsStyle((props) => ({
	container: {
		width: '100%',
		backgroundColor: mode('whiteAlpha.700', 'blackAlpha.700')(props),
		boxShadow: 'base',
		backdropFilter: mode(
			'blur(126.5px) saturate(200%) brightness(1.1) contrast(0.9)',
			'blur(126.5px) saturate(150%) brightness(0.66) contrast(0.66)'
		)(props),
		zIndex: 1,
		transition: 'all 0.1s',
	},
	header: {
		pl: 1.5,
		pr: 0,
		py: 0,
		backgroundColor: mode('whiteAlpha.300', 'blackAlpha.50')(props),
		borderTopRadius: 'inherit',
	},
	body: {
		p: 0,
		backgroundColor: mode('whiteAlpha.300', 'blackAlpha.50')(props),
		borderBottomRadius: 'inherit',
	},
	footer: {},
}));

const sizes = {
	xl: definePartsStyle((props) => ({
		container: {
			borderRadius: 'xl',
		},
		header: { padding: 10, borderTopRadius: 'xl' },
		body: {
			paddingX: 20,
		},
		footer: { paddingX: 12, paddingY: 4, borderBottomRadius: 'xl' },
	})),
};

export const cardTheme = defineMultiStyleConfig({
	baseStyle,
	variants: {
		ghost,
		window,
	},
	sizes,
	defaultProps: {
		variant: 'ghost',
	},
});
