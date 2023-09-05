'use client';

import {
	type MouseEventHandler,
	useCallback,
	useMemo,
	useState,
} from 'react';
import {
	Box,
	Grid,
	GridItem,
	type GridProps,
	HStack,
	InputLeftElement,
	useDisclosure,
	useStyleConfig,
} from '@chakra-ui/react';
import { useAutoAnimate } from '@formkit/auto-animate/react';

import { StartApp } from '@/components/Apps/Start';
import { Input } from '@/components/FormFields';
import { SystemTray } from '@/components/SystemTray';
import { TaskbarContextMenu } from '@/components/TaskbarContextMenu';
import { TaskbarIcon } from '@/components/TaskbarIcon';
import { ThemeImage } from '@/components/ThemeImage';
import { WindowsPreview } from '@/components/WindowsPreview';
import { useWindows } from '@/contexts/Windows';
import SearchIconDark from '@/public/icons/Search_Dark.png';
import SearchIconLight from '@/public/icons/Search_Light.png';
import { getEntries, getKeys, getValues } from '@/utils/getEntries';

interface TaskbarProps extends GridProps {
	initialApps: App[];
}

export function Taskbar(props: TaskbarProps) {
	const { initialApps, ...rest } = props;

	const { windows, addWindow, minimize, focusWindow } = useWindows();

	const runningProcesses = useMemo(
		() => getEntries(windows),
		[windows]
	);

	const handleAddWindow = useCallback(
		(app: App): MouseEventHandler<HTMLButtonElement> =>
			() => {
				addWindow(app);
			},
		[addWindow]
	);

	const handleShowWindow = useCallback(
		(
			process: Process,
			id: number
		): MouseEventHandler<HTMLButtonElement> =>
			(_event) => {
				minimize.off(process, id);
				focusWindow(process, id);
			},
		[focusWindow, minimize]
	);

	const contextMenuDisclosure = useDisclosure();
	const [contextMenuPOsition, setContextMenuPOsition] = useState({
		x: 0,
		y: 'calc(100% - 145px)',
	});

	const handleContextMenu = useCallback<
		MouseEventHandler<HTMLDivElement>
	>(
		(e) => {
			e.preventDefault();

			setContextMenuPOsition((prev) => ({
				x: e.clientX,
				y: prev.y,
			}));

			contextMenuDisclosure.onOpen();
		},
		[contextMenuDisclosure]
	);

	const [parent] = useAutoAnimate({
		easing: 'ease-out',
	});

	const styles = useStyleConfig('Taskbar');

	return (
		<>
			<Grid
				__css={styles}
				onContextMenu={handleContextMenu}
				{...rest}
			>
				<GridItem gridColumn={2} justifySelf="center">
					<HStack spacing={1}>
						<StartApp />

						<HStack spacing={1} ref={parent}>
							<Input
								width="200px"
								height="32px"
								placeholder="Search"
								autoComplete="off"
								leftElement={
									<InputLeftElement
										pointerEvents="none"
										boxSize="32px"
									>
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

							{initialApps?.map((app) => (
								<WindowsPreview
									key={app?.processName}
									process={app?.processName}
								>
									<TaskbarIcon
										app={app}
										onClick={
											windows?.[app?.processName]
												? handleShowWindow(
														app?.processName,
														getKeys(windows?.[app?.processName])?.[0]
												  )
												: handleAddWindow(app)
										}
									/>
								</WindowsPreview>
							))}

							{runningProcesses
								?.filter(
									([process]) =>
										!initialApps?.some(
											(app) => app?.processName === process
										)
								)
								.map(([process, processWindows]) => (
									<WindowsPreview key={process} process={process}>
										<TaskbarIcon
											key={process}
											app={getValues(processWindows)[0]}
											onClick={handleShowWindow(
												process,
												getKeys(processWindows)[0]
											)}
										/>
									</WindowsPreview>
								))}
						</HStack>
					</HStack>
				</GridItem>

				<GridItem gridColumn={3} justifySelf="flex-end">
					<SystemTray />
				</GridItem>
			</Grid>

			<TaskbarContextMenu
				position={contextMenuPOsition}
				{...contextMenuDisclosure}
			/>
		</>
	);
}
