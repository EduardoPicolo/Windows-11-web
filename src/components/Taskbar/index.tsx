'use client';

import {
	Grid,
	GridItem,
	HStack,
	useStyleConfig,
} from '@chakra-ui/react';
import { type GridProps } from '@chakra-ui/styled-system';

import { StartApp } from '@/components/Apps/Start';
import { SystemTray } from '@/components/SystemTray';
import { TaskbarIcon } from '@/components/TaskbarIcon';

interface TaskbarProps extends GridProps {
	apps: App[];
}

export function Taskbar(props: TaskbarProps) {
	const { apps, ...rest } = props;

	const styles = useStyleConfig('Taskbar');

	return (
		<Grid __css={styles} {...rest}>
			<GridItem gridColumn={2} justifySelf="center">
				<HStack alignItems="stretch">
					<StartApp />

					{apps?.map((app) => (
						<TaskbarIcon key={app?.processName} app={app} />
					))}
				</HStack>
			</GridItem>

			<GridItem gridColumn={3} justifySelf="flex-end">
				<SystemTray />
			</GridItem>
		</Grid>
	);
}
