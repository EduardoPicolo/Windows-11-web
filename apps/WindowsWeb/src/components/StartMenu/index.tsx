import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	type CardProps,
	forwardRef,
	Grid,
	HStack,
	Icon,
	IconButton,
	Input,
	InputGroup,
	InputLeftElement,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Portal,
	SkeletonCircle,
	Stack,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import type { MouseEventHandler } from 'react';
import { useCallback } from 'react';
import { IoSearch } from 'react-icons/io5';
import { MdLockOutline } from 'react-icons/md';
import { RiUserSettingsLine } from 'react-icons/ri';
import { SlArrowRight, SlPower } from 'react-icons/sl';
import { VscSignOut } from 'react-icons/vsc';

import { apps } from '@/components/Apps/apps';
import { DesktopIcon } from '@/components/DesktopIcon';
import { useWindows } from '@/contexts/Windows';

type StartMenuProps = CardProps & {
	onClose: () => void;
};

export const StartMenu = forwardRef<StartMenuProps, 'div'>(
	(props, ref) => {
		const { onClose, ...rest } = props;

		const { addWindow } = useWindows();

		const handleAddWindow = useCallback(
			(app: App): MouseEventHandler<HTMLElement> =>
				(event) => {
					onClose();
					addWindow(app);
				},
			[addWindow, onClose]
		);

		const handleRestart = useCallback(() => {
			if (typeof window !== 'undefined') window.location.reload();
		}, []);

		const backgroundColor = useColorModeValue(
			'whiteAlpha.600',
			'whiteAlpha.100'
		);

		return (
			<Card
				cursor="default"
				height="700px"
				ref={ref}
				size="xl"
				userSelect="none"
				width="700px"
				{...rest}
			>
				<CardHeader>
					<InputGroup size="sm">
						<InputLeftElement ml={3} pointerEvents="none">
							<Icon as={IoSearch} boxSize={5} />
						</InputLeftElement>
						<Input
							pl={12}
							placeholder="Search for apps, settings, and documents"
						/>
					</InputGroup>
				</CardHeader>

				<CardBody>
					<Stack spacing={4}>
						<HStack justifyContent="space-between">
							<Text fontSize="md" fontWeight="semibold">
								Pinned
							</Text>

							<Button
								background={backgroundColor}
								boxShadow="thin"
								colorScheme="gray"
								rightIcon={
									<Icon as={SlArrowRight} boxSize={2} ml={1} />
								}
								size="xs"
								variant="solid"
							>
								All apps
							</Button>
						</HStack>

						<Grid
							gap={0}
							gridTemplateColumns="repeat(6, 1fr)"
							gridTemplateRows="repeat(3, 1fr)"
							justifyItems="center"
							ml={-8}
							mr={-8}
						>
							{Object.values(apps).map((app) => (
								<DesktopIcon
									app={app}
									h="full"
									iconSize="42px"
									key={app.shortName}
									onClick={handleAddWindow(app)}
									onDoubleClick={undefined}
									textShadow="none"
									w="full"
									color="inherit"
									/**
									 * Remove the `className` to avoid react-selecto
									 * being able to select
									 */
									className=""
								/>
							))}
						</Grid>

						<HStack justifyContent="space-between">
							<Text fontSize="md" fontWeight="semibold">
								Recommended
							</Text>

							<Button
								background={backgroundColor}
								boxShadow="thin"
								colorScheme="gray"
								rightIcon={
									<Icon as={SlArrowRight} boxSize={2} ml={1} />
								}
								size="xs"
								variant="solid"
							>
								More
							</Button>
						</HStack>
					</Stack>
				</CardBody>

				<CardFooter justifyContent="space-between">
					<Menu placement="top" size="sm">
						<MenuButton
							as={Button}
							colorScheme="gray"
							leftIcon={<SkeletonCircle boxSize={9} />}
							py={6}
							variant="ghost"
						>
							Eduardo Pícolo
						</MenuButton>
						<Portal>
							<MenuList>
								<MenuItem icon={<Icon as={RiUserSettingsLine} />}>
									Change Account Settings
								</MenuItem>
								<MenuItem icon={<Icon as={MdLockOutline} />}>
									Lock
								</MenuItem>
								<MenuItem icon={<Icon as={VscSignOut} />}>
									Sign out
								</MenuItem>
							</MenuList>
						</Portal>
					</Menu>

					<Menu placement="top" size="sm">
						<MenuButton
							aria-label="Power"
							as={IconButton}
							colorScheme="gray"
							icon={<Icon as={SlPower} boxSize={6} />}
							variant="ghost"
						/>
						<Portal>
							<MenuList minWidth="100px">
								<MenuItem onClick={handleRestart}>Restart</MenuItem>
								<MenuItem>Turn off</MenuItem>
							</MenuList>
						</Portal>
					</Menu>
				</CardFooter>
			</Card>
		);
	}
);
