import { HStack } from '@chakra-ui/react';

import { Clock } from './Clock';

export function SystemTray() {
	return (
		<HStack>
			<Clock />
		</HStack>
	);
}
