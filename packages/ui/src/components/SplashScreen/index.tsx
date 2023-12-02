'use client';

import Image, { type StaticImageData } from 'next/image';
import type { GridProps } from '@chakra-ui/react';
import {
	Center,
	DarkMode,
	Grid,
	GridItem,
	Heading,
} from '@chakra-ui/react';

import WindowsLogo from '../../public/icons/Windows.svg';
import { Loader } from '..';

type SplashScreenProps = GridProps;

export function SplashScreen(props: SplashScreenProps) {
	return (
		<DarkMode>
			<Grid
				background="radial-gradient(ellipse at right, #050f16,#000000 70%) no-repeat"
				backgroundSize="contain"
				filter="saturate(2)"
				gridTemplateRows="1fr 1fr"
				h="100vh"
				justifyItems="center"
				w="100vw"
				{...props}
			>
				<GridItem alignSelf="end">
					<Image
						alt="Logo"
						src={WindowsLogo as StaticImageData}
						width={350}
					/>
				</GridItem>

				<GridItem alignSelf="center">
					<Center flexDirection="column" gap={6}>
						<Loader transform="scale(0.75)" />
						<Heading color="white" fontSize="2xl" fontWeight="medium">
							Getting started
						</Heading>
					</Center>
				</GridItem>
			</Grid>
		</DarkMode>
	);
}
