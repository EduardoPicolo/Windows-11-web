import { useEffect, useState } from 'react';
import {
	Box,
	type BoxProps,
	forwardRef,
	Text,
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
	const ampm = hours >= 12 ? 'PM' : 'AM';
	const formattedTime = `${hours % 12 || 12}:${minutes
		.toString()
		.padStart(2, '0')} ${ampm}`;
	const formattedDate = `${
		time.getMonth() + 1
	}/${time.getDate()}/${time.getFullYear()}`;

	return (
		<Box
			ref={ref}
			py={1}
			px={2}
			borderRadius="md"
			_hover={{
				background: 'hoverBg',
				boxShadow: 'thin',
			}}
			fontSize="sm"
			lineHeight={1.35}
			textAlign="right"
			cursor="default"
			{...props}
		>
			<Text>{formattedTime}</Text>
			<Text>{formattedDate}</Text>
		</Box>
	);
});
