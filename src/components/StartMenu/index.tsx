import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	type CardProps,
	forwardRef,
	HStack,
	Icon,
	IconButton,
	InputLeftElement,
	SkeletonCircle,
	Text,
} from '@chakra-ui/react';
import { GoSearch } from 'react-icons/go';
import { SlArrowRight, SlPower } from 'react-icons/sl';

import { Input } from '@/components/FormFields';

type StartMenuProps = CardProps;

export const StartMenu = forwardRef<StartMenuProps, 'div'>(
	(props, ref) => {
		const { ...rest } = props;

		return (
			<Card
				ref={ref}
				size="lg"
				w="90vw"
				maxW="700px"
				height="700px"
				userSelect="none"
				cursor="default"
				{...rest}
			>
				<CardHeader>
					<Input
						variant="filled"
						placeholder="Search for apps, settings, and documents"
						leftElement={
							<InputLeftElement>
								<Icon as={GoSearch} boxSize={5} />
							</InputLeftElement>
						}
					/>
				</CardHeader>

				<CardBody>
					<HStack justifyContent="space-between">
						<Text fontSize="md" fontWeight="semibold">
							Pinned
						</Text>

						<Button
							variant="solid"
							size="xs"
							colorScheme="gray"
							fontWeight="semibold"
							rightIcon={<Icon as={SlArrowRight} boxSize={2} />}
							boxShadow="thin"
						>
							All apps
						</Button>
					</HStack>
				</CardBody>

				<CardFooter justifyContent="space-between" px={20}>
					<HStack>
						<SkeletonCircle boxSize={10} />
						<Text>Eduardo Picolo</Text>
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
