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
				size="md"
				borderRadius="md"
				icon={<Center w="24px">{app?.icon}</Center>}
				_light={{
					_hover: {
						bg: 'hoverBg',
					},
				}}
				sx={{
					img: {
						transition: 'transform 0.2s ease-out',
					},
					'&:active': {
						img: {
							transform: 'scale(0.75)',
						},
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
