'use client';

import React from 'react';
import { Grid } from '@chakra-ui/react';

import { EdgeApp } from '@/components/Apps/apps';
import { DesktopIcon } from '@/components/DesktopIcon';

export default function Home() {
	return (
		<Grid
			templateColumns="repeat(auto-fill, minmax(75px, 1fr))"
			gridTemplateRows="max-content"
			gridAutoFlow="dense"
			gap={8}
			justifyItems="center"
			height="100%"
			padding={4}
			textAlign="center"
		>
			<DesktopIcon app={EdgeApp} />

			<DesktopIcon app={EdgeApp} />
		</Grid>
	);
}
