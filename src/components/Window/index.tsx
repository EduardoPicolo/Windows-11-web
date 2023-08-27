import {
	AbsoluteCenter,
	Box,
	ButtonGroup,
	Card,
	CardBody,
	CardHeader,
	HStack,
	Icon,
	IconButton,
	Portal,
	Text,
} from '@chakra-ui/react';
import { BiSquareRounded } from 'react-icons/bi';
import { IoClose } from 'react-icons/io5';
import { VscChromeMinimize } from 'react-icons/vsc';

interface WindowProps {
	title: string;
	icon?: React.ReactNode;
	children: React.ReactNode;
}

export function Window(props: WindowProps) {
	const { title, icon, children } = props;

	return (
		<Portal>
			<AbsoluteCenter>
				<Card variant="elevated" size="sm">
					<CardHeader py={1} px={2}>
						<HStack justifyContent="space-between">
							<HStack>
								<Box w="20px">{icon}</Box>
								<Text fontSize="md">{title}</Text>
							</HStack>
							<ButtonGroup
								variant="ghost"
								colorScheme="gray"
								size="sm"
							>
								<IconButton
									aria-label="minimize"
									icon={<Icon as={VscChromeMinimize} boxSize={5} />}
								/>
								<IconButton
									aria-label="maximize"
									icon={<Icon as={BiSquareRounded} boxSize={4} />}
								/>
								<IconButton
									aria-label="close"
									colorScheme="red"
									icon={<Icon as={IoClose} boxSize={5} />}
								/>
							</ButtonGroup>
						</HStack>
					</CardHeader>
					<CardBody>{children}</CardBody>
				</Card>
			</AbsoluteCenter>
		</Portal>
	);
}
