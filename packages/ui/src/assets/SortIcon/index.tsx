import React from 'react';
import {
	Icon,
	type IconProps,
	useColorModeValue,
} from '@chakra-ui/react';
import { TbArrowsSort } from 'react-icons/tb';

type SortIconProps = IconProps;

export function SortIcon(props: SortIconProps) {
	const color = useColorModeValue('blue.600', 'blue.400');

	return (
		<Icon
			as={TbArrowsSort}
			sx={{
				/** Select first arrow (<path /> tag) and change its color */
				'& > path:nth-child(3)': {
					color,
					fill: color,
				},
			}}
			{...props}
		/>
	);
}
