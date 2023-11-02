import type { IconButtonProps } from '@chakra-ui/react';
import {
	Center,
	forwardRef,
	IconButton,
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
		<Tooltip label={app.shortName} openDelay={1000}>
			<IconButton
				_light={{
					_hover: {
						bg: 'hoverBg',
					},
				}}
				aria-label={app.shortName}
				borderRadius="md"
				icon={<Center w="24px">{app.icon}</Center>}
				ref={ref}
				size="md"
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
				variant="ghost"
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
