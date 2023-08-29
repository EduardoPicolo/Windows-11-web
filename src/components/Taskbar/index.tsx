'use client';

import {
	Box,
	Grid,
	GridItem,
	HStack,
	InputLeftElement,
	useStyleConfig,
} from '@chakra-ui/react';
import { type GridProps } from '@chakra-ui/styled-system';

import { StartApp } from '@/components/Apps/Start';
import { Input } from '@/components/FormFields';
import { SystemTray } from '@/components/SystemTray';
import { TaskbarIcon } from '@/components/TaskbarIcon';
import { ThemeImage } from '@/components/ThemeImage';
import SearchIconDark from '@/public/icons/Search_Dark.png';
import SearchIconLight from '@/public/icons/Search_Light.png';

interface TaskbarProps extends GridProps {
	apps: App[];
}

export function Taskbar(props: TaskbarProps) {
	const { apps, ...rest } = props;

	const styles = useStyleConfig('Taskbar');

	return (
		<Grid __css={styles} {...rest}>
			<GridItem gridColumn={2} justifySelf="center">
				<HStack spacing={1}>
					<StartApp />

					<Input
						minW="200px"
						height="32px"
						placeholder="Search"
						autoComplete="off"
						leftElement={
							<InputLeftElement pointerEvents="none" boxSize="32px">
								<Box
									boxSize="18px"
									position="relative"
									transform="scaleX(-1)"
								>
									<ThemeImage
										srcLight={SearchIconLight}
										srcDark={SearchIconDark}
										alt="search"
									/>
								</Box>
							</InputLeftElement>
						}
					/>

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
