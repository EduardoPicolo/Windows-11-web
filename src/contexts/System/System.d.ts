type Wallpaper = import('next/image').ImageProps['src'];

interface SystemContext {
	sound: [number, React.Dispatch<React.SetStateAction<number>>];
	brightness: [number, React.Dispatch<React.SetStateAction<number>>];
	wallpaper: [
		Wallpaper,
		React.Dispatch<React.SetStateAction<Wallpaper>>,
	];
}
