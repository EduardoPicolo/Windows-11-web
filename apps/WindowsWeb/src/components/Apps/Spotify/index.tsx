import { chakra } from '@chakra-ui/react';

export function Spotify() {
	return (
		<chakra.iframe
			allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
			allowFullScreen
			allowTransparency
			height="100%"
			loading="lazy"
			src="https://open.spotify.com/embed/playlist/37i9dQZF1DWZeKCadgRdKQ?utm_source=generator&theme=0"
			width="100%"
		/>
	);
}
