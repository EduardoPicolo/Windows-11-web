import {
	Center,
	forwardRef,
	IconButton,
	IconButtonProps,
	Tooltip,
} from '@chakra-ui/react';

// type TaskbarIconProps = AppIconProps;

type TaskbarIconProps = Omit<IconButtonProps, 'aria-label' | 'icon'> &
	ExecutableIconProps;

function TaskbarIconInner(
	props: TaskbarIconProps,
	ref: React.ForwardedRef<HTMLButtonElement>
) {
	const { app, ...rest } = props;

	return (
		<Tooltip label={app?.shortName} openDelay={1000}>
			<IconButton
				ref={ref}
				aria-label={app?.shortName}
				variant="ghost"
				colorScheme="gray"
				size="md"
				borderRadius="md"
				icon={<Center w="24px">{app?.icon}</Center>}
				_light={{
					_hover: {
						bg: 'hoverBg',
					},
				}}
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
