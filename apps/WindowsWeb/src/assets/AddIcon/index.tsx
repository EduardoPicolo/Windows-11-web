import React from 'react';
import {
	Icon,
	type IconProps,
	useColorModeValue,
} from '@chakra-ui/react';
import { IoAddCircleOutline } from 'react-icons/io5';

type AddIconProps = IconProps;

export function AddIcon(props: AddIconProps) {
	const color = useColorModeValue('blue.700', 'blue.400');

	return (
		<Icon
			as={IoAddCircleOutline}
			sx={{
				'& > path:nth-child(2)': {
					color,
					fill: color,
				},
			}}
			{...props}
		/>
	);
}
