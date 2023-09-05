'use client';

import {
	type MouseEventHandler,
	SyntheticEvent,
	useLayoutEffect,
	useRef,
	useState,
} from 'react';
import {
	Box,
	ButtonGroup,
	Card,
	CardBody,
	CardHeader,
	type CardProps,
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
import { motion } from 'framer-motion';

export interface WindowContainerProps
	extends Omit<CardProps, 'onFocus'> {
	title: string;
	icon: React.ReactNode;
	children: React.ReactNode;
	isMaximized: boolean;
	isMinimized: boolean;
	isFocused: boolean;
	onMinimize: MouseEventHandler<HTMLButtonElement>;
	onMaximize: MouseEventHandler<HTMLButtonElement>;
	onFocus: (event?: SyntheticEvent) => void;
	onClose: MouseEventHandler<HTMLButtonElement>;
	initialPosition: Props['default'];
	anchorTargetRef?: React.RefObject<HTMLButtonElement>;
}

const staticPosition = {
	x: 0,
	y: 0,
};

const MotionCard = motion(Card);

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
		onFocus,
		onClose,
		anchorTargetRef,
		initialPosition,
		...rest
	} = props;

	useLayoutEffect(() => {
		onFocus?.();
		// eslint-disable-next-line react-hooks/exhaustive-deps -- only run on mount
	}, []);

	const mainRef = useRef<HTMLElement | null>(null);

	if (!mainRef.current && typeof window !== 'undefined')
		[mainRef.current] = document.querySelectorAll('main');

	const maxSize = useSize(mainRef);

	// console.group('WindowContainer');
	// console.log('isMaximized', isMaximized);
	// console.log('isMinimized', isMinimized);
	// console.log('isFocused', isFocused);
	// console.log('initialPosition', initialPosition);
	// console.log('maxSize', maxSize);
	// console.groupEnd();

	const [rndState, setState] = useState({
		x: initialPosition?.x ?? 0,
		y: initialPosition?.y ?? 0,
		width: initialPosition?.width ?? 100,
		height: initialPosition?.height ?? 100,
	});

	// if (isMinimized) return null;

	return (
		<Rnd
			dragHandleClassName="handle"
			style={{
				// eslint-disable-next-line no-inline-styles/no-inline-styles -- style prop is needed to style Rnd
				// display: isMinimized ? 'none' : 'flex',
				zIndex: isFocused ? 2 : 1,
			}}
			default={initialPosition}
			size={isMaximized ? maxSize : rndState}
			position={isMaximized ? staticPosition : rndState}
			bounds="main"
			minWidth="140px"
			minHeight="100px"
			disableDragging={isMaximized}
			/* eslint-disable react-perf/jsx-no-new-function-as-prop -- ignore */
			onDragStop={(_e, d) => {
				setState((prev) => ({
					x: d.x,
					y: d.y,
					width: prev.width,
					height: prev.height,
				}));
			}}
			onResizeStop={(_e, _direction, ref, _delta, position) => {
				setState({
					width: ref.style.width,
					height: ref.style.height,
					...position,
				});
			}}
			/* eslint-enable react-perf/jsx-no-new-function-as-prop */
		>
			<MotionCard
				variant="window"
				height="100%"
				onClick={onFocus}
				filter={
					isFocused
						? 'brightness(1)'
						: 'brightness(0.9) contrast(0.9) '
				}
				boxShadow={isFocused ? 'dark-lg' : 'base'}
				borderBottomRadius={isMaximized ? '0' : 'md'}
				// hidden={isMinimized}
				initial={{
					opacity: 0.33,
					scale: 0.75,
					y: 0,
					x: 0,
				}}
				animate={
					isMinimized
						? {
								opacity: 0,
								scale: 0.25,
								y: '100%',
						  }
						: {
								opacity: 1,
								scale: 1,
						  }
				}
				exit={
					isMinimized
						? {
								opacity: 0,
								scale: 0,
						  }
						: {
								opacity: 0,
								scale: 0.75,
						  }
				}
				transition={{
					type: 'tween',
					duration: 0.2,
					ease: 'circOut',
				}}
				{...rest}
			>
				<CardHeader className="handle">
					<HStack
						justifyContent="space-between"
						cursor="grab"
						_active={{ cursor: 'grabbing' }}
					>
						<HStack overflow="hidden">
							<Box
								w="22px"
								userSelect="none"
								unselectable="on"
								draggable={false}
								pointerEvents="none"
								flexShrink={0}
							>
								{icon}
							</Box>
							<Text fontSize="md" noOfLines={1}>
								{title}
							</Text>
						</HStack>
						<ButtonGroup
							variant="ghost"
							colorScheme="gray"
							size="sm"
							spacing={1}
							cursor="default"
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
			</MotionCard>
		</Rnd>
	);
}
