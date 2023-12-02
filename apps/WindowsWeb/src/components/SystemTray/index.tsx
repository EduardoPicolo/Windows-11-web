import { HStack } from '@chakra-ui/react';

import { AppsTray } from './AppsTray';
import { Clock } from './Clock';
import { QuickSettings } from './QuickSettings';

export function SystemTray() {
	return (
		<HStack alignItems="stretch" spacing={1}>
			<AppsTray />
			<QuickSettings />
			<Clock />
		</HStack>
	);
}
