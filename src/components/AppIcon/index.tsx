import {
	forwardRef,
	IconButton,
	type IconButtonProps,
	Tooltip,
} from '@chakra-ui/react';

interface AppIconProps extends Partial<IconButtonProps> {
	name: string;
}

export const AppIcon = forwardRef<AppIconProps, 'button'>(
	(props: AppIconProps, ref) => {
		const { name, ...rest } = props;

		return (
			<Tooltip label={name} openDelay={500}>
				<IconButton
					ref={ref}
					aria-label={name}
					variant="ghost"
					borderRadius="md"
					colorScheme="gray"
					{...rest}
				/>
			</Tooltip>
		);
	}
);
