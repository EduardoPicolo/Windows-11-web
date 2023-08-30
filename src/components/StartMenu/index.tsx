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
	SkeletonCircle,
	Stack,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import { IoSearch } from 'react-icons/io5';
import { SlArrowRight, SlPower } from 'react-icons/sl';

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
				w="90vw"
				width="700px"
				height="700px"
				userSelect="none"
				cursor="default"
				{...rest}
			>
				<CardHeader>
					<InputGroup size="sm">
						<InputLeftElement ml={2} pointerEvents="none">
							<Icon as={IoSearch} boxSize={5} />
						</InputLeftElement>
						<Input
							pl={10}
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
								variant="solid"
								size="xs"
								colorScheme="gray"
								background={backgroundColor}
								fontWeight="medium"
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
							rowGap={4}
							justifyItems="center"
							ml={-4}
						>
							{Object.values(apps).map((app) => (
								<DesktopIcon
									app={app}
									key={app.shortName}
									iconSize="40px"
									onClick={handleAddWindow(app)}
									onDoubleClick={undefined}
								/>
							))}
							{Object.values(apps).map((app) => (
								<DesktopIcon
									app={app}
									key={app.shortName}
									iconSize="40px"
								/>
							))}
						</Grid>

						<Text fontSize="md" fontWeight="semibold">
							Recommended
						</Text>
					</Stack>
				</CardBody>

				<CardFooter justifyContent="space-between" px={20}>
					<HStack>
						<SkeletonCircle boxSize={9} />
						<Text fontSize="md" fontWeight="semibold">
							Eduardo Pícolo
						</Text>
					</HStack>

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
