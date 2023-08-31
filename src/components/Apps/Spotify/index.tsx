import { chakra } from '@chakra-ui/react';

export function Spotify() {
	return (
		<chakra.iframe
			src="https://open.spotify.com/embed/playlist/37i9dQZF1DWZeKCadgRdKQ?utm_source=generator&theme=0"
			width="100%"
			height="100%"
			allowFullScreen
			allowTransparency
			allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
			loading="lazy"
		/>
	);
}
