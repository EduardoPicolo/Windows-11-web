import { MouseEventHandler, useCallback } from 'react';
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
import { IoSearch } from 'react-icons/io5';
import { MdLockOutline } from 'react-icons/md';
import { RiUserSettingsLine } from 'react-icons/ri';
import { SlArrowRight, SlPower } from 'react-icons/sl';
import { VscSignOut } from 'react-icons/vsc';

import { apps } from '@/components/Apps/apps';
import { DesktopIcon } from '@/components/DesktopIcon';
import { useWindows } from '@/contexts/Windows';

type StartMenuProps = CardProps;

export const StartMenu = forwardRef<StartMenuProps, 'div'>(
	(props, ref) => {
		const { ...rest } = props;

		const { addWindow } = useWindows();

		const handleAddWindow = useCallback(
			(app: App): MouseEventHandler<HTMLElement> =>
				(event) => {
					addWindow(app);
				},
			[addWindow]
		);

		const backgroundColor = useColorModeValue(
			'whiteAlpha.600',
			'whiteAlpha.100'
		);

		return (
			<Card
				ref={ref}
				size="xl"
				width="700px"
				height="700px"
				userSelect="none"
				cursor="default"
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
							<Text fontSize="md" fontWeight="bold">
								Pinned
							</Text>

							<Button
								variant="solid"
								size="xs"
								colorScheme="gray"
								background={backgroundColor}
								rightIcon={
									<Icon as={SlArrowRight} boxSize={2} ml={1} />
								}
								boxShadow="thin"
							>
								All apps
							</Button>
						</HStack>

						<Grid
							gridTemplateColumns="repeat(6, 1fr)"
							gridTemplateRows="repeat(3, 1fr)"
							gap={0}
							justifyItems="center"
							ml={-8}
							mr={-8}
						>
							{Object.values(apps).map((app) => (
								<DesktopIcon
									app={app}
									key={app.shortName}
									iconSize="42px"
									w="full"
									h="full"
									onClick={handleAddWindow(app)}
									onDoubleClick={undefined}
									textShadow="none"
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
							<Text fontSize="md" fontWeight="bold">
								Recommended
							</Text>

							<Button
								variant="solid"
								size="xs"
								colorScheme="gray"
								background={backgroundColor}
								rightIcon={
									<Icon as={SlArrowRight} boxSize={2} ml={1} />
								}
								boxShadow="thin"
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
							variant="ghost"
							colorScheme="gray"
							py={6}
							leftIcon={<SkeletonCircle boxSize={9} />}
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

					<IconButton
						aria-label="Power"
						variant="ghost"
						colorScheme="gray"
						icon={<Icon as={SlPower} boxSize={6} />}
					/>
				</CardFooter>
			</Card>
		);
	}
);
