'use client';

import { type ReactElement } from 'react';
import {
	Grid,
	GridItem,
	HStack,
	useStyleConfig,
} from '@chakra-ui/react';
import { type GridProps } from '@chakra-ui/styled-system';

import { SystemTray } from '@/components/SystemTray';

interface TaskbarProps extends GridProps {
	apps: ReactElement[];
}

export function Taskbar(props: TaskbarProps) {
	const { apps, ...rest } = props;

	const styles = useStyleConfig('Taskbar');

	console.log(styles);

	return (
		<Grid __css={styles} {...rest}>
			<GridItem gridColumn={2} justifySelf="center">
				<HStack alignItems="stretch">{apps}</HStack>
			</GridItem>

			<GridItem gridColumn={3} justifySelf="flex-end">
				<SystemTray />
			</GridItem>
		</Grid>
	);
}
