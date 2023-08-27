'use client';

import {
	Grid,
	GridItem,
	HStack,
	useStyleConfig,
} from '@chakra-ui/react';
import { type GridProps } from '@chakra-ui/styled-system';

import { apps, Executable } from '@/components/Apps/apps';
import { StartApp } from '@/components/Apps/Start';
import { SystemTray } from '@/components/SystemTray';
import { TaskbarIcon } from '@/components/TaskbarIcon';

interface TaskbarProps extends GridProps {
	items: Executable[];
}

export function Taskbar(props: TaskbarProps) {
	const { items, ...rest } = props;

	const styles = useStyleConfig('Taskbar');

	return (
		<Grid __css={styles} {...rest}>
			<GridItem gridColumn={2} justifySelf="center">
				<HStack alignItems="stretch">
					<StartApp />

					{items?.map((item) => {
						const app = apps[item];

						return (
							<TaskbarIcon
								name={app.shortName}
								icon={app.icon}
								key={app.shortName}
								onClick={() => console.log('clicked', app.shortName)}
							/>
						);
					})}
				</HStack>
			</GridItem>

			<GridItem gridColumn={3} justifySelf="flex-end">
				<SystemTray />
			</GridItem>
		</Grid>
	);
}
