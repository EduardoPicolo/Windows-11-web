import { useRef } from 'react';
import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	type CardProps,
	Divider,
	HStack,
	Icon,
	IconButton,
	InputLeftElement,
	SkeletonCircle,
	SlideFade,
	Text,
	useOutsideClick,
} from '@chakra-ui/react';
import { GoSearch } from 'react-icons/go';
import { SlArrowRight, SlPower } from 'react-icons/sl';

import { Input } from '@/components/FormFields';

interface StartMenuProps extends CardProps {
	isOpen: boolean;
	onClose: () => void;
}

export function StartMenu(props: StartMenuProps) {
	const { isOpen, onClose, ...rest } = props;

	const ref = useRef<HTMLDivElement>(null);

	useOutsideClick({
		ref,
		handler: onClose,
	});

	return (
		<SlideFade
			unmountOnExit
			in={isOpen}
			offsetY="100px"
			style={{
				position: 'absolute',
				bottom: 'calc(56px + 1rem)',
				left: '10%',
			}}
		>
			<Card ref={ref} size="lg" w="90vw" maxW="700px" {...rest}>
				<CardHeader>
					<Input
						variant="filled"
						placeholder="Type here to search"
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
							fontWeight="medium"
							rightIcon={<Icon as={SlArrowRight} boxSize={2} />}
							boxShadow="thin"
						>
							All apps
						</Button>
					</HStack>
				</CardBody>

				<Divider />

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
		</SlideFade>
	);
}
