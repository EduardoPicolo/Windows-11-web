import Image, { type ImageProps } from 'next/image';

import { useSystem } from '@/contexts/System/index.';

type WallpaperProps = Partial<ImageProps>;

export function Wallpaper(props: WallpaperProps) {
	const {
		wallpaper: [state],
		wallpaperFit: [wallpaperFit],
	} = useSystem();

	return (
		<Image
			alt="Wallpaper"
			fill
			placeholder="blur"
			priority
			quality={100}
			src={state}
			/* eslint-disable no-inline-styles/no-inline-styles -- needed */
			style={{
				objectFit: wallpaperFit,
				userSelect: 'none',
				pointerEvents: 'none',
				zIndex: -1,
			}}
			unselectable="on"
			/* eslint-enable no-inline-styles/no-inline-styles */
			sizes="100vw"
			{...props}
		/>
	);
}
