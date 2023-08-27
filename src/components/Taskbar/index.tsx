'use client';

import { type ReactElement } from 'react';
import {
	Grid,
	GridItem,
	HStack,
	useColorModeValue,
	useDisclosure,
} from '@chakra-ui/react';
import { type GridProps } from '@chakra-ui/styled-system';

import { SystemTray } from '@/components/SystemTray';

interface TaskbarProps extends GridProps {
	apps: ReactElement[];
}

export function Taskbar(props: TaskbarProps) {
	const { apps, ...rest } = props;

	const { onToggle, isOpen, onOpen, onClose } = useDisclosure();

	const backgroundColor = useColorModeValue(
		'whiteAlpha.700',
		'blackAlpha.600'
	);

	return (
		<Grid
			w="100%"
			templateColumns="minmax(0, 1fr) 1fr minmax(0, 1fr)"
			alignItems="center"
			py={1}
			px={4}
			backgroundColor={backgroundColor}
			_dark={{
				borderTop: '1px solid',
				borderColor: 'whiteAlpha.300',
			}}
			backdropFilter="blur(20.5px) saturate(180%)"
			{...rest}
		>
			<GridItem gridColumn={2} justifySelf="center">
				<HStack>{apps}</HStack>
			</GridItem>

			<GridItem gridColumn={3} justifySelf="flex-end">
				<SystemTray />
			</GridItem>
		</Grid>
	);
}
