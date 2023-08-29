import { useState } from 'react';
import {
	Box,
	ButtonGroup,
	Card,
	CardBody,
	CardHeader,
	CardProps,
	HStack,
	Icon,
	IconButton,
	Text,
} from '@chakra-ui/react';
import { BiSquareRounded } from 'react-icons/bi';
import { IoClose } from 'react-icons/io5';
import { VscChromeMinimize } from 'react-icons/vsc';
import { type Props, Rnd } from 'react-rnd';

export interface WindowContainerProps extends CardProps {
	title: string;
	icon: React.ReactNode;
	children: React.ReactNode;
	isMaximized: boolean;
	isMinimized: boolean;
	isFocused: boolean;
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
		isFocused,
		onMinimize,
		onMaximize,
		onClose,
		anchorTargetRef,
		initialPosition,
		...rest
	} = props;

	const [size, setSize] = useState<Props['size']>({
		width: initialPosition?.width ?? 600,
		height: initialPosition?.height ?? 'auto',
	});
	const [position, setPosition] = useState<Props['position']>({
		x: initialPosition?.x ?? 0,
		y: initialPosition?.y ?? 0,
	});

	if (isMinimized) return null;

	return (
		<Rnd
			dragHandleClassName="handle"
			style={{
				// eslint-disable-next-line no-inline-styles/no-inline-styles -- style prop is needed to style Rnd
				display: 'flex',
				zIndex: isFocused ? 2 : 1,
			}}
			default={initialPosition}
			size={
				isMaximized ? { width: '100%', height: '100%' } : undefined
			}
			// position={isMaximized ? { x: 0, y: 0 } : undefined}
			minWidth="300px"
			minHeight="150px"
			bounds="main"
		>
			<Card
				variant="window"
				opacity={isFocused ? 1 : 0.975}
				{...rest}
			>
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
		</Rnd>
	);
}
