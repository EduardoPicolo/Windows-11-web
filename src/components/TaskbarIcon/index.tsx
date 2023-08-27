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

export const TaskbarIcon = forwardRef<TaskbarIconProps, 'button'>(
	(props, ref) => {
		const { name, icon, ...rest } = props;

		return (
			<Tooltip label={name} openDelay={600}>
				<IconButton
					ref={ref}
					aria-label={name}
					variant="ghost"
					borderRadius="md"
					colorScheme="gray"
					icon={<Center w="26px">{icon}</Center>}
					{...rest}
				/>
			</Tooltip>
		);
	}
);
