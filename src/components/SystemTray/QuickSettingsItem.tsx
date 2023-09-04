import { useLayoutEffect, useRef } from 'react';
import {
	Box,
	Button,
	type ButtonProps,
	Text,
	useColorMode,
} from '@chakra-ui/react';
import { useBoolean } from '@chakra-ui/react';

interface QuickSettingsItemProps
	extends Omit<ButtonProps, 'value' | 'defaultValue'> {
	label: string;
	defaultChecked?: boolean;
	isChecked?: boolean;
}

export function QuickSettingsItem(props: QuickSettingsItemProps) {
	const {
		label,
		children,
		defaultChecked,
		isChecked,
		...buttonProps
	} = props;

	const isControlled = useRef(isChecked !== undefined);

	useLayoutEffect(() => {
		if (isChecked !== undefined) {
			isControlled.current = true;
		}
	}, [isChecked]);

	const [innerState, setInnerState] = useBoolean(
		defaultChecked ?? isChecked
	);

	const innerIsChecked = isControlled.current
		? isChecked
		: innerState;

	const { colorMode } = useColorMode();

	return (
		<Box textAlign="center">
			<Button
				variant={
					innerIsChecked
						? 'solid'
						: colorMode === 'dark'
						? 'outline'
						: 'solid'
				}
				colorScheme={innerIsChecked ? 'blue' : 'gray'}
				size="xl"
				w="full"
				px={0}
				// borderWidth="1px"
				onClick={setInnerState.toggle}
				{...buttonProps}
			>
				{children}
			</Button>

			<Text
				fontSize="xs"
				fontWeight="semibold"
				mt={2}
				cursor="default"
			>
				{label}
			</Text>
		</Box>
	);
}
