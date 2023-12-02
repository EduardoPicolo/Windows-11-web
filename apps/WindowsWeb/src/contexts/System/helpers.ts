import WindowsWallpaper from '@/public/wallpapers/1-win11.jpg';

export const systemContextDefaultValues: SystemContext = {
	sound: [33, () => undefined],
	soundMuted: [
		false,
		{
			on: () => undefined,
			off: () => undefined,
			toggle: () => undefined,
		},
	],
	brightness: [100, () => undefined],
	wallpaper: [WindowsWallpaper, () => undefined],
	wallpaperFit: ['cover' as WallpaperFitStyle, () => undefined],
};

export const wallpaperFitOptions: WallpaperFitStyle[] = [
	'fill',
	'contain',
	'cover',
	'scale-down',
];
