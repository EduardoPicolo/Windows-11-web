'use client';

import React, {
	type MouseEventHandler,
	useCallback,
	useState,
} from 'react';
import { Box, Grid, useDisclosure } from '@chakra-ui/react';

import {
	EdgeApp,
	SpotifyApp,
	VSCodeApp,
} from '@/components/Apps/apps';
import { DesktopContextMenu } from '@/components/DesktopContextMenu';
import { DesktopIcon } from '@/components/DesktopIcon';

export default function Home() {
	const menuDisclosure = useDisclosure();

	const [menuPosition, setMenuPosition] = useState({
		x: 0,
		y: 0,
	});

	const handleContextMenu = useCallback<
		MouseEventHandler<HTMLDivElement>
	>(
		(e) => {
			e.preventDefault();

			/**
			 * Open menu on right click at mouse position. If its near the
			 * edge of the screen, open it on the left instead.
			 *
			 * If the user clicks a desktop icon, don't open the menu.
			 */
			if (
				(e.target as HTMLElement).className.includes(
					'desktop-icon'
				) ||
				(e.target as HTMLElement).tagName === 'P'
			) {
				console.log('Clicked desktop icon, not opening menu.');

				return;
			}

			const { clientX, clientY } = e;
			const { innerWidth, innerHeight } = window;

			const x = clientX + 200 > innerWidth ? clientX - 200 : clientX;
			const y = clientY + 200 > innerHeight ? clientY - 200 : clientY;

			setMenuPosition({ x, y });
			menuDisclosure.onOpen();
		},
		[menuDisclosure]
	);

	return (
		<Box h="full" p={4} onContextMenu={handleContextMenu}>
			<DesktopContextMenu
				position={menuPosition}
				{...menuDisclosure}
			/>

			<Grid
				gridTemplateColumns="repeat(auto-fill, minmax(90px, 1fr))"
				gridTemplateRows="repeat(auto-fill, minmax(110px, 1fr));"
				h="full"
				textAlign="center"
			>
				<DesktopIcon app={EdgeApp} />
				<DesktopIcon app={VSCodeApp} gridRow={2} />
				<DesktopIcon app={SpotifyApp} gridRow={3} />
			</Grid>
		</Box>
	);
}
