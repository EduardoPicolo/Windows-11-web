import { useCallback } from 'react';
import {
	Center,
	forwardRef,
	IconButton,
	IconButtonProps,
	Tooltip,
} from '@chakra-ui/react';

import { useWindows } from '@/contexts/Windows';

// type TaskbarIconProps = AppIconProps;

type TaskbarIconProps = Omit<IconButtonProps, 'aria-label' | 'icon'> &
	ExecutableIconProps;

function TaskbarIconInner(
	props: TaskbarIconProps,
	ref: React.ForwardedRef<HTMLButtonElement>
) {
	const { app, ...rest } = props;

	const { onAddWindow } = useWindows();

	const handleAddWindow = useCallback(() => {
		onAddWindow(app);
	}, [app, onAddWindow]);

	return (
		<Tooltip label={app?.shortName} openDelay={600}>
			<IconButton
				ref={ref}
				aria-label={app?.shortName}
				variant="ghost"
				colorScheme="gray"
				// size="lg"
				size="md"
				borderRadius="md"
				icon={<Center w="24px">{app?.icon}</Center>}
				onClick={handleAddWindow}
				{...rest}
			/>
		</Tooltip>
	);
}

export const TaskbarIcon = forwardRef(TaskbarIconInner) as (
	props: TaskbarIconProps & {
		ref?: React.ForwardedRef<HTMLButtonElement>;
	}
) => ReturnType<typeof TaskbarIconInner>;
