'use client';

import { type ReactNode } from 'react';
import { Grid, type GridProps } from '@chakra-ui/react';

import { Wallpaper } from '@/components/Wallpaper';

interface WindowsGridProps extends GridProps {
	children: ReactNode;
}

export function WindowsGrid(props: WindowsGridProps) {
	const { children, ...rest } = props;

	return (
		<Grid
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
