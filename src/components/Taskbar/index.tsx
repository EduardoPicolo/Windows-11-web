'use client';

import { Grid, GridItem, HStack, Icon, Text } from '@chakra-ui/react';
import { GridProps } from '@chakra-ui/styled-system';
import { FaWindows } from 'react-icons/fa';

import { AppIcon } from '@/components/AppIcon';

interface TaskbarProps extends GridProps {
	apps?: any[]; // TODO: Create an interface for apps
}

export function Taskbar(props: TaskbarProps) {
	const { apps, ...rest } = props;

	return (
		<Grid
			w="100%"
			templateColumns="minmax(0, 1fr) 1fr minmax(0, 1fr)"
			alignItems="center"
			padding={1}
			backdropFilter="blur(20.5px)"
			{...rest}
		>
			<GridItem gridColumn={2} justifySelf="center">
				<HStack>
					<AppIcon
						icon={<Icon as={FaWindows} boxSize={8} />}
						name="Placeholder"
					/>
					<AppIcon
						icon={<Icon as={FaWindows} boxSize={8} />}
						name="Placeholder"
					/>
					<AppIcon
						icon={<Icon as={FaWindows} boxSize={8} />}
						name="Placeholder"
					/>
					<AppIcon
						icon={<Icon as={FaWindows} boxSize={8} />}
						name="Placeholder"
					/>
				</HStack>
			</GridItem>

			<GridItem gridColumn={3} justifySelf="flex-end">
				<Text>Notification Area</Text>
			</GridItem>
		</Grid>
	);
}
