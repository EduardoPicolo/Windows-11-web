import {
	Box,
	Card,
	CardBody,
	CardHeader,
	Center,
	HStack,
	Icon,
	IconButton,
	Popover,
	PopoverContent,
	type PopoverProps,
	PopoverTrigger,
	Portal,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import {
	type MouseEventHandler,
	type ReactNode,
	useCallback,
	useMemo,
} from 'react';
import { IoClose } from 'react-icons/io5';

import { useWindows } from '@/contexts/Windows';
import { getEntries } from '@/utils/getEntries';

interface WindowsPreviewProps extends Partial<PopoverProps> {
	children: ReactNode;
	process: Process;
}

export function WindowsPreview(props: WindowsPreviewProps) {
	const { children, process, ...rest } = props;

	const {
		windows,
		closeWindow,
		minimize,
		focusedWindow,
		focusWindow,
	} = useWindows();

	const isRunning = useMemo(
		() => Boolean(windows[process]),
		[windows, process]
	);

	const allProcessWindows = useMemo(
		() => getEntries(windows[process]),
		[windows, process]
	);

	const handleFocusWindow = useCallback(
		(windowId: number) => () => {
			minimize.off(process, windowId);
			focusWindow(process, windowId);
		},
		[focusWindow, minimize, process]
	);

	const handleCloseWindow = useCallback(
		(
			process2: Process,
			id: number
		): MouseEventHandler<HTMLButtonElement> =>
			(event) => {
				/**
				 * Prevents firing `onClick` in the parent (Card) and trying
				 * to focus the closed window
				 */
				event.stopPropagation();
				closeWindow(process2, id);
			},
		[closeWindow]
	);

	const notchColor = useColorModeValue('white', 'gray.400');

	return (
		<Popover gutter={16} openDelay={400} trigger="hover" {...rest}>
			<PopoverTrigger>
				<Box
					_after={{
						display: isRunning ? 'block' : 'none',
						content: '""',
						position: 'absolute',
						bottom: 0,
						left: '50%',
						transform: 'translateX(-50%)',
						width:
							focusedWindow?.process === process ? '16px' : '6px',
						height: '3px',
						borderRadius: 'full',
						bg:
							focusedWindow?.process === process
								? 'primary'
								: notchColor,
						opacity: 1,
						transition: 'all 0.2s',
					}}
					position="relative"
				>
					{children}
				</Box>
			</PopoverTrigger>
			<Portal>
				{isRunning ? (
					<PopoverContent
						_after={{
							display: 'none',
						}}
						_before={{
							display: 'none',
						}}
						backdropFilter="none"
						background="transparent"
						backgroundColor="transparent"
						border="none"
						boxShadow="none"
						width="fit-content"
					>
						<HStack spacing={1.5}>
							{allProcessWindows.map(([windowId, app]) => (
								<Card
									borderRadius="md"
									key={windowId}
									onClick={handleFocusWindow(windowId)}
									size="sm"
									w="200px"
								>
									<CardHeader>
										<HStack justifyContent="space-between">
											<HStack>
												<Box
													boxSize="18px"
													draggable={false}
													pointerEvents="none"
													unselectable="on"
													userSelect="none"
												>
													{app.icon}
												</Box>
												<Text fontSize="xs" noOfLines={1}>
													{app.shortName}
												</Text>
											</HStack>

											<IconButton
												aria-label="close"
												colorScheme="red"
												icon={<Icon as={IoClose} boxSize={5} />}
												onClick={handleCloseWindow(process, windowId)}
												size="xs"
												variant="ghost"
											/>
										</HStack>
									</CardHeader>
									<CardBody borderBottomRadius="inherit">
										<Center w="full">
											<Box boxSize="150px">{app.icon}</Box>
										</Center>
									</CardBody>
								</Card>
							))}
						</HStack>
					</PopoverContent>
				) : null}
			</Portal>
		</Popover>
	);
}
