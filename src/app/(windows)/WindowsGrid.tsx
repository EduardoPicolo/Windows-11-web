'use client';

import { type ReactNode } from 'react';
import { Grid, type GridProps } from '@chakra-ui/react';

import { Wallpaper } from '@/components/Wallpaper';

interface WindowsGridProps extends GridProps {
	children: ReactNode;
}

export async function WindowsGrid(props: WindowsGridProps) {
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

	// Fake await
	await new Promise((resolve) => {
		setTimeout(resolve, 2000);
	});

	return (
		<Grid
			position="relative"
			w="100vw"
			h="100vh"
			templateRows="1fr auto"
			userSelect="none"
			{...rest}
		>
			<Wallpaper />

			{children}
		</Grid>
	);
}
