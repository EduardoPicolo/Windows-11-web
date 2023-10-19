'use client';

import Image, { type StaticImageData } from 'next/image';
import {
	Center,
	DarkMode,
	Grid,
	GridItem,
	GridProps,
	Heading,
} from '@chakra-ui/react';

import { Loader } from '@/components/Loader';
import WindowsLogo from '@/public/icons/Windows.svg';

type SplashScreenProps = GridProps;

export function SplashScreen(props: SplashScreenProps) {
	return (
		<DarkMode>
			<Grid
				h="100vh"
				w="100vw"
				gridTemplateRows="1fr 1fr"
				justifyItems="center"
				background="radial-gradient(ellipse at right, #050f16,#000000 70%) no-repeat"
				backgroundSize="contain"
				filter="saturate(2)"
				{...props}
			>
				<GridItem alignSelf="end">
					<Image
						src={WindowsLogo as StaticImageData}
						alt="Logo"
						width={350}
					/>
				</GridItem>

				<GridItem alignSelf="center">
					<Center flexDirection="column" gap={6}>
						<Loader transform="scale(0.75)" />
						<Heading fontSize="2xl" fontWeight="medium" color="white">
							Getting started
						</Heading>
					</Center>
				</GridItem>
			</Grid>
		</DarkMode>
	);
}
