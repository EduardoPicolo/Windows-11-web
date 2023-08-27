import { useRef } from 'react';
import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	type CardProps,
	chakra,
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
import { block } from 'million/react';

import { Input } from '@/components/FormFields';

const SlideFadeWithStyles = chakra(SlideFade, {
	baseStyle: {
		position: 'absolute',
		bottom: 'calc(56px + 1rem)',
		background: 'transparent',
		backdropFilter: 'blur(20.5px) saturate(180%)',
		borderRadius: 'xl',
		left: '10%',
	},
});

interface StartMenuProps extends CardProps {
	isOpen: boolean;
	onClose: () => void;
}

export const StartMenu = block((props: StartMenuProps) => {
	const { isOpen, onClose, ...rest } = props;

	const ref = useRef<HTMLDivElement>(null);

	useOutsideClick({
		ref,
		handler: onClose,
	});

	return (
		<SlideFadeWithStyles
			in={isOpen}
			unmountOnExit
			offsetY="100px"
			// Firefox only
			sx={{
				'@-moz-document url-prefix()': {
					backdropFilter: 'blur(20.5px)',
				},
			}}
		>
			<Card
				ref={ref}
				size="lg"
				w="90vw"
				maxW="700px"
				height="700px"
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
		</SlideFadeWithStyles>
	);
});
