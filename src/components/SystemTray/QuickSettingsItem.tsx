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
}

export function QuickSettingsItem(props: QuickSettingsItemProps) {
	const { label, children, ...buttonProps } = props;

	const [isOn, setIsOn] = useBoolean(false);

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
