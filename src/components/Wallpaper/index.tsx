import Image, { type ImageProps } from 'next/image';

import { useSystem } from '@/contexts/System/index.';

type WallpaperProps = Partial<ImageProps>;

export function Wallpaper(props: WallpaperProps) {
	const {
		wallpaper: [state],
	} = useSystem();

	return (
		<Image
			src={state}
			alt="Wallpaper"
			placeholder="blur"
			quality={100}
			fill
			sizes="100vw"
			style={{
				objectFit: 'cover',
				userSelect: 'none',
				pointerEvents: 'none',
				zIndex: -1,
			}}
			unselectable="on"
			{...props}
		/>
	);
}
