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

export interface WindowProps {
	title: string;
	icon: React.ReactNode;
	children: React.ReactNode;
	isMaximized: boolean;
	isMinimized: boolean;
	onMinimize: () => void;
	onMaximize: () => void;
	onClose: () => void;
	anchorTargetRef?: React.RefObject<HTMLButtonElement>;
}

export function Window(props: WindowProps) {
	const {
		title,
		icon,
		children,
		isMaximized,
		isMinimized,
		onMinimize,
		onMaximize,
		onClose,
		anchorTargetRef,
	} = props;

	if (isMinimized) return null;

	return (
		<Portal>
			<AbsoluteCenter
			// width={isMaximized ? '75vw' : 'auto'}
			// height={isMaximized ? '75vh' : 'auto'}
			// left={isMaximized ? 0 : 'auto'}
			// top={isMaximized ? 0 : 'auto'}
			>
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
									onClick={onMinimize}
								/>
								<IconButton
									aria-label="maximize"
									icon={<Icon as={BiSquareRounded} boxSize={4} />}
									onClick={onMaximize}
								/>
								<IconButton
									aria-label="close"
									colorScheme="red"
									icon={<Icon as={IoClose} boxSize={5} />}
									onClick={() => {
										console.log('calling close', onClose);
										onClose();
									}}
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
