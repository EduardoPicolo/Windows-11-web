import {
	Box,
	ButtonGroup,
	Card,
	CardBody,
	CardHeader,
	chakra,
	HStack,
	Icon,
	IconButton,
	Text,
} from '@chakra-ui/react';
import { BiSquareRounded } from 'react-icons/bi';
import { IoClose } from 'react-icons/io5';
import { VscChromeMinimize } from 'react-icons/vsc';
import { type Props, Rnd } from 'react-rnd';

const ChakraRnd = chakra<typeof Rnd, Props>(Rnd);

export interface WindowContainerProps {
	title: string;
	icon: React.ReactNode;
	children: React.ReactNode;
	isMaximized: boolean;
	isMinimized: boolean;
	onMinimize: () => void;
	onMaximize: () => void;
	onClose: () => void;
	initialPosition: Props['default'];
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
		initialPosition,
	} = props;

	if (isMinimized) return null;

	return (
		<ChakraRnd
			dragHandleClassName="handle"
			style={{
				// eslint-disable-next-line no-inline-styles/no-inline-styles -- style prop is needed to style Rnd
				display: 'flex',
			}}
			default={initialPosition}
			minWidth="300px"
			minHeight="150px"
			bounds="main"
		>
			<Card variant="window">
				<CardHeader className="handle">
					<HStack
						justifyContent="space-between"
						cursor="grab"
						_active={{ cursor: 'grabbing' }}
					>
						<HStack>
							<Box
								w="22px"
								userSelect="none"
								unselectable="on"
								pointerEvents="none"
								draggable={false}
							>
								{icon}
							</Box>
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
								onClick={onClose}
								borderRadius="none"
								borderTopRightRadius="md"
								boxShadow="none"
							/>
						</ButtonGroup>
					</HStack>
				</CardHeader>

				<CardBody overflow="auto">{children}</CardBody>
			</Card>
		</ChakraRnd>
	);
}
