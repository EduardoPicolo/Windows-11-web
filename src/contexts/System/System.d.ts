type Wallpaper = import('next/image').ImageProps['src'];

interface SystemContext {
	sound: [number, React.Dispatch<React.SetStateAction<number>>];
	soundMuted: readonly [
		boolean,
		{
			on: () => void;
			off: () => void;
			toggle: () => void;
		},
	];
	brightness: [number, React.Dispatch<React.SetStateAction<number>>];
	wallpaper: [
		Wallpaper,
		React.Dispatch<React.SetStateAction<Wallpaper>>,
	];
	wallpaperFit: [
		WallpaperFitStyle,
		React.Dispatch<React.SetStateAction<WallpaperFitStyle>>,
	];
}

type WallpaperFitStyle = 'cover' | 'contain' | 'fill' | 'scale-down';
