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
	(props: AppIconProps) => {
		const { name, ...rest } = props;

		return (
			<Tooltip label={name} openDelay={750}>
				<IconButton
					aria-label={name}
					variant="ghost"
					size="lg"
					borderRadius="md"
					{...rest}
				/>
			</Tooltip>
		);
	}
);
