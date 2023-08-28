import WindowsWallpaper from '@/public/wallpapers/1-win11.jpg';

export const systemContextDefaultValues: SystemContext = {
	sound: [33, () => {}],
	brightness: [100, () => {}],
	wallpaper: [WindowsWallpaper, () => {}],
};
