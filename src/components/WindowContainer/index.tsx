'use client';

import { useEffect, useRef } from 'react';
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
import { useSize } from '@chakra-ui/react-use-size';
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

	// const [size, setSize] = useState<Props['size']>({
	// 	width: initialPosition?.width ?? '400',
	// 	height: initialPosition?.height ?? 'auto',
	// });
	// const [position, setPosition] = useState<Props['position']>({
	// 	x: initialPosition?.x ?? 0,
	// 	y: initialPosition?.y ?? 0,
	// });

	console.group('WindowContainer');
	console.log('isMaximized', isMaximized);
	console.log('isMinimized', isMinimized);
	console.log('isFocused', isFocused);
	console.log('initialPosition', initialPosition);
	// console.log('size', size);
	// console.log('position', position);
	console.groupEnd();

	const mainRef = useRef<HTMLElement | null>(
		// document?.getElementsByTagName('main')[0]
		null
	);

	useEffect(() => {
		if (typeof window === 'undefined') return;

		mainRef.current = document?.getElementsByTagName('main')[0];
	}, []);

	const size = useSize(mainRef);

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
			// size={
			// 	isMaximized
			// 		? {
			// 				width: '100%',
			// 				height: '100%',
			// 		  }
			// 		: undefined
			// }
			// // position={isMaximized ? { x: 0, y: 0 } : undefined}
			size={
				isMaximized
					? {
							width: size?.width ?? '100%',
							height: size?.height ?? '100%',
					  }
					: undefined
			}
			position={
				isMaximized
					? { x: 0, y: -document.body.offsetHeight }
					: undefined
			}
			// size={
			// 	isMaximized
			// 		? { width: '100vw', height: '100%' }
			// 		: { width: size.width, height: size.height }
			// }
			// position={
			// 	isMaximized
			// 		? { x: 0, y: 0 }
			// 		: { x: position.x, y: position.y }
			// }
			// onDragStop={(e, d) => {
			// 	setPosition({ x: d.x, y: d.y });
			// }}
			// onResizeStop={(e, direction, ref, delta, newPosition) => {
			// 	console.log('onResizeStop', newPosition);
			// 	setPosition(newPosition);
			// 	setSize({
			// 		height: ref.style.height,
			// 		width: ref.style.width,
			// 	});
			// }}
			minWidth="300px"
			minHeight="150px"
			bounds="main"
		>
			<Card
				variant="window"
				opacity={isFocused ? 1 : 0.975}
				userSelect="none"
				unselectable="on"
				draggable={false}
				borderBottomRadius={isMaximized ? '0' : 'md'}
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
								draggable={false}
								pointerEvents="none"
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
