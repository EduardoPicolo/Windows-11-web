import { useEffect, useState } from 'react';
import {
	type BoxProps,
	forwardRef,
	Text,
	VStack,
} from '@chakra-ui/react';

type ClockProps = BoxProps;

export const Clock = forwardRef<ClockProps, 'div'>((props, ref) => {
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		const timerID = setInterval(() => setTime(new Date()), 1000);

		return () => clearInterval(timerID);
	}, []);

	const hours = time.getHours();
	const minutes = time.getMinutes();
	const formattedTime = `${hours
		.toString()
		.padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
	const formattedDate = `${
		time.getMonth() + 1
	}/${time.getDate()}/${time.getFullYear()}`;

	return (
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
	);
});
