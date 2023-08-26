'use client';

import { type ReactNode } from 'react';
import { Grid } from '@chakra-ui/react';

import { Wallpaper } from '@/components/Wallpaper';

interface WindowsGridProps {
	children: ReactNode;
}

export function WindowsGrid(props: WindowsGridProps) {
	const { children } = props;

	return (
		<Grid w="100vw" h="100vh" templateRows="1fr auto">
			<Wallpaper />

			{children}
		</Grid>
	);
}
