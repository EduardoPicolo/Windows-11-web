"use client";

import { useLayoutEffect, useState } from 'react';
import type { DrawerProps } from '@chakra-ui/react';
import {
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	Icon,
	IconButton,
	Text,
	useDisclosure,
} from '@chakra-ui/react';

const useNavigator = () =>
	typeof navigator === 'undefined' ? null : navigator;

type DiscoverProps = Partial<DrawerProps>;

export function Discover(props: DiscoverProps) {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const [time, setTime] = useState(new Date());

	const navigator = useNavigator();

	useLayoutEffect(() => {
		const timerID = setInterval(
			() => {
				setTime(new Date());
			},
			60 * 60 * 24
		);

		return () => {
			clearInterval(timerID);
		};
	}, []);

	const formattedDate = time.toLocaleString(
		navigator?.language ?? 'en-US',
		{
			day: '2-digit',
			month: 'long',
		}
	);

	return (
		<>
			<IconButton
				_light={{
					_hover: {
						bg: 'hoverBg',
					},
				}}
				aria-label="discover"
				colorScheme="gray"
				height="100%"
				icon={<Icon transition="transform 0.3s ease-in-out" />}
				onClick={onOpen}
				size="sm"
				variant="ghost"
			/>

			<Drawer
				isOpen={isOpen}
				onClose={onClose}
				placement="left"
				size="xl"
				{...props}
			>
				<DrawerOverlay />
				<DrawerContent
					borderRadius="md"
					height="calc(100% - 50px)"
					sx={{
						position: 'relative !important',
					}}
				>
					<DrawerHeader>
						<Text fontSize="xs">{formattedDate}</Text>
						<Text fontSize="lg">Good morning</Text>
					</DrawerHeader>

					<DrawerBody />

					<DrawerFooter />
				</DrawerContent>
			</Drawer>
		</>
	);
}
