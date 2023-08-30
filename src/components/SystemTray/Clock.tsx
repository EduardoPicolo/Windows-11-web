import { useEffect, useState } from 'react';
import {
	type BoxProps,
	forwardRef,
	Text,
	Tooltip,
	VStack,
} from '@chakra-ui/react';

type ClockProps = BoxProps;

export const Clock = forwardRef<ClockProps, 'div'>((props, ref) => {
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		const timerID = setInterval(() => setTime(new Date()), 1000);

		return () => clearInterval(timerID);
	}, []);

	const formattedTime = time.toLocaleTimeString(navigator?.language, {
		hour: '2-digit',
		minute: '2-digit',
		hour12: false,
	});
	const formattedDate = time.toLocaleString(navigator?.language, {
		year: 'numeric',
		day: 'numeric',
		month: 'numeric',
	});

	return (
		<Tooltip
			label={time.toLocaleDateString(navigator?.language, {
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
				_hover={{
					background: 'hoverBg',
					boxShadow: 'thin',
				}}
				fontSize="sm"
				lineHeight={1.35}
				cursor="default"
				transition="all 0.2s"
				{...props}
			>
				<Text>{formattedTime}</Text>
				<Text>{formattedDate}</Text>
			</VStack>
		</Tooltip>
	);
});
