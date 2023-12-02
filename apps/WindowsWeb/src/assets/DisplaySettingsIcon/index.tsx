import {
	Icon,
	type IconProps,
	useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { MdDisplaySettings } from 'react-icons/md';

type DisplaySettingsIconProps = IconProps;

export function DisplaySettingsIcon(props: DisplaySettingsIconProps) {
	const color = useColorModeValue('blue.700', 'blue.400');

	return (
		<Icon
			as={MdDisplaySettings}
			sx={{
				'& > path:nth-child(3)': {
					color,
					fill: color,
				},
			}}
			{...props}
		/>
	);
}
