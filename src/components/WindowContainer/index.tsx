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

export interface WindowContainerProps {
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

export function WindowContainer(props: WindowContainerProps) {
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
				<Card variant="window">
					<CardHeader>
						<HStack justifyContent="space-between">
							<HStack>
								<Box w="22px">{icon}</Box>
								<Text fontSize="md">{title}</Text>
							</HStack>
							<ButtonGroup
								variant="ghost"
								colorScheme="gray"
								size="md"
								spacing={0}
							>
								<IconButton
									aria-label="minimize"
									icon={<Icon as={VscChromeMinimize} boxSize={5} />}
									onClick={onMinimize}
									borderRadius="none"
									boxShadow="none"
								/>
								<IconButton
									aria-label="maximize"
									icon={<Icon as={BiSquareRounded} boxSize={4} />}
									onClick={onMaximize}
									borderRadius="none"
									boxShadow="none"
								/>
								<IconButton
									aria-label="close"
									colorScheme="red"
									icon={<Icon as={IoClose} boxSize={5} />}
									onClick={() => {
										console.log('calling close', onClose);
										onClose();
									}}
									borderRadius="none"
									borderTopRightRadius="md"
									boxShadow="none"
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
