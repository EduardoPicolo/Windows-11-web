import { HStack } from '@chakra-ui/react';

import { AppsTray } from '@/components/SystemTray/AppsTray';
import { QuickSettings } from '@/components/SystemTray/QuickSettings';

import { Clock } from './Clock';

export function SystemTray() {
	return (
		<HStack alignItems="stretch" spacing={1}>
			<AppsTray />
			<QuickSettings />
			<Clock />
		</HStack>
	);
}
