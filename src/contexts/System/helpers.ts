import WindowsWallpaper from '@/public/wallpapers/1-win11.jpg';

export const systemContextDefaultValues: SystemContext = {
	sound: [33, () => {}],
	soundMuted: [
		false,
		{
			on: () => {},
			off: () => {},
			toggle: () => {},
		},
	],
	brightness: [100, () => {}],
	wallpaper: [WindowsWallpaper, () => {}],
	wallpaperFit: ['cover' as WallpaperFitStyle, () => {}],
};

export const wallpaperFitOptions: WallpaperFitStyle[] = [
	'fill',
	'contain',
	'cover',
	'scale-down',
];
