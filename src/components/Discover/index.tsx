import { useLayoutEffect, useState } from 'react';
import {
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerProps,
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
			() => setTime(new Date()),
			60 * 60 * 24
		);

		return () => clearInterval(timerID);
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
				aria-label="discover"
				variant="ghost"
				colorScheme="gray"
				height="100%"
				size="sm"
				icon={<Icon transition="transform 0.3s ease-in-out" />}
				_light={{
					_hover: {
						bg: 'hoverBg',
					},
				}}
				onClick={onOpen}
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
					height="calc(100% - 50px)"
					borderRadius="md"
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
