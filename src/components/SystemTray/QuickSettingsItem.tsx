import {
	Box,
	Button,
	type ButtonProps,
	Text,
} from '@chakra-ui/react';

interface QuickSettingsItemProps extends ButtonProps {
	label: string;
}

export function QuickSettingsItem(props: QuickSettingsItemProps) {
	const { label, children, ...rest } = props;

	return (
		<Box textAlign="center">
			<Button variant="outline" colorScheme="gray" size="xl" w="full">
				{children}
			</Button>

			<Text fontSize="sm" fontWeight="semibold" mt={2}>
				{label}
			</Text>
		</Box>
	);
}
