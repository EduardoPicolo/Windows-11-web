import { HStack, Icon, type StackProps } from '@chakra-ui/react';
import { PiWifiHighBold } from 'react-icons/pi';

import { SpeakerIcon } from '@/components/SystemTray/VolumeIcon';

type QuickSettingsProps = StackProps;

export function QuickSettings(props: QuickSettingsProps) {
	return (
		<HStack
			py={1}
			px={2}
			borderRadius="md"
			_hover={{
				background: 'hoverBg',
				boxShadow: 'thin',
			}}
			cursor="default"
			{...props}
		>
			<Icon as={PiWifiHighBold} boxSize={5} />
			<SpeakerIcon volumeLevel={1} boxSize={5} />
		</HStack>
	);
}
