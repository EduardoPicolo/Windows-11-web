'use client';

import Image, { type StaticImageData } from 'next/image';
import { Grid, GridItem } from '@chakra-ui/react';

import { Loader } from '@/components/Loader';
import WindowsLogo from '@/public/icons/Windows.svg';

export function SplashScreen() {
	return (
		<Grid
			h="100vh"
			w="100vw"
			gridTemplateRows="1fr 1fr"
			justifyItems="center"
			background="radial-gradient(circle at center -32px,#21232c,#181a22 40%) no-repeat"
			backgroundSize="contain"
			filter="contrast(1.3)"
		>
			<GridItem alignSelf="end">
				<Image
					src={WindowsLogo as StaticImageData}
					alt="Logo"
					width={350}
					quality={100}
					priority
				/>
			</GridItem>

			<GridItem alignSelf="center" width="100px" height="100px">
				<Loader transform="scale(0.75)" />
			</GridItem>
		</Grid>
	);
}
