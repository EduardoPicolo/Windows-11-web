'use client';

import Image from 'next/image';
import { useMemo } from 'react';
import {
	Grid,
	GridItem,
	HStack,
	useColorMode,
	useColorModeValue,
} from '@chakra-ui/react';
import { GridProps } from '@chakra-ui/styled-system';

import { AppIcon } from '@/components/AppIcon';
import { SystemTray } from '@/components/SystemTray';
import StartIconDark from '@/public/icons/Start_Dark.png';
import StartIconLight from '@/public/icons/Start_Light.png';

interface TaskbarProps extends GridProps {
	apps: App[];
}

export function Taskbar(props: TaskbarProps) {
	const { apps, ...rest } = props;

	const { colorMode } = useColorMode();

	const startApp: App = useMemo(() => {
		return {
			name: 'Start',
			icon: {
				light: <Image src={StartIconLight} alt="start" width={28} />,
				dark: <Image src={StartIconDark} alt="start" width={28} />,
			}[colorMode],
		};
	}, [colorMode]);

	const backgroundColor = useColorModeValue(
		'whiteAlpha.700',
		'blackAlpha.400'
	);

	return (
		<Grid
			w="100%"
			templateColumns="minmax(0, 1fr) 1fr minmax(0, 1fr)"
			alignItems="center"
			py={1}
			px={4}
			backgroundColor={backgroundColor}
			backdropFilter="blur(20.5px) saturate(200%)"
			{...rest}
		>
			<GridItem gridColumn={2} justifySelf="center">
				<HStack>
					<AppIcon {...startApp} />

					{apps?.map((app) => <AppIcon key={app.name} {...app} />)}
				</HStack>
			</GridItem>

			<GridItem gridColumn={3} justifySelf="flex-end">
				<SystemTray />
			</GridItem>
		</Grid>
	);
}
