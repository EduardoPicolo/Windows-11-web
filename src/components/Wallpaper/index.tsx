import Image, { type ImageProps } from 'next/image';

type WallpaperProps = Partial<ImageProps>;

export function Wallpaper(props: WallpaperProps) {
	return (
		<Image
			src="/wallpapers/1-win11.jpg"
			alt="Windows 11 Wallpaper"
			layout="fill"
			objectFit="cover"
			priority
			quality={100}
			style={{
				zIndex: -1,
			}}
			{...props}
		/>
	);
}
