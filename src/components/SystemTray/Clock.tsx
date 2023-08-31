'use client';

import { useLayoutEffect, useState } from 'react';
import {
	type BoxProps,
	forwardRef,
	Text,
	Tooltip,
	VStack,
} from '@chakra-ui/react';

const useNavigator =
	typeof navigator === 'undefined' ? null : navigator;

type ClockProps = BoxProps;

export const Clock = forwardRef<ClockProps, 'div'>((props, ref) => {
	const [time, setTime] = useState(new Date());

	const navigator = useNavigator;

	useLayoutEffect(() => {
		const timerID = setInterval(() => setTime(new Date()), 1000);

		return () => clearInterval(timerID);
	}, []);

	const formattedTime = time.toLocaleTimeString(
		navigator?.language ?? 'en-US',
		{
			hour: '2-digit',
			minute: '2-digit',
			hour12: false,
		}
	);
	const formattedDate = time.toLocaleString(
		navigator?.language ?? 'en-US',
		{
			year: 'numeric',
			day: 'numeric',
			month: 'numeric',
		}
	);

	return (
		<Tooltip
			label={time.toLocaleDateString(navigator?.language ?? 'en-US', {
				weekday: 'long',
				month: 'long',
				day: 'numeric',
				year: 'numeric',
			})}
			openDelay={1000}
		>
			<VStack
				ref={ref}
				spacing={0}
				align="flex-end"
				py={1}
				px={2}
				borderRadius="md"
				fontSize="sm"
				fontWeight="semibold"
				lineHeight={1.35}
				cursor="default"
				transition="all 0.2s"
				_hover={{
					background: 'hoverBg',
					boxShadow: 'thin',
				}}
				{...props}
			>
				<Text>{formattedTime}</Text>
				<Text>{formattedDate}</Text>
			</VStack>
		</Tooltip>
	);
});
