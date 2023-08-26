import Image, { type ImageProps } from 'next/image';

import WindowsWallpaper from '@/public/wallpapers/1-win11.jpg';

type WallpaperProps = Partial<ImageProps>;

export function Wallpaper(props: WallpaperProps) {
	return (
		<Image
			src={WindowsWallpaper}
			alt="Wallpaper"
			placeholder="blur"
			quality={100}
			fill
			sizes="100vw"
			style={{
				objectFit: 'cover',
			}}
			{...props}
		/>
	);
}
