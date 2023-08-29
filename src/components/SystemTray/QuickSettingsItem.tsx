import {
	Box,
	Button,
	type ButtonProps,
	Text,
	useColorMode,
} from '@chakra-ui/react';
import { useBoolean } from '@chakra-ui/react';

interface QuickSettingsItemProps extends ButtonProps {
	label: string;
	initialActiveState?: boolean;
}

export function QuickSettingsItem(props: QuickSettingsItemProps) {
	const { label, children, initialActiveState, ...buttonProps } =
		props;

	const [isOn, setIsOn] = useBoolean(initialActiveState);

	const { colorMode } = useColorMode();

	return (
		<Box textAlign="center">
			<Button
				variant={
					isOn ? 'solid' : colorMode === 'dark' ? 'outline' : 'solid'
				}
				colorScheme={isOn ? 'blue' : 'gray'}
				size="xl"
				w="full"
				px={0}
				borderWidth="1px"
				onClick={setIsOn.toggle}
				{...buttonProps}
			>
				{children}
			</Button>

			<Text
				fontSize="sm"
				fontWeight="semibold"
				mt={2}
				cursor="default"
			>
				{label}
			</Text>
		</Box>
	);
}
