import { Grid, type GridProps } from '@chakra-ui/react';
import { Wallpaper } from '@repo/ui/components';
import { type ReactNode } from 'react';

interface WindowsGridProps extends GridProps {
	children: ReactNode;
}

export function WindowsGrid(props: WindowsGridProps) {
	const { children, ...rest } = props;

	// useLayoutEffect(() => {
	// 	const audio = new Audio('/sounds/WindowsStartup.wav');

	// 	/**
	// 	 * User has bo interact with the DOM first due to browser
	// 	 * policies, otherwise the audio will not play.
	// 	 *
	// 	 * Workaround: add a event listener to the document `mousemove`
	// 	 * and play the audio on the first interaction. Then remove the
	// 	 * event listener.
	// 	 */
	// 	const handleFirstInteraction = async () => {
	// 		try {
	// 			await audio.play();
	// 			document.removeEventListener(
	// 				'mousemove',
	// 				handleFirstInteraction
	// 			);
	// 		} catch (error) {
	// 			console.error(error);
	// 		}
	// 	};

	// 	document.addEventListener('mousemove', handleFirstInteraction);
	// }, []);

	return (
		<Grid
			h="100vh"
			position="relative"
			templateRows="1fr auto"
			userSelect="none"
			w="100vw"
			{...rest}
		>
			<Wallpaper />

			{children}
		</Grid>
	);
}
