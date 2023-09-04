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
			src={state}
			alt="Wallpaper"
			placeholder="blur"
			quality={100}
			priority
			fill
			sizes="100vw"
			/* eslint-disable no-inline-styles/no-inline-styles -- needed */
			style={{
				objectFit: wallpaperFit,
				userSelect: 'none',
				pointerEvents: 'none',
				zIndex: -1,
			}}
			/* eslint-enable no-inline-styles/no-inline-styles */
			unselectable="on"
			{...props}
		/>
	);
}
