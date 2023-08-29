'use client';

import React from 'react';
import { Box, Grid } from '@chakra-ui/react';

import { EdgeApp } from '@/components/Apps/apps';
import { DesktopIcon } from '@/components/DesktopIcon';

export default function Home() {
	return (
		<Box h="full" p={4}>
			<Grid
				gridTemplateColumns="repeat(auto-fill, minmax(75px, 1fr))"
				gridTemplateRows="repeat(auto-fill, minmax(120px, 1fr));"
				gap={4}
				h="full"
				textAlign="center"
			>
				<DesktopIcon app={EdgeApp} />

				<DesktopIcon app={EdgeApp} />
			</Grid>
		</Box>
	);
}
